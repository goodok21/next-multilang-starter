export default /* GraphQL */ `
  {
    post(postId: "1") {
      id
      title
      content
      author {
        id
      }
    }
  }
`;
