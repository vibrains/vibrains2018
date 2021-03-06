import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import favicon16 from "../images/favicon16.png"
import favicon32 from "../images/favicon32.png"
import favicon64 from "../images/favicon.png"
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
        { name: 'description',
        content: 'Emiliano - Front-End Web Developer and Graphic Designer' },
        { name: 'keywords', content: 'frontend, developer' },
        ]}
        link={[
          { rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
          { rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon64}` },
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
          <Fade delay={0}>
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
