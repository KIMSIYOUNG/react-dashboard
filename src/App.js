import styled, { createGlobalStyle } from "styled-components";
import React, { useState } from "react";

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
  &:hover {
    background-color: rgba(0,0,0,0.1);
  }
`

const IconButton = styled.div`
  background: ${({ url }) => "url('./" + url + "')"};
  background-size:100% 100%;
  ${({ width, height }) => `width:${width}; height:${height};`};
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
  &:hover {
    background-color: rgba(0,0,0,0.1);
  };
`

const IconContainer = styled.div`  
  width: 100px;
  display: flex;
  justify-content: ${({ isItem }) => `${isItem && "center"}`};
  ${({ isActive }) => isActive && "transform:scaleY(-1)"};  
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
const initialMenuList = [
  {
    id: 1,
    toggle: false,
    name: "업주 관리",
    menuItems: [
      {
        id: 1,
        icon: "add.svg",
        name: "업주 등록",
      },
      {
        id: 2,
        icon: "search.svg",
        name: "업주 검색",
      }
    ]
  },
  {
    id: 2,
    toggle: false,
    name: "주문 관리",
    menuItems: [
      {
        id: 3,
        icon: "add.svg",
        name: "주문 등록",
      },
      {
        id: 4,
        icon: "search.svg",
        name: "주문 검색",
      }
    ]
  },
  {
    id: 3,
    toggle: false,
    name: "보정 금액 관리",
    menuItems: [
      {
        id: 5,
        icon: "add.svg",
        name: "보정 금액 등록",
      },
      {
        id: 6,
        icon: "search.svg",
        name: "보정 금액 검색",
      }
    ]
  },
  {
    id: 4,
    toggle: false,
    name: "지급금 관리",
    menuItems: [
      {
        id: 7,
        icon: "add.svg",
        name: "지급금 등록/삭제",
      },
      {
        id: 8,
        icon: "search.svg",
        name: "지급금 조회",
      }
    ]
  },
]

const App = () => {
  const [menuListToggle, setMenuListToggle] = useState(true);
  const [menuList, setMenuList] = useState(initialMenuList);

  const showMenuLists = () => {
    setMenuListToggle(!menuListToggle)
  }

  const changeMenuToggle = (id) => {
    setMenuList(menuList.map(m => m.id === id ? ({ ...m, toggle: !m.toggle }) : m))
  }

  console.log(menuList)
  return (
    <AppContainer>
      <SHeader>
        <MenuContainer onClick={() => showMenuLists()}>
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
        {menuListToggle && <SideBar>
          {menuList.map(m => <MenuList key={m.id}>
            <MenuHeader onClick={() => changeMenuToggle(m.id)}>
              <IconContainer isActive={m.toggle}>

                <IconButton url={"arrow.svg"} width="15px" height="15px"/>
              </IconContainer>
              {m.name}
            </MenuHeader>
            {m.toggle && m.menuItems.map(menu => <MenuItem key={menu.id}>
              <IconContainer isItem>
                <IconButton url={menu.icon} width="15px" height="15px"/>
              </IconContainer>
              {menu.name}
            </MenuItem>)}
          </MenuList>)}

        </SideBar>}
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
