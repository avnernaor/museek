import React, { useState } from 'react';
import styled from 'styled-components';
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dummyData';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import AlertDialogSlide from '../dialog/AlertDialogSlide';

// Define styled components
const PostContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  margin: 30px 0;
  background-color: #fff; /* White background */
`;

const PostWrapper = styled.div`
  padding: 10px;
`;

const PostTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PostTopLeft = styled.div`
  display: flex;
  align-items: center;
`;

const PostProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const PostUsername = styled.span`
  font-size: 15px;
  font-weight: 500;
  margin: 0 10px;
  color: #3e2723; /* Dark brown text */
`;

const PostDate = styled.span`
  font-size: 12px;
  color: #6d4c41; /* Medium brown text */
`;

const PostCenter = styled.div`
  margin: 20px 0;
`;

const PostText = styled.span`
  display: block;
  margin-bottom: 10px;
  color: #000; /* Black text */
`;

const PostBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PostBottomLeft = styled.div`
  display: flex;
  align-items: center;
`;

const LikeIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 5px;
  cursor: pointer;
`;

const PostLikeCounter = styled.span`
  font-size: 15px;
  color: #6d4c41; /* Medium brown text */
`;

const PostCommentText = styled.span`
  cursor: pointer;
  border-bottom: 1px dashed #6d4c41; /* Medium brown dashed line */
  font-size: 15px;
  color: #6d4c41; /* Medium brown text */
`;

const PostTopRight = styled.div``;

const ReadMoreContainer = styled.div`
  display: flex;
  align-items: center;
  color: #8b4513; /* SaddleBrown */
  cursor: pointer;
`;

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <PostContainer>
      <PostWrapper>
        <PostTop>
          <PostTopLeft>
            <PostProfileImg
              src={Users.filter((u) => u.id === post?.userId)[0].profilePicture}
              alt=""
            />
            <PostUsername>
              {Users.filter((u) => u.id === post?.userId)[0].username}
            </PostUsername>
            <PostDate>{post.date}</PostDate>
          </PostTopLeft>
        </PostTop>
        <PostCenter>
          <PostText>{post?.desc}</PostText>
          <ReadMoreContainer onClick={handleDialogOpen}>
            <ReadMoreIcon fontSize="large" htmlColor="brown" />
            <span style={{ marginLeft: '5px' }}>Read The Lyrics</span>
          </ReadMoreContainer>
        </PostCenter>
        <PostBottom>
          <PostBottomLeft>
            <LikeIcon
              src="assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <PostLikeCounter>{like} people like it</PostLikeCounter>
          </PostBottomLeft>
        </PostBottom>
      </PostWrapper>
      <AlertDialogSlide open={dialogOpen} handleClose={handleDialogClose} />
    </PostContainer>
  );
}