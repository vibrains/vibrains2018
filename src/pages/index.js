import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Welcome from '../components/welcomeText';

const IndexPage = (props) => (

  <Layout>

  <div className="welcome-text">
  <Welcome/>
  </div>

{/*  <div className="til-wrapper">
  <h3 className="headline">Latest Notes</h3>
  <div className="column">
  <Link className="menu-link" to="/gatsby-duotone-images/">Duotone Images with Gatsby</Link>
  </div>
</div>*/}

<div className="work-wrapper">
<h3 className="headline"><span role="img" aria-label="A man behind a computer screen, working in the field of technology.">👨‍💻</span> Agency Work</h3>
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
<a href="https://www.telcoccu.org/" target="_blank" rel="noopener noreferrer">
<Img fluid={props.data.homebaseinspectorsThumb.childImageSharp.fluid} />
<div className="item-content">
<h3>Telco Credit Union</h3>
<span className="tag">Design</span><span className="tag">Development</span><span className="tag">Drupal</span> 
<div className="agency">Agency: The Wired Mouse</div>
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

export default IndexPage;

export const workQuery = graphql`
query {
  malonelawThumb: file(relativePath: { eq: "malonelaw-thumb-blue.jpg" }) {
    childImageSharp {
      fluid(duotone: { highlight: "#E71E63", shadow: "#192550" }, toFormat: PNG) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  upontheroofThumb: file(relativePath: { eq: "upontheroof-thumb.jpg" }) {
    childImageSharp {
      fluid(duotone: { highlight: "#E71E63", shadow: "#192550" }, toFormat: PNG) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  homebaseinspectorsThumb: file(relativePath: { eq: "homebaseinspectors-thumb.jpg" }) {
    childImageSharp {
      fluid(duotone: { highlight: "#E71E63", shadow: "#192550" }, toFormat: PNG) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  cakesbyjaneThumb: file(relativePath: { eq: "cakesbyjane-thumb.jpg" }) {
    childImageSharp {
      fluid(duotone: { highlight: "#E71E63", shadow: "#192550" }, toFormat: PNG) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  funnybusinessThumb: file(relativePath: { eq: "funnybusiness-thumb.jpg" }) {
    childImageSharp {
      fluid(duotone: { highlight: "#E71E63", shadow: "#192550" }, toFormat: PNG) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  pisgahlegalThumb: file(relativePath: { eq: "pisgahlegal-thumb.jpg" }) {
    childImageSharp {
      fluid(duotone: { highlight: "#E71E63", shadow: "#192550" }, toFormat: PNG) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`