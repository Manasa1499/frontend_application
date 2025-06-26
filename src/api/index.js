const BASE_URL = "http://localhost:5000";
const token = "bearer " + JSON.parse(localStorage.getItem("authToken"));

export const fetchAPI = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "API Error");
    }

    return await response.json();
  } catch (error) {
    console.error("API Fetch Error:", error);
    throw error;
  }
};

export const postAPI = async (endpoint, body = null) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "API Error");
    }

    return response;
  } catch (error) {
    console.error("API Post Error:", error);
    throw error;
  }
};
