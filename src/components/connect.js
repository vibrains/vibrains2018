import React, { Component } from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/main.scss';

class Connect extends Component {
  render() {
    return (
      
      <div>
      <a className="social-link" href="https://github.com/vibrains" target="_blank" rel="noopener noreferrer"><FaGithub />Github</a>
      <a className="social-link" href="https://twitter.com/vibrains" target="_blank" rel="noopener noreferrer"><FaTwitter />Twitter</a>
      <a className="social-link" href="https://www.instagram.com/vibrains/" target="_blank" rel="noopener noreferrer"><FaInstagram />Instagram</a>
      <a className="social-link" href="https://www.linkedin.com/in/emilianoborzelli" target="_blank" rel="noopener noreferrer"><FaLinkedin />Linkedin</a>
      </div>
      );
  }
}

export default Connect
