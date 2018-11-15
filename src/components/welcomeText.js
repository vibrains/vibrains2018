import React, { Component } from 'react';
import BlockRevealAnimation from 'react-block-reveal-animation';

class Welcome extends Component {
  render() {
    return (

      <div>
      <BlockRevealAnimation delay={0} duration={.6} color="#fff">
      <h1 className="headline">Web <a className="decorated" target="_blank" href="https://github.com/vibrains" rel="noopener noreferrer">developer</a> and <a className="decorated" href="https://www.behance.net/vibrains"
      target="_blank" rel="noopener noreferrer">designer</a></h1></BlockRevealAnimation><br />

      <BlockRevealAnimation delay={.2} duration={.6} color="#fff">
      <h1  className="headline">currently living in Atlanta, GA <span className="peach" role="img" aria-label="The fleshy, pinkish-orange fruit of the fuzzy peach, shown with green leaves and sometimes a stem.">🍑</span></h1>
      </BlockRevealAnimation><br />
      <hr />
      <BlockRevealAnimation delay={.4} duration={.6} color="#fff">
      <h3 style={{ color: '#fff', marginBottom: "5px", marginTop: "5px" }}><a href="mailto:vibrains@gmail.com" className="decorated">Let's build something!</a></h3>
      </BlockRevealAnimation>
      </div>

      );
  }
}

export default Welcome;