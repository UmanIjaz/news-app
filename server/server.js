const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;

app.use(cors());

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const isDev = process.env.NODE_ENV === "development";

// In-memory cache
const cache = new Map();
const CACHE_DURATION = 10 * 60 * 1000;

// 🆕 Import mock data
const getMockData = () => require("./mockData");

// Helper
const getCacheKey = ({ search, languages }) => `${search}-${languages}`;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

app.get("/api/news", async (req, res) => {
  const search = req.query.search || "elon";
  const languages = req.query.languages || "en";

  const cacheKey = getCacheKey({ search, languages });

  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return res.json(cached.data);
  }

  try {
    console.log("NODE_ENV =", process.env.NODE_ENV);

    const response = await axios.get(
      "https://news67.p.rapidapi.com/v2/topic-search",
      {
        params: { search, languages }, // ✅ Match API params
        headers: {
          "x-rapidapi-key": API_KEY,
          "x-rapidapi-host": "news67.p.rapidapi.com",
        },
      }
    );

    const data = response.data;
    cache.set(cacheKey, { data, timestamp: Date.now() });

    await sleep(1000);
    res.json(data);
  } catch (error) {
    console.error("API failed, serving mock data:", error.message);

    if (isDev || !error.response) {
      return res.json(getMockData());
    }

    res.status(500).json({
      error: "Failed to fetch data from API.",
      message: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
