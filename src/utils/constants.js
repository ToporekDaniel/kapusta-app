const API_URL = 'http://localhost:3001'
export const API_ROUTES = {
  SIGN_UP: `${API_URL}/api/auth/signup`,
  SIGN_IN: `${API_URL}/api/auth/google`,
  GET_USER: `${API_URL}/api/user/`,
}

export const APP_ROUTES = {
  HOME: '/',
  SIGN_UP: '/signup',
  SIGN_IN: '/signin',
  DASHBOARD: '/dashboard',
}
