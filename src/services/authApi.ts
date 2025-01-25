import Cookies from 'js-cookie';

const API_URL = process.env.REACT_APP_API_URL;
const TOKEN_KEY = 'auth_token';

export const authApi = {
  login: async (email: string, password: string): Promise<string> => {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error('Login failed');
    }
    const { token } = await response.json();
    Cookies.set(TOKEN_KEY, token);
    return token;
  },

  googleLogin: async (token: string): Promise<string> => {
    const response = await fetch(`${API_URL}/api/auth/google`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });
    if (!response.ok) {
      throw new Error('Google login failed');
    }
    const { authToken } = await response.json();
    Cookies.set(TOKEN_KEY, authToken);
    return authToken;
  },

  logout: () => {
    Cookies.remove(TOKEN_KEY);
  },

  forgotPassword: async (email: string): Promise<void> => {
    const response = await fetch(`${API_URL}/api/auth/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });
    if (!response.ok) {
      throw new Error('Failed to send reset email');
    }
  },

  resetPassword: async (token: string, password: string): Promise<void> => {
    const response = await fetch(`${API_URL}/api/auth/reset-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token, password }),
    });
    if (!response.ok) {
      throw new Error('Failed to reset password');
    }
  },

  getToken: () => Cookies.get(TOKEN_KEY),
}; 