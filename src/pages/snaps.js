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

const InstaPage = ({ data: { allInstaNode } }) => {
  return (

    <Layout>
    <InstaWrapper className="insta-wrapper">

    {allInstaNode.edges.map(edge => {
      return (
        <InstaImage key={edge.node.id}>
        <div className="insta-likes">
        <FiHeart/>{edge.node.likes}
        </div>
        <div className="insta-image">
        <img src={edge.node.image.image.original.src} />
        </div>
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
  allInstaNode {
    edges {
      node {
        id
        likes
        image: localFile {
          image: childImageSharp {
            original {
              width
              height
              src
            }
          }
        }
      }
    }
  }
}
`;