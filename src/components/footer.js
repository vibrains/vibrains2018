import React, { Component } from 'react'
import './footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer className="footer" style={{
          margin: '0 auto',
          padding: '1rem 1.0875rem',
          maxWidth: '1170px'
        }}>
      <div className="notice-container">
      <h4>copyright</h4>
      <h4>
      <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
      Site built with Gatsby
      </a>
      </h4>
      </div>
      </footer>
      );
  }
}

export default Footer;