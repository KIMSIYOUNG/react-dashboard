import React from 'react';
import styled from "styled-components";

const SMain = styled.div`
  flex:5;
  padding-left: 100px;
  padding-top: 40px;
  background-color: #f5f5f5;
  height: 100%;
  overflow: scroll;
`


const MainTitle = styled.h1`
  margin-bottom: 50px; 
`

const MainContent = styled.div`
  display:flex;
  flex-direction: column;
  width: ${({ width }) => `${width}`};
`

const DefaultMainLayout = ({ title, children, width }) => {
  return (
    <SMain>
      <div>
        <MainTitle>
          {title}
        </MainTitle>
        <MainContent width={width}>
          {children}
        </MainContent>
      </div>
    </SMain>
  )
}

export default DefaultMainLayout;