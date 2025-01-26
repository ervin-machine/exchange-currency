import axios from 'axios';
import API_URL from "../config"

const apiClient = axios.create({
    baseURL: API_URL, // Backend URL
});

export default apiClient;