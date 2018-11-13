import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Footer from '../components/footer';
import Fade from 'react-reveal/Fade';

import Header from './header'
import '../styles/main.scss'

const Layout = ({ children }) => (
  <StaticQuery
  query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
    `}
    render={data => (
      <>
      <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
        ]}
        >
        <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
        style={{
          margin: '0 auto',
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
          maxWidth: '1170px'
        }}
        >
        <Fade>
        {children}
        </Fade>
        </div>
        <Footer>
        </Footer>
        </>
        )}
        />
        )

    Layout.propTypes = {
      children: PropTypes.node.isRequired,
    }

    export default Layout
