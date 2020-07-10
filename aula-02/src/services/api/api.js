import axios from 'axios';

const api = axios.create({ baseURL: 'https://api-women-ti.herokuapp.com/api' })/*consumir uma API externa */

export default api;