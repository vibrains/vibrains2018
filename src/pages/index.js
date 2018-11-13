import React from 'react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import BlockRevealAnimation from 'react-block-reveal-animation';

const IndexPage = (props) => (
  <Layout>
  <div className="welcome-text">
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
  <div className="work-wrapper">
  <h3 className="headline"><span role="img" aria-label="A man behind a computer screen, working in the field of technology.">👨‍💻</span> Web Work</h3>
  <div className="column">
  <a href="https://malonelaw.com" target="_blank" rel="noopener noreferrer">
  <Img fluid={props.data.malonelawThumb.childImageSharp.fluid} />
  <div className="item-content">
  <h3>Malone Law</h3>
  <span className="tag">Design</span><span className="tag">Development</span><span className="tag">LEMP</span>
  <div className="agency">Agency: LMI</div>
  </div>
  </a>
  </div>

  <div className="column">
  <a href="https://eatupdrinkup.net" target="_blank" rel="noopener noreferrer">
  <Img fluid={props.data.upontheroofThumb.childImageSharp.fluid} />
  <div className="item-content">
  <h3>Up On The Roof</h3>
  <span className="tag">Design</span><span className="tag">Development</span><span className="tag">LEMP</span>
  <div className="agency">Agency: LMI</div>
  </div>
  </a>
  </div>

  <div className="column">
  <a href="http://homebaseinspectors.com" target="_blank" rel="noopener noreferrer">
  <Img fluid={props.data.homebaseinspectorsThumb.childImageSharp.fluid} />
  <div className="item-content">
  <h3>Homebase Inspectors</h3>
  <span className="tag">Design</span><span className="tag">Development</span><span className="tag">Branding</span><span className="tag">LEMP</span> 
  <div className="agency">Freelance</div>
  </div>
  </a>
  </div>

  <div className="column">
  <a href="https://funny-business.com/" target="_blank" rel="noopener noreferrer">
  <Img fluid={props.data.funnybusinessThumb.childImageSharp.fluid} />
  <div className="item-content">
  <h3>Funny Business</h3>
  <span className="tag">Design</span><span className="tag">Development</span>
  <div className="agency">Agency: The Wired Mouse</div>
  </div>
  </a>
  </div>

  <div className="column">
  <a href="https://cakesbyjane.com" target="_blank" rel="noopener noreferrer">
  <Img fluid={props.data.cakesbyjaneThumb.childImageSharp.fluid} />
  <div className="item-content">
  <h3>Cakes By Jane</h3>
  <span className="tag">Design</span><span className="tag">Development</span><span className="tag">LEMP</span> 
  <div className="agency">Agency: The Wired Mouse</div>
  </div>
  </a>
  </div>

  <div className="column">
  <a href="https://www.pisgahlegal.org/" target="_blank" rel="noopener noreferrer">
  <Img fluid={props.data.pisgahlegalThumb.childImageSharp.fluid} />
  <div className="item-content">
  <h3>Pisgah Legal Services</h3>
  <span className="tag">Design</span><span className="tag">Development</span><span className="tag">LAMP</span> 
  <div className="agency">Agency: Evolv</div>
  </div>
  </a>
  </div>

  </div>
  </Layout>
  )

export default IndexPage

export const pageQuery = graphql`
query {
  imageOne: file(relativePath: { eq: "astro-header.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageTwo: file(relativePath: { eq: "moon.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  malonelawThumb: file(relativePath: { eq: "malonelaw-thumb-blue.jpg" }) {
    childImageSharp {
      fluid(duotone: { highlight: "#f00e2e", shadow: "#192550" }, toFormat: PNG) {
        base64
        aspectRatio
        src
        srcSet
        sizes
        ...GatsbyImageSharpFluid
      }
    }
  }
  upontheroofThumb: file(relativePath: { eq: "upontheroof-thumb.jpg" }) {
    childImageSharp {
      fluid(duotone: { highlight: "#f00e2e", shadow: "#192550" }, toFormat: PNG) {
        base64
        aspectRatio
        src
        srcSet
        sizes
        ...GatsbyImageSharpFluid
      }
    }
  }
  homebaseinspectorsThumb: file(relativePath: { eq: "homebaseinspectors-thumb.jpg" }) {
    childImageSharp {
      fluid(duotone: { highlight: "#f00e2e", shadow: "#192550" }, toFormat: PNG) {
        base64
        aspectRatio
        src
        srcSet
        sizes
        ...GatsbyImageSharpFluid
      }
    }
  }
  cakesbyjaneThumb: file(relativePath: { eq: "cakesbyjane-thumb.jpg" }) {
    childImageSharp {
      fluid(duotone: { highlight: "#f00e2e", shadow: "#192550" }, toFormat: PNG) {
        base64
        aspectRatio
        src
        srcSet
        sizes
        ...GatsbyImageSharpFluid
      }
    }
  }
  funnybusinessThumb: file(relativePath: { eq: "funnybusiness-thumb.jpg" }) {
    childImageSharp {
      fluid(duotone: { highlight: "#f00e2e", shadow: "#192550" }, toFormat: PNG) {
        base64
        aspectRatio
        src
        srcSet
        sizes
        ...GatsbyImageSharpFluid
      }
    }
  }
  pisgahlegalThumb: file(relativePath: { eq: "pisgahlegal-thumb.jpg" }) {
    childImageSharp {
      fluid(duotone: { highlight: "#f00e2e", shadow: "#192550" }, toFormat: PNG) {
        base64
        aspectRatio
        src
        srcSet
        sizes
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`