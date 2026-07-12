export const API_URL = 'http://localhost:3000/api';

interface FetchOptions extends RequestInit {
  data?: any;
}

export async function apiFetch(endpoint: string, options: FetchOptions = {}) {
  const { data, headers, ...customConfig } = options;
  const token = localStorage.getItem('auth_token');

  const config: RequestInit = {
    method: data ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...headers,
    },
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  const response = await fetch(`${API_URL}${endpoint}`, config);
  
  // Try to parse JSON response
  let responseData;
  try {
    responseData = await response.json();
  } catch (error) {
    responseData = null;
  }

  if (!response.ok) {
    const errorMessage = responseData?.error || responseData?.message || response.statusText;
    throw new Error(errorMessage);
  }

  return responseData;
}
