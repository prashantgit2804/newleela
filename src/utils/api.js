const BASE_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";

/**
 * Custom fetch client that acts as a request/response interceptor.
 */
async function request(endpoint, options = {}) {
  // 1. Request Interceptor: Build full URL and default headers
  const cleanBase = BASE_URL.replace(/\/$/, "");
  const cleanEndpoint = endpoint.replace(/^\//, "");
  const url = endpoint.startsWith("http")
    ? endpoint
    : `${cleanBase}/${cleanEndpoint}`;

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(url, config);

    // 2. Response Interceptor: Parse JSON and handle HTTP errors
    const data = await response.json().catch(() => null);

    if (!response.ok) {
      const errorMsg =
        data?.detail ||
        data?.message ||
        `API Error: ${response.statusText} (${response.status})`;
      const error = new Error(errorMsg);
      error.status = response.status;
      error.data = data;
      throw error;
    }

    return data;
  } catch (error) {
    console.error(
      `[API Client Error] [${options.method || "GET"}] ${url}:`,
      error,
    );
    throw error;
  }
}

export const api = {
  get: (endpoint, options = {}) =>
    request(endpoint, { ...options, method: "GET" }),
  post: (endpoint, body, options = {}) =>
    request(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
    }),
  put: (endpoint, body, options = {}) =>
    request(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(body),
    }),
  patch: (endpoint, body, options = {}) =>
    request(endpoint, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(body),
    }),
  delete: (endpoint, options = {}) =>
    request(endpoint, { ...options, method: "DELETE" }),
};
export default api;
