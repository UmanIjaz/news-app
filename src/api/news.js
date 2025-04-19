const fetchArticles = async ({ targetUrl, setIsLoading, setArticles }) => {
  setIsLoading(true);
  try {
    const response = await fetch(
      `http://localhost:5000/api/proxy?targetUrl=${encodeURIComponent(
        targetUrl
      )}`
    );

    console.log(targetUrl);

    // Better error handling
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error: ${response.status} - ${errorText}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      const text = await response.text();
      throw new Error(`Expected JSON but got ${contentType}: ${text}`);
    }

    const data = await response.json();
    console.log(data);
    setArticles(data.news || []);
  } catch (error) {
    console.error("Error fetching articles:", error);
    setArticles([]);
    // Show user-friendly error
    alert(`Failed to load articles: ${error.message}`);
  } finally {
    setIsLoading(false);
  }
};

export default fetchArticles;
