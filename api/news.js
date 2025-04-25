if (process.env.NODE_ENV !== "Production") {
  (async () => {
    const dotenv = await import("dotenv");
    dotenv.config();
  })();
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { type, query } = req.query;

  if (!type) {
    return res.status(400).json({
      error: "Missing type of request - which determines the api endpoint",
    });
  }

  // Handle the endpoints from ResultsPage
  let apiUrl = "";
  switch (type) {
    case "search":
      if (!query) return; // Don't run without a query
      apiUrl = `https://news67.p.rapidapi.com/v2/topic-search?languages=en&search=${query}`;
      break;

    case "news": // for news feed
      apiUrl = `https://news67.p.rapidapi.com/v2/feed?languages=en`;
      break;

    case "crypto": // for crypto
      apiUrl = `https://news67.p.rapidapi.com/v2/crypto?languages=en`;
      break;

    // Handle request from Homepage
    case "home":
      apiUrl = `https://news67.p.rapidapi.com/v2/country-news?fromCountry=pk&languages=en`;
      break;

    default:
      console.warn("Unknown type passed to ResultsPage");
      return;
  }

  const apiKey = process.env.REACT_APP_REST_NEWS_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "API key not configured." });
  }

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "news67.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(apiUrl, options);

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: errorText });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in API call: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
