import axios from 'axios';
// const API = 'http://localhost:5000/api';
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const getUsers = () => axios.get(`${BASE_URL}/api/users`);
export const createUser = (name) => axios.post(`${BASE_URL}/api/users`, { name });
export const claimPoints = (userId) => axios.post(`${BASE_URL}/api/users/claim`, { userId });
export const getLeaderboard = () => axios.get(`${BASE_URL}/api/users/leaderboard`);
export const getHistory = () => axios.get(`${BASE_URL}/api/history`);
