import React from 'react';
import { withRouter } from 'react-router-dom';
import './Content.scss';

class Content extends React.Component {
  render() {
    let locationActiv = this.props.location.pathname;

    if (locationActiv === '/') {
      locationActiv = 'Welcome';
    } else {
      locationActiv = locationActiv.slice(1, 2).toUpperCase() + locationActiv.slice(2);
    }

    return (
      <div className="activ-name">
        <h1>
          <span>{locationActiv}</span>
        </h1>
      </div>
    );
  }
}

export default withRouter(Content)