import axios from 'axios';
import GitHub from 'github-api';
import { clientID, clientSecret } from './keys';



export async function sendLoginGHRequest_test(username, password) {

  //const response = await axios.get(`/$${username}`);
  //console.log(response.password);

  console.log(` - ${username} - ${password}`);
  console.log(` - ${clientID} - ${clientSecret}`);

  var gh = new GitHub({
    username,
    password
  });

  var re = await gh.getUser();

  //var tt = me.listNotifications().then(response => response.data);

  console.log(" me ----");
  console.log(re);
  console.log("----");
  //console.log(me.listNotifications());
  //console.log(" tt ----");
  //console.log(tt);


  const userpass = btoa(`${username}:${password}`);
  const url = 'https://api.github.com/authorizations';
  const config = {
    headers: {
      "Authorization": `Basic ${userpass}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
    }
  }

  const response = await axios.get(url, config);


  console.log(url);
  console.log(response);

  //let url_2 = `https://api.github.com/applications/${username}/tokens/${x.access_token}`;
  //let url_2 = 'https://api.github.com/authorizations'

  //fetch(url_2, {
  //  method: 'GET',
  //    headers: {
  //      'Authorization': `Basic ${userpass}`
  //    }
  //  })
  //    .then(x => x.json())
  //    .then(x => { console.log(x) });



  return new Promise((resolve, reject) => {


    //GET
    //      if (username === 'thebug' && password === '123') {
    //        resolve({
    //          token: 'My token',
    //        });
    //      } else {
    //        reject(new Error('Invalid username or password. Please try again.'));
    //      }

  })
}