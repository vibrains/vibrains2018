import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { FiHeart } from 'react-icons/fi';

const InstaWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`;

const InstaImage = styled.div`
width: calc(33% - 30px);
margin: 15px;

@media (max-width: 720px) {
  width: calc(50% - 20px);
}

@media (max-width: 440px) {
  width: calc(100% - 20px);
}
`;

const InstaPage = ({ data: { allInstagramContent } }) => {
  return (

    <Layout>
    <InstaWrapper className="insta-wrapper">

    {allInstagramContent.edges.map(edge => {
      return (
        <InstaImage key={edge.node.id}>
        <div className="insta-likes">
        <FiHeart/><span>{ edge.node.likes.count }</span>
        </div>
        <a href={edge.node.link} target="_blank" rel="noopener noreferrer">
        <div className="insta-image">
        <img src={ edge.node.localImage.childImageSharp.fluid.srcWebp } alt={ edge.node.id } />
        </div>
        </a>
        </InstaImage>
        );
    })}

    </InstaWrapper>
    </Layout>
    );
};

export default InstaPage;

export const query = graphql`
query InstaQuery {
  allInstagramContent {
    edges {
      node {
        id
        link
        likes {
          count
        }
        caption {
          id
          text
          from {
            username
          }
        }
        localImage {
          id
          childImageSharp {
            fluid(toFormat: PNG) {
             ...GatsbyImageSharpFluid_withWebp
           }
         }
       }
       images {
        standard_resolution {
          width
          height
          url
        }
        low_resolution {
          url
        }
      }
    }
  }
}
}
`;