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
  background-color:#00cec9;
`

const MenuContainer = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconButton = styled.div`
  background: ${({url}) => "url('./" + url + "')"};
  background-size:100% 100%;
  ${({width, height}) => `width:${width}; height:${height};`};
`

const HeaderTitle = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  font-size:18px;
  font-weight:600;
  color: white;
`

const Information = styled.div`
  display: flex;
  align-items: center;
  min-width: 400px;
  justify-content: flex-end;
  padding:15px;
`

const Greeting = styled.div`
  display:flex;
  font-size:16px;
  font-weight:500;
  color: white;
  margin-right:30px;
  align-items:center;
`

const UserRole = styled.div`
  display:flex;
  border-radius: 20px;
  background-color:#a29bfe;
  font-size:13px;
  font-weight:400;
  padding: 3px 10px;
  align-items:center; 
`

const RoleIcon = styled.div`
  background: url("./user.svg");
  background-size:100% 100%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
`


const GreetingMessage = styled.div`
  font-size:16px;
  font-weight:500;
  color: white;
  margin-right:30px;
  margin-left:10px;
`

const CircleButton = styled.div`
  border-radius: 50px;
  background-color: #0984e3;
  height:50px;
  width:50px;
  display: flex;
  justify-content: center;
  align-items:center;
  font-size:13px;
  font-weight:400;
  color: white;
`

const SBody = styled.div`
  background-color:white;
  height:100%;
  display: flex;
`

const MainTitle = styled.div`
`

const MainContent = styled.div`
`

const Divider = styled.div`
  margin-right: 10px;
`

const SideBar = styled.div`
  min-width: 300px;
  flex: 1;
  background-color: white;
  border-right: 1px solid #ddd;
`

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:10px;
  margin-left:10px;
`

const MenuHeader = styled.div`  
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  
  font-size:16px;
  font-weight:700;
  color: #00cec9;
`

const IconContainer = styled.div`  
  width: 100px;
  display: flex;
  justify-content: ${({isItem}) => `${isItem && "center"}`}; 
`

const MenuItem = styled.div`
  display: flex;
  padding-left: 10px;
  height: 50px;
  
  font-size:15px;
  font-weight:500;
  color: black;
  align-items:center;
`

const SMain = styled.div`
  flex:5;
`

const App = () => {
  return (
    <AppContainer>
      <SHeader>
        <MenuContainer>
          <IconButton url={"menu-icon.svg"} width="24px" height="24px"/>
        </MenuContainer>
        <HeaderTitle>
          정산 시스템
        </HeaderTitle>
        <Information>
          <Greeting>
            <UserRole>
              <RoleIcon/>
              관리자
            </UserRole>
            <GreetingMessage>안운장님 반갑습니다.</GreetingMessage>
          </Greeting>
          <CircleButton>정보수정</CircleButton>
          <Divider/>
          <CircleButton>로그아웃</CircleButton>
        </Information>
      </SHeader>
      <SBody>
        <SideBar>
          <MenuList>
            <MenuHeader>
              <IconContainer>
                <IconButton url={"arrow.svg"} width="15px" height="15px"/>
              </IconContainer>
              업주 관리
            </MenuHeader>
            <MenuItem>
              <IconContainer isItem>
                <IconButton url={"add.svg"} width="15px" height="15px"/>
              </IconContainer>
              업주 등록
            </MenuItem>
            <MenuItem>
              <IconContainer isItem>
                <IconButton url={"search.svg"} width="15px" height="15px"/>
              </IconContainer>
              업주 검색
            </MenuItem>
          </MenuList>

          <MenuList>
            <MenuHeader>
              <IconContainer>
                <IconButton url={"arrow.svg"} width="15px" height="15px"/>
              </IconContainer>
              주문 관리
            </MenuHeader>
            <MenuItem>
              <IconContainer isItem>
                <IconButton url={"add.svg"} width="15px" height="15px"/>
              </IconContainer>
              주문 등록
            </MenuItem>
            <MenuItem>
              <IconContainer isItem>
                <IconButton url={"search.svg"} width="15px" height="15px"/>
              </IconContainer>
              주문 검색
            </MenuItem>
          </MenuList>

          <MenuList>
            <MenuHeader>
              <IconContainer>
                <IconButton url={"arrow.svg"} width="15px" height="15px"/>
              </IconContainer>
              보정 금액 관리
            </MenuHeader>
            <MenuItem>
              <IconContainer isItem>
                <IconButton url={"add.svg"} width="15px" height="15px"/>
              </IconContainer>
              보정 금액 등록
            </MenuItem>
            <MenuItem>
              <IconContainer isItem>
                <IconButton url={"search.svg"} width="15px" height="15px"/>
              </IconContainer>
              보정 금액 검색
            </MenuItem>
          </MenuList>

          <MenuList>
            <MenuHeader>
              <IconContainer>
                <IconButton url={"arrow.svg"} width="15px" height="15px"/>
              </IconContainer>
              지급금 관리
            </MenuHeader>
            <MenuItem>
              <IconContainer isItem>
                <IconButton url={"add.svg"} width="15px" height="15px"/>
              </IconContainer>
              지급금 생성/삭제
            </MenuItem>
            <MenuItem>
              <IconContainer isItem>
                <IconButton url={"search.svg"} width="15px" height="15px"/>
              </IconContainer>
              지급금 조회
            </MenuItem>
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
