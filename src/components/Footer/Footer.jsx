import React from 'react';
import './Footer.scss';

export default class Footer extends React.Component {
  render() {
    let currentYear = new Date().getFullYear();

    return (
      <footer>
        <div className="footer">&copy;&nbsp;Mogilev, {(currentYear > "2020") ? `2020-${currentYear}` : "2020"}</div>
      </footer>
    )
  }
}