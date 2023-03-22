import axios from 'axios';

const BASE_URL = (axios.defaults.baseURL = 'http://localhost:3001');

export default BASE_URL;
