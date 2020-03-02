import axios from 'axios';
//import { clientID, clientSecret } from './keys';

export async function sendLoginGHRequest(username, password) {

  //console.log(` - ${username} - ${password}`);
  //console.log(` - ${clientID} - ${clientSecret}`);

  const userpass = btoa(`${username}:${password}`);
  const url = '/authorizations';
  const config = {
    headers: {
      "Authorization": `Basic ${userpass}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  }

  const response = await axios.get(url, config);

  return new Promise((resolve, reject) => {
    if (response.status = '200') {
      resolve({
        user: username,
      });
    } else {
      reject(new Error('Invalid username or password. Please try again.'));
    }
  })
}