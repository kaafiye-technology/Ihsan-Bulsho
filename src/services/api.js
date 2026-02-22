import axios from "axios";
import { API_KEY, API_URL } from "../constants";

/**
 * Post a campaign to the API
 * @param {Object} campaignData - Campaign JSON (with image URL)
 * @param {string} apiKey - Your API key
 */

export async function postApiKey(route, data, isUpload = false) {
  // 🔹 Log each key and value clearly
  console.log("Posting data to API: ", data);
  Object.entries(data).forEach(([key, value]) => {
    console.log(`${key}:`, value);
  });
  let res;
  const url = `${API_URL}/api/sys/${route}`;
  try {
    if (isUpload) {
      res = await axios.post(url, data, {
        headers: {
          "Content-Type": "multipart/form-data", // Required for FormData
          "x-api-key": API_KEY,
        },
      });
    } else {
      res = await axios.post(
        url, // your API endpoint
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY, // API key header
          },
        }
      );
    }

    // console.log("API response:", res.data); // Optional: log response
    return res.data;
  } catch (err) {
    console.error("Error posting campaign:", err);
    throw err;
  }
}

export async function getApiKey(route, e) {
  const url = `${API_URL}/api/sys/${route}`;
  try {
    const res = await axios.get(
      url, // your API endpoint
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": API_KEY, // API key header
        },
      }
    );

    // console.log("API response:", res.data); // Optional: log response
    return res.data;
  } catch (err) {
    console.error("Error posting campaign:", err);
    throw err;
  }
}
