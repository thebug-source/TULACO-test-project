import axios from 'axios';

export async function getAbout(userID) {

  const response = await axios.get(`/users/${userID}`);
  return response.data;

}


