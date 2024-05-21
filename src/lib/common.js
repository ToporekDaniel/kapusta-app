import { API_ROUTES } from '../utils/constants';
import axios from 'axios';
export function storeTokenInLocalStorage(token) {
  localStorage.setItem('token', token);
}

export function storeAccessTokenInLocalStorage(accessToken){

  localStorage.setItem('accessToken', token);
}

export function getTokenFromLocalStorage() {
  return localStorage.getItem('token');
}


export function getAccessTokenFromLocalStorage() {
  return localStorage.getItem('accessToken');
}


export async function getAuthenticatedUser() {
  const defaultReturnObject = { authenticated: false, user: null };
  try {
    const token = getTokenFromLocalStorage();
    const isLogin = getAccessTokenFromLocalStorage(); 
    // const accesToken = getTokenFromLocalStorage('accessToken');  
    if (!token && !isLogin) {
      return defaultReturnObject;
    } else if (isLogin) {
      return { authenticated: true, user: {email: "default@wp.pl", name: "no name"} };
    } else {
      const response = await axios({
        method: 'GET',
        url: API_ROUTES.GET_USER,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const { authenticated = false, accessToken = null } = response.data;
      localStorage.setItem("accessToken", accessToken)
      return authenticated ? response.data : false;


    }

  }
  catch (err) {
    console.log('getAuthenticatedUser, Something Went Wrong', err);
    return defaultReturnObject;
  }
}
