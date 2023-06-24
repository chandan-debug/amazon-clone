import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://amazon-backend-4r5h.onrender.com'
});

export default instance;

//https://amazon-backend-4r5h.onrender.com