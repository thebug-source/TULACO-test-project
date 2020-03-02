import React from 'react';
import Loading from '../Loading';

export default function Logout(props) {

  if (props.isLoading) {
    return (<Loading text='Loading...' />)
  } 
  props.logoutGitHub();  
  event.preventDefault();

  return ('');
}



