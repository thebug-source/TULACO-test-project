import React from 'react';
import About from './components/About';

export default class AboutPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      about: [],
    }
  }

  render() {
    return (
      <div>
        <div className="fill">
          <div className="aboutContainer">
            <About />
          </div>
        </div>
      </div>
    )
  }
}