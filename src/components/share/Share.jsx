import React from 'react';
import styled from 'styled-components';
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import NotesIcon from '@mui/icons-material/Notes';

// Define styled components
const ShareContainer = styled.div`
  width: 100%;
  height: 170px;
  border-radius: 10px;
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  background-color: #fff; /* White background */
`;

const ShareWrapper = styled.div`
  padding: 10px;
`;

const ShareTop = styled.div`
  display: flex;
  align-items: center;
`;

const ShareProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const ShareInput = styled.input`
  border: none;
  width: 80%;
  font-size: 16px;

  &:focus {
    outline: none;
  }
`;

const ShareHr = styled.hr`
  margin: 20px;
`;

const ShareBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ShareOptions = styled.div`
  display: flex;
  margin-left: 20px;
`;

const ShareOption = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
`;

const ShareIcon = styled.div`
  font-size: 18px;
  margin-right: 3px;
`;

const ShareOptionText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #6d4c41; /* Medium brown text */
`;

const ShareButton = styled.button`
  border: none;
  padding: 7px;
  border-radius: 5px;
  background-color: #6d4c41; /* Medium brown background */
  font-weight: 500;
  margin-right: 20px;
  cursor: pointer;
  color: white;
`;

export default function Share() {
  return (
    <ShareContainer>
      <ShareWrapper>
        <ShareTop>
          <ShareProfileImg src="/assets/person/1.jpeg" alt="" />
          <ShareInput placeholder="Write a description" />
        </ShareTop>
        <ShareHr />
        <ShareBottom>
          <ShareOptions>
            <ShareOption>
              <MusicNoteIcon htmlColor="brown" className="shareIcon" />
              <ShareOptionText>Composition</ShareOptionText>
            </ShareOption>
            <ShareOption>
              <NotesIcon htmlColor="brown" className="shareIcon" />
              <ShareOptionText> Lyrics</ShareOptionText>
            </ShareOption>
          </ShareOptions>
          <ShareButton>Share</ShareButton>
        </ShareBottom>
      </ShareWrapper>
    </ShareContainer>
  );
}