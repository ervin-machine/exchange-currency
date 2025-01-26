import { BACKEND_API_URL } from "../constants/constants";

const API_URL = process.env.NODE_ENV === "production"
    ? process.env.BASE_API // Fallback for production
    : BACKEND_API_URL; // Fallback for development

export default API_URL;
 