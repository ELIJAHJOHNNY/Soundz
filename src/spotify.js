import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "60ca79e518c841e3bd3de2e7b4d94edf";
const redirectUri = "https://soundzz.netlify.app";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
  });

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      return config;
    });
  };

export default apiClient;