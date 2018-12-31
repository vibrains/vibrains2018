import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Welcome from '../components/welcomeText';
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
          maxWidth: '1170px',
          position: 'relative',
          zIndex: 5,
        }}
        >
        <div className="welcome-text">
        <Welcome/>
        </div>
        <Fade delay={500}>
        {children}
        <Footer/>
        </Fade>
        </div>
        </>
        )}
        />
        )

    Layout.propTypes = {
      children: PropTypes.node.isRequired,
    }

    export default Layout
