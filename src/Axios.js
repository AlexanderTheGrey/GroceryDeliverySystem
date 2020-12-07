import axios from "axios";

const instance = axios.create({
  baseURL: 'https://us-central1-grocon-store.cloudfunctions.net/api'  // API URL for cloud functions
  // Local Debug URL: 'http://localhost:5001/grocon-store/us-central1/api'
});

export default instance;