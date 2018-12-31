import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { FiExternalLink } from 'react-icons/fi';

const PostWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`;

const Post = styled.div`
width: calc(33% - 30px);
margin: 15px;

@media (max-width: 720px) {
  width: calc(50% - 20px);
}

@media (max-width: 440px) {
  width: calc(100% - 20px);
}
`;

const BlogPage = ({ data: { allMediumPost } }) => {
  return (
    <Layout>
    <div className="medium-posts-wrapper">
    <PostWrapper>
    {allMediumPost.edges.map(edge => {
      return (
        <Post key={edge.node.id}>

        <div className="medium-post-card">

        <div className="post-info">
        <img className="avatar-image" src={`https://cdn-images-1.medium.com/fit/c/36/36/${edge.node.author.imageId}`} alt={edge.node.author.name}/>
        <div className="post-author">{edge.node.author.name}</div>
        <div className="post-date">{edge.node.createdAt}<span>{ Math.ceil(edge.node.virtuals.readingTime) } min read</span></div>
        </div>

        <div className="post-image">
        <a href={`https://medium.muz.li/${edge.node.uniqueSlug}`} target="_blank" rel="noopener noreferrer">
        {edge.node.virtuals.previewImage.imageId ? (
          <img src={`https://cdn-images-1.medium.com/max/600/${edge.node.virtuals.previewImage.imageId}`} alt={edge.node.title}/>
          ) : (
          <img className="alt-img" src={`https://source.unsplash.com/daily`} alt={edge.node.title} />
          )}

          <div className="text-white">
          {edge.node.title}
          <p>{edge.node.virtuals.subtitle} <FiExternalLink /></p>
          </div>
          </a>
          </div>
          </div>
          </Post>
          );
    })}
    </PostWrapper>
    </div>
    </Layout>
    );
};

export default BlogPage;

export const query = graphql`
query StoriesQuery {
  allMediumPost(sort: { fields: [createdAt], order: DESC }) {
    edges {
      node {
        id
        title
        createdAt(formatString: "MMMM D")
        uniqueSlug
        virtuals {
          subtitle
          readingTime
          totalClapCount
          previewImage {
            imageId
          }
        }
        author {
          name
          imageId
        }
      }
    }
  }
}
`;