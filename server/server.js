import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
import mockNewsData from "./mockData.js";

dotenv.config();
const app = express();
const PORT = 5000;

// app.use(cors());
app.use(
  cors({
    origin: "*",
  })
);

const cache = new Map();
const CACHE_DURATION_MS = 1000 * 60 * 5;

app.get("/api/proxy", async (req, res) => {
  console.log("Proxy route hit");
  const { targetUrl } = req.query;

  if (!targetUrl) {
    console.error("Missing targetUrl");
    return res.status(400).json({ error: "Missing targetUrl parameter" });
  }

  try {
    const url = decodeURIComponent(targetUrl);
    console.log("Proxying to:", url);

    const now = Date.now();
    const cached = cache.get(url);

    if (process.env.NODE_ENV === "development") {
      console.log("Serving mock data for development");
      return res.json(mockNewsData);
    }

    if (cached && now - cached.timestamp < CACHE_DURATION_MS) {
      console.log("Serving from cache");
      return res.json(cached.data);
    }

    const response = await fetch(url, {
      headers: {
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": new URL(url).hostname,
        accept: "application/json",
      },
    });

    if (response.status === 429) {
      console.warn("Rate limit hit. Returning mock data.");
      return res.json({ ...mockNewsData, isMockData: true });
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API error: ${response.status} - ${errorText}`);
      return res.status(response.status).json({
        error: "API request failed",
        details: errorText,
      });
    }

    const data = await response.json();

    // Save in cache
    cache.set(url, { data, timestamp: now });

    res.json(data);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({
      error: "Proxy failed",
      details: err.message,
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
