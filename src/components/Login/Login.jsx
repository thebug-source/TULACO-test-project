import React from 'react';
import Loading from '../Loading';
import Error from '../Error';
import logo from '../../img/github_logo.png';
import './Login.scss';

export default function Login(props) {

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const onSubmit = (event) => {
    event.preventDefault();
    props.loginGitHub(username, password);
  }

  if (props.isLoading) {
    return <Loading text='Loading...' />
  }

  return (
    <div className="fill">
      <div className="login">
        <div className="login-content">
          <div className="logo-gh"><img src={logo} alt="gitgub" className="picture" /></div>
          <div className="loginForm">
            <form onSubmit={onSubmit}>
              <div id="formError">{props.error && <Error error={props.error} />}</div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input id="username" autoFocus type="text" required value={username} placeholder="Please enter username"
                  onChange={event => setUsername(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" required value={password} placeholder="Please enter password"
                  onChange={event => setPassword(event.target.value)}
                />
              </div>
              <div className="form-group">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}