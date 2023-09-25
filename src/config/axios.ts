import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "https://api.themoviedb.org",
};

const api = axios.create(config);

api.interceptors.request.use((config) => {
  //run before calling api
  config.headers[
    "Authorization"
  ] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDYyMzNlMGZmOGMyOWQyNzg1MzVhN2VhNmQzMTIzMCIsInN1YiI6IjY1MTA1MWI2MzQ0YThlMDEzOTJjMTM4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yu0TqpugL00LiYntqdtsjXiDtjrUEd_Sfs4wFK3M4zg`;
  return config;
});

export default api;
