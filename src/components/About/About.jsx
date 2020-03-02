import React from 'react';
import Error from '../Error';
import Loading from '../Loading';
import './About.scss';

export default class About extends React.Component {

  componentDidMount() {
    this.props.loadAbout();
  }

  render() {

    if (this.props.isLoading) {
      return <Loading text='User info is loading.. Please wait.' />
    }

    if (this.props.error) {
      return <Error error={this.props.error} />
    }

    const userAttributes = this.props.about;
    
    return (
      <div className="about">
        <div className="avatar">
          <img className="userAvatar" src={userAttributes.avatar_url} alt={userAttributes.name} />
        </div>
        <div className="info">
{
//          Object.keys(userAttributes).map(attributeId => (
//            (userAttributes[attributeId]) ? <p><span>{attributeId}</span> {userAttributes[attributeId]}</p> : ""
//          ))
}
          {(userAttributes.name) ? <p><span>Name:</span> {userAttributes.name}</p> : ""}
          {(userAttributes.company) ? <p><span>Company:</span> {userAttributes.company}</p> : ""}
          {(userAttributes.location) ? <p><span>Location:</span> {userAttributes.location}</p> : ""}
          {(userAttributes.email) ? <p><span>Email:</span> {userAttributes.email}</p> : ""}
          {(userAttributes.bio) ? <p><span>Bio:</span> {userAttributes.bio}</p> : ""}
          {(userAttributes.login) ? <p><span>Username:</span> {userAttributes.login}</p> : ""}
          {(userAttributes.type) ? <p><span>Type:</span> {userAttributes.type}</p> : ""}
          {(userAttributes.created_at) ? <p><span>Created:</span> {userAttributes.created_at.slice(0, 10)}</p> : ""}
          {(userAttributes.updated_at) ? <p><span>Updated:</span> {userAttributes.updated_at.slice(0, 10)}</p> : ""}
        </div>
      </div>
    );
  }
}