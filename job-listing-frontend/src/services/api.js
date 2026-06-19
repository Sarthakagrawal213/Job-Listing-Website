import axios from "axios";

const api = axios.create({

baseURL:
"https://job-listing-backend-u88i.onrender.com/jobs"

});

export default api;