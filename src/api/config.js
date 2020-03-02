import axios from 'axios';

export function configApi() {
    axios.defaults.baseURL = 'https://api.github.com/';
}
