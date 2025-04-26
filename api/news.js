if (process.env.NODE_ENV !== "production") {
  (async () => {
    const dotenv = await import("dotenv");
    dotenv.config();
  })();
}

const fs = require("fs").promises;
const path = require("path");

export default async function handler(req, res) {
  //Return mockdata if in development
  if (process.env.NODE_ENV === "development") {
    try {
      // Resolve the path to your local mockData.json file
      const filePath = path.resolve(__dirname, "mockData.json");

      // Read the JSON file
      const data = await fs.readFile(filePath, "utf-8");

      // Parse the data as JSON
      const jsonData = JSON.parse(data);

      // Send the JSON data as a response
      res.status(200).json(jsonData);
    } catch (error) {
      console.error("Error reading JSON file:", error);
      res.status(500).json({ error: "Failed to read mockData.json" });
    }
  }

  //Fetch Data from api if not in development
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

      // Check if the error status is 429 (rate limit exceeded)
      if (response.status === 429) {
        // Serve mock data instead of real data if rate limit is exceeded
        const filePath = path.resolve(__dirname, "mockData.json");
        const mockData = await fs.readFile(filePath, "utf-8");
        const jsonMockData = JSON.parse(mockData);
        return res.status(200).json(jsonMockData);
      }

      return res.status(response.status).json({ error: errorText });
    }

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error("Error in API call: ", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
