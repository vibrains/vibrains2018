import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import { FiCornerDownLeft } from 'react-icons/fi';

const NotFoundPage = () => (
  <Layout>
  <div className="content">
  <h1 className="text-white">NOT FOUND</h1>
  <p className="text-white">You just hit a route that doesn&#39;t exist... the sadness.<span role="img" aria-label="This face isn’t sad, but is a bit confused and puzzled by the situation.">😕</span></p>
  <p>
  <FiCornerDownLeft/><Link to="/">Home</Link>  
  </p>
  </div>
  </Layout>
  )

export default NotFoundPage