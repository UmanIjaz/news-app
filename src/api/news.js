const fetchArticles = async ({
  targetUrl,
  setIsLoading,
  setArticles,
  setIsMockData,
}) => {
  setIsLoading(true);
  try {
    const response = await fetch(
      `${
        process.env.REACT_APP_API_BASE_URL
      }/api/proxy?targetUrl=${encodeURIComponent(targetUrl)}`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error: ${response.status} - ${errorText}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      throw new Error(
        `Expected JSON but got ${contentType || "unknown"}: ${text}`
      );
    }

    const data = await response.json();

    // Extract isMockData and set it separately
    if (setIsMockData) {
      setIsMockData(data.isMockData || false);
    }

    if (!data || typeof data !== "object" || !Array.isArray(data.news)) {
      throw new Error("Invalid data format received from API.");
    }

    setArticles(data.news);
    return null;
  } catch (error) {
    console.error("Error fetching articles:", error.message || error);
    setArticles([]);
    throw new Error(
      error.message.includes("Failed to fetch")
        ? "Cannot connect to the server. Please check your internet connection."
        : error.message
    );
  } finally {
    setIsLoading(false);
  }
};

export default fetchArticles;
