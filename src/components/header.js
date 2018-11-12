import React from 'react'
import { Link } from 'gatsby'
import '../styles/solar.scss'
import BlockRevealAnimation from 'react-block-reveal-animation'

const Header = ({ siteTitle }) => (
  <div className="header-wrapper">
  <div
  style={{
    margin: '0 auto',
    padding: '1.45rem 1.0875rem',
    maxWidth: '1170px',
  }}
  >
  <Link className="logo" to="/"></Link>
  <div className="navigation">
  <Link className="menu-link" to="/about/">About</Link>
  <Link className="menu-link" to="/snaps/">Snaps</Link>
  <Link className="menu-link" to="/contact/">Contact</Link>
  </div>
  <div className="welcome-text">
  <BlockRevealAnimation delay={0} duration={.6} color="#fff">

  <h1 className="headline">Web <a className="decorated" target="_blank" href="https://github.com/vibrains" rel="noopener noreferrer">developer</a> and <a className="decorated" href="https://www.behance.net/vibrains"
  target="_blank" rel="noopener noreferrer">designer</a></h1></BlockRevealAnimation><br />

  <BlockRevealAnimation delay={.2} duration={.6} color="#fff">
  <h1  className="headline">currently living in Atlanta, GA <span className="peach" role="img" aria-label="The fleshy, pinkish-orange fruit of the fuzzy peach, shown with green leaves and sometimes a stem.">🍑</span></h1>
  </BlockRevealAnimation>
  </div>
  <hr />
  <BlockRevealAnimation delay={.4} duration={.6} color="#fff">
  <h3 style={{ color: '#fff', marginBottom: "5px", marginTop: "5px" }}><a href="mailto:vibrains@gmail.com" className="decorated">Let's build something!</a></h3>
  </BlockRevealAnimation>
  <div className="solar">
  <div className='solar-syst'>
  <div className='sun'></div>
  <div className='mercury'></div>
  <div className='venus'></div>
  <div className='earth'></div>
  <div className='mars'></div>
  <div className='jupiter'></div>
  <div className='saturn'></div>
  <div className='uranus'></div>
  <div className='neptune'></div>
  <div className='pluto'></div>
  <div className='asteroids-belt'></div>
  </div>
  </div>
  </div>
  </div>
  )

export default Header
