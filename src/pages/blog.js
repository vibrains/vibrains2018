import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';

const PostWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`;

const Post = styled.div`
width: calc(33% - 50px);
margin: 25px;

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
        <img className="avatar-image" src={`https://cdn-images-1.medium.com/fit/c/36/36/${edge.node.author.imageId}`}/>
        <div className="post-author">{edge.node.author.name}</div>
        <div className="post-date">{edge.node.createdAt} - { Math.ceil(edge.node.virtuals.readingTime) } min read</div>
        </div>

        {edge.node.virtuals.previewImage.imageId ? (
          <img
          src={`https://cdn-images-1.medium.com/max/800/${
            edge.node.virtuals.previewImage.imageId
          }`}
          />
          ) : (
          <img height="200px" src={`http://via.placeholder.com/350x150`} />
          )}


          <div className="post-title">
          <a href={`https://medium.com/civicactions/${edge.node.uniqueSlug}`} target="_blank" rel="noopener noreferrer">
          {edge.node.title}
          </a>
          </div>

          <hr />

          <small className="read-more"><a href={`https://medium.com/civicactions/${edge.node.uniqueSlug}`} target="_blank" rel="noopener noreferrer"> Read more... </a></small>

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