import React from 'react'
import Img from 'gatsby-image'
import Layout from '../components/layout'


const IndexPage = (props) => (
  <Layout>
  <div className="work-wrapper">

  <h3 className="headline">👨‍💻 Web Work</h3>
  <div className="column">
  <a href="https://malonelaw.com" target="_blank">
  <Img style={{ maxHeight: "200px" }} fluid={props.data.malonelawThumb.childImageSharp.fluid} />
  <div className="item-content">
  <h3>Malone Law <i className="icon-link"></i></h3>
  <span className="tag">Design</span><span className="tag">Development</span><span className="tag">LEMP</span>
  <div className="agency">Agency: LMI</div>
  </div>
  </a>
  </div>

  <div className="column">
  <a href="https://eatupdrinkup.net" target="_blank">
  <Img style={{ maxHeight: "200px" }} fluid={props.data.upontheroofThumb.childImageSharp.fluid} />
  <div className="item-content">
  <h3>Up On The Roof <i className="icon-link"></i></h3>
  <span className="tag">Design</span><span className="tag">Development</span><span className="tag">LEMP</span>
  <div className="agency">Agency: LMI</div>
  </div>
  </a>
  </div>

  <div className="column">
  <a href="https://homebaseinspectors.com" target="_blank">
  <Img style={{ maxHeight: "200px" }} fluid={props.data.homebaseinspectorsThumb.childImageSharp.fluid} />
  <div className="item-content">
  <h3>Homebase Inspectors <i className="icon-link"></i></h3>
  <span className="tag">Design</span><span className="tag">Development</span><span className="tag">Branding</span><span className="tag">LEMP</span> 
  <div className="agency">Freelance</div>
  </div>
  </a>
  </div>

  <div className="column">
  <a href="https://cakesbyjane.com" target="_blank">
  <Img style={{ maxHeight: "200px" }} fluid={props.data.cakesbyjaneThumb.childImageSharp.fluid} />
  <div className="item-content">
  <h3>Cakes By Jane <i className="icon-link"></i></h3>
  <span className="tag">Design</span><span className="tag">Development</span><span className="tag">LEMP</span> 
  <div className="agency">Agency: The Wired Mouse</div>
  </div>
  </a>
  </div>

  <div className="column">
  <a href="https://telcoccu.org" target="_blank">
  <Img style={{ maxHeight: "200px" }} fluid={props.data.telcoThumb.childImageSharp.fluid} />
  <div className="item-content">
  <h3>Telco Credit Union <i className="icon-link"></i></h3>
  <span className="tag">Design</span><span className="tag">Development</span><span className="tag">Drupal</span> 
  <div className="agency">Agency: The Wired Mouse</div>
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
      fluid(maxWidth: 800, maxHeight: 200, quality: 64) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  upontheroofThumb: file(relativePath: { eq: "upontheroof-thumb.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 200, quality: 64) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  homebaseinspectorsThumb: file(relativePath: { eq: "homebaseinspectors-thumb.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 200, quality: 64) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  cakesbyjaneThumb: file(relativePath: { eq: "cakesbyjane-thumb.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 200, quality: 64) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  telcoThumb: file(relativePath: { eq: "telco-thumb.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 200, quality: 64) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  htcThumb: file(relativePath: { eq: "htc-thumb.gif" }) {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 200, quality: 64) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`