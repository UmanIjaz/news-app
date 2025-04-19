async function fetchArticles({ search = "elon", languages = "en" } = {}) {
  const url = `http://localhost:5000/api/news?search=${encodeURIComponent(
    search
  )}&languages=${languages}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching articles: ${response.statusText}`);
    }

    const data = await response.json();
    return Array.isArray(data) ? data : data.news || [];
  } catch (error) {
    console.error("Fetch Error:", error);
    alert("Failed to load news articles. Please try again later.");
    return [];
  }
}

export default fetchArticles;
