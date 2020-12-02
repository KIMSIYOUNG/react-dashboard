import styled, { createGlobalStyle } from "styled-components";
import React from "react";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  
  * {
    box-sizing: border-box;
  }
`

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  
  background-color: black;
`

const SHeader = styled.div`
  display: flex;
  height: 80px;  
  background-color:blue;
`

const MenuButton = styled.div`
  width: 80px;
  height: 80px;
`

const HeaderTitle = styled.div`
  flex:1;
  background-color: green;
`

const Information = styled.div`
  width: 300px;
  background-color: red;
`

const SBody = styled.div`
  background-color:yellow;
  height:100%;
  display: flex;
`

const MainTitle = styled.div`
`

const MainContent = styled.div`
`

const SideBar = styled.div`
  background-color: grey;
  min-width: 300px;
  flex: 1;
`

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  background-color:black;
`

const MenuHeader = styled.div`
  height: 50px;
  background-color:red;
`

const MenuItem = styled.div`
  height: 50px;
  background-color:blue;
`

const SMain = styled.div`
  flex:5;
`

const App = () => {
  return (
    <AppContainer>
      <SHeader>
        <MenuButton/>
        <HeaderTitle/>
        <Information/>
      </SHeader>
      <SBody>
        <SideBar>
          <MenuList>
            <MenuHeader/>
            <MenuItem/>
            <MenuItem/>
          </MenuList>

          <MenuList>
            <MenuHeader/>
            <MenuItem/>
            <MenuItem/>
          </MenuList>

          <MenuList>
            <MenuHeader/>
            <MenuItem/>
            <MenuItem/>
          </MenuList>

          <MenuList>
            <MenuHeader/>
            <MenuItem/>
            <MenuItem/>
          </MenuList>
        </SideBar>
        <SMain>
          <MainTitle/>
          <MainContent/>
        </SMain>
      </SBody>

      <GlobalStyle/>
    </AppContainer>
  )
};

export default App;
