import React from 'react';
import { Link } from 'gatsby';
import '../styles/main.scss';

const Header = ({ siteTitle }) => (
  <div className="header-wrapper">
  <div
  style={{
    margin: '0 auto',
    padding: '1.45rem 1.0875rem 1rem 1.0875rem',
    maxWidth: '1170px',
  }}
  >
  <Link className="logo" to="/"></Link>
  <div className="navigation">
  <Link className="menu-link" to="/about/">About</Link>
  <Link className="menu-link" to="/snaps/">Snaps</Link>
  <Link className="menu-link" to="/contact/">Contact</Link>
  </div>
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
