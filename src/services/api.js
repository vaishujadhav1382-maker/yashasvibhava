// Simple fetch-based API implementation as fallback
const API_BASE_URL = 'http://localhost:8080/api';

// Fallback fetch implementation
const api = {
  get: (url) => {
    return fetch(`${API_BASE_URL}${url}`)
      .then(response => response.json())
      .then(data => ({ data }));
  },
  post: (url, data) => {
    return fetch(`${API_BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => ({ data }));
  },
};

export const landingPageService = {
  getFeatures: () => api.get('/features'),
  getSubscriptionPlans: () => api.get('/subscription-plans'),
  getAppInfo: () => api.get('/app-info'),
  getStats: () => api.get('/stats'),
  submitContact: (data) => api.post('/contact', data),
};

export default api;