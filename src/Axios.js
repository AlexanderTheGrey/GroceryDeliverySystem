import axios from "axios";

const instance = axios.create({
  baseURL:'https://us-central1-grocon-67111.cloudfunctions.net/api' // API URL for cloud functions
  // Local Debug URL: 'http://localhost:5001/grocon-67111/us-central1/api'
});

export default instance;


