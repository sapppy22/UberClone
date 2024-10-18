const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

// Use CORS to allow requests from all origins or restrict to specific ones if necessary
app.use(cors());

// Proxy route to fetch data from Mapbox
app.get("/geocode", async (req, res) => {
  const { location } = req.query;

  if (!location) {
    return res
      .status(400)
      .json({ error: "Location query parameter is required" });
  }

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?access_token=pk.eyJ1Ijoic2FwcHkyMiIsImEiOiJjbTI4NmVucHcwNWR0MmxxeTM2YTI1cWhxIn0.rYCHuIOVXWmmrlgMjrc_XQ&limit=1`;

  try {
    const response = await axios.get(url);

    // Check if Mapbox API returns a valid response
    if (
      response.data &&
      response.data.features &&
      response.data.features.length > 0
    ) {
      res.json(response.data);
    } else {
      res
        .status(404)
        .json({ error: "No results found for the given location" });
    }
  } catch (error) {
    console.error("Error fetching data from Mapbox:", error.message);

    // If Mapbox API responds with an error, pass it along in the response
    if (error.response) {
      return res.status(error.response.status).json({
        error: error.response.statusText || "Error fetching data from Mapbox",
        details: error.response.data,
      });
    }

    // Handle network or unexpected errors
    res.status(500).json({
      error: "Internal Server Error",
      details: error.message || "An unknown error occurred",
    });
  }
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
