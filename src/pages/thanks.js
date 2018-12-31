import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import { FiCornerDownLeft } from 'react-icons/fi';

export default () => (
  <Layout>
  <section className="section">
  <div className="container">
  <div className="content">
  <h1 className="text-white">Thank you!</h1>
  <p className="text-white">I will reach back as soon as possible.</p>
  <p>
  <FiCornerDownLeft/><Link to="/">Home</Link>  
  </p>
  </div>
  </div>
  </section>
  </Layout>
  );