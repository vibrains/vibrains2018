import React, { Component } from 'react';
import Connect from '../components/connect';
import '../styles/main.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer" style={{
        margin: '0 auto',
        padding: '1rem 1.0875rem',
        maxWidth: '1170px'
      }}>
      <div className="notice-container">
      <hr />
      <Connect/>
      <h4>
      <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Site built with Gatsby
      </a>
      </h4>
      </div>
      </footer>
      );
  }
}

export default Footer;