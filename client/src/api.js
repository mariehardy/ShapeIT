import axios from "axios";

export const signup = (email, password) => {
  return axios.post('/api/signup', { email, password })
    .then(response => response.data)
}

export const login = (email, password) => {
  return axios.post('/api/login', { email, password })
    .then(response => response.data)
}

export const googlelogin = (email, password) => {
  return axios.post('/api/google', { email, password })
    .then(response => response.data)
}

export const logout = () => {
  return axios.post('/api/logout', {})
    .then(response => response.data)
}