import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { FiCornerDownLeft } from 'react-icons/fi';

const about = () => (
  <Layout>
  <div className="content">
  <p className="text-white">I design and build web applications. I currently work as a Front-end Developer at <a href="https://localmarketinginc.com" target="_blank" rel="noopener noreferrer">LMI</a></p>
  <FiCornerDownLeft/><Link to="/">Home</Link>
  </div>
  </Layout>
  )

export default about