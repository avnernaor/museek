import React from 'react';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
`;

export default function Home() {
  return (
    <>
      <Topbar />
      <HomeContainer>
        <Feed />
        <Rightbar />
      </HomeContainer>
    </>
  );
}