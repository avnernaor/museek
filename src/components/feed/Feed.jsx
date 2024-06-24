import React, { useState } from 'react';
import styled from 'styled-components';
import Post from "../post_c/Post_c";
import Share from "../share/Share";
import { Posts as initialPosts } from "../../dummyData";

// Styled Components
const FeedContainer = styled.div`
  flex: 12;
`;

const FeedWrapper = styled.div`
  padding: 20px;
`;

export default function Feed() {
  const [posts, setPosts] = useState(initialPosts);

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <FeedContainer>
      <FeedWrapper>
        <Share addNewPost={addNewPost} />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </FeedWrapper>
    </FeedContainer>
  );
}