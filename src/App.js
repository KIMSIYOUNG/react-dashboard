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
  height:calc(100% - 80px);
  display: flex;
`

const MainTitle = styled.h1`
  margin-bottom: 50px; 
`

const MainContent = styled.div`
  display:flex;
  flex-direction: column;
  width: 500px;
`

const SubmitButton = styled.div`
  background: url("./check.svg");
  background-size: 100% 100%;
  width: 40px;
  height: 40px;
  align-self: flex-end;
`

const Divider = styled.div`
  margin-right: 10px;
`

const SideBar = styled.div`
  min-width: 300px;
  flex: 1;
  background-color: white;
  border-right: 1px solid #ddd;
  display:flex;
  flex-direction: column;
  overflow: scroll;
  height: 100%;
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
  
  padding-left: 100px;
  padding-top: 40px;
  background-color: #f5f5f5;
  height: 100%;
  overflow: scroll;
`

const InputField = styled.div`
  display: flex;
  align-items:center;
`

const VerticalDivider = styled.div`
  margin: 20px 0;
`

const InputIcon = styled.div`
  background: ${({ icon }) => `url(./${icon})`};
  background-size: 100% 100%;
  width: 20px;
  height: 20px;
  margin: 10px;
`

const InputArea = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const InputAreaTitle = styled.div`
  font-size: 14px;
  color: #aaa;
`

const Select = styled.select`
  margin: 10px 0;
  flex:1;
  background-color:transparent;
  outline: none;
  border: 0;
`

const InfoBox = styled.div`
  padding: 10px;
  border-radius:5px;
  background-color: #ddd;
  display:flex;
  justify-content: center;
  align-items: center;
`

const InputAreaBoxContainer = styled.div`
  display: flex;
  border-bottom: 3px solid #ccc;
  margin: 10px 0;
  align-items: center;
  
`

const InputAreaBox = styled.input`
  flex: 1;
  appearance: none;
  outline: none;
  border: 0;
  background-color: transparent;
`

const InputClearButton = styled.div`
  background: url("./cancel.svg");
  background-size: 100% 100%;
  width: 12px;
  height: 12px;
`

const InputAreaDescription = styled.div`
  font-size: 14px;
  color: #aaa;
`

const RegisterNumberField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const RegisterName = styled.div`
  font-size: 15px;
  color: black;
  font-weight: 500;
`

const NamedBox = styled.fieldset`
  display: flex;
  align-items: center;
  & > legend {
    color: #aaa; 
  };
  border: 1px solid #ccc;
  border-radius: 5px;
`


const NumberField = styled.div`

`

const OrderField = styled.div`
  display:flex;
  flex-direction:column;
`

const SelectOrderBox = styled.div`
  display:flex;
`

const RadioContainer = styled.label`
  
`

const RadioButton = styled.input`
  display:none;
  
  &:checked + div {
    background-color:#81ecec;
  };
`

const RadioBox = styled.div`
  border: 2px solid #ccc;
  padding: 15px;
 
`
const HorizontalContainer = styled.div`
  display:flex;
  align-items:center;
  justify-content: space-between;
`

const PaymentContainer = styled.div`
  width:70%;
`
const SelectBox = styled.div`
  margin: 20px 0;
`

const PaymentField = styled.div`
  display: flex;
  margin: 10px;
  
  ${InfoBox} {
    width: 20%;
    margin-right: 20px;
  } 
`

const initialMenuList = [
  {
    id: 1,
    toggle: true,
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
    toggle: true,
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
    toggle: true,
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
    toggle: true,
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
  {
    id: 5,
    toggle: true,
    name: "박영호 관리",
    menuItems: [
      {
        id: 7,
        icon: "add.svg",
        name: "영호 등록/삭제",
      },
      {
        id: 8,
        icon: "search.svg",
        name: "영호 조회",
      }
    ]
  },
  {
    id: 6,
    toggle: true,
    name: "김호돌 관리",
    menuItems: [
      {
        id: 7,
        icon: "add.svg",
        name: "호돌 등록/삭제",
      },
      {
        id: 8,
        icon: "search.svg",
        name: "호돌 조회",
      }
    ]
  },
  {
    id: 7,
    toggle: true,
    name: "시영 관리",
    menuItems: [
      {
        id: 7,
        icon: "add.svg",
        name: "시영 등록/삭제",
      },
      {
        id: 8,
        icon: "search.svg",
        name: "시영 조회",
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
          <div>
            <MainTitle>
              주문 등록
            </MainTitle>
            <MainContent>
              <InputField>
                <InputIcon icon="calendar.svg"/>
                <InputArea>
                  <InputAreaTitle>주문 발생 일자</InputAreaTitle>
                  <InputAreaBoxContainer>
                    <InputAreaBox type={"date"}/>
                    <InputClearButton/>
                  </InputAreaBoxContainer>
                  <InputAreaDescription>주문 등록 번호는 주문 발생 일자를 기준으로 부여됩니다.</InputAreaDescription>
                </InputArea>
              </InputField>
              <VerticalDivider/>
              <InputField>
                <InputIcon icon="clock.svg"/>
                <InputArea>
                  <InputAreaTitle>주문 발생 시간</InputAreaTitle>
                  <InputAreaBoxContainer>
                    <InputAreaBox type={"time"}/>
                    <InputClearButton/>
                  </InputAreaBoxContainer>
                </InputArea>
              </InputField>

              <VerticalDivider/>
              <RegisterNumberField>
                <RegisterName>업주 번호</RegisterName>
                <NamedBox>
                  <legend>업주 번호 앞자리</legend>
                  <InputAreaBox/>
                  <InputClearButton/>
                </NamedBox>
                -
                <NamedBox>
                  <legend>업주 번호 뒷자리</legend>
                  <InputAreaBox/>
                  <InputClearButton/>
                </NamedBox>
              </RegisterNumberField>
              <VerticalDivider/>
              <NumberField>
                <NamedBox>
                  <legend>주문 금액</legend>
                  <InputAreaBox/>
                  <InputClearButton/>
                </NamedBox>
              </NumberField>
              <VerticalDivider/>
              <OrderField>
                <SelectOrderBox>
                  <RadioContainer>
                    <RadioButton type={"radio"} name={"order-type"} checked/>
                    <RadioBox>정상 주문</RadioBox>
                  </RadioContainer>
                  <RadioContainer>
                    <RadioButton type={"radio"} name={"order-type"}/>
                    <RadioBox>취소 주문</RadioBox>
                  </RadioContainer>
                </SelectOrderBox>
                <HorizontalContainer>
                  <PaymentContainer>
                    <SelectBox>
                      <InputAreaTitle>결제 수단 선택(하나만 가능)</InputAreaTitle>
                      <InputAreaBoxContainer>
                        <Select>
                          <option>결제수단을 선택해주세요.</option>
                          <option>현금 결제</option>
                          <option>카드 결제</option>
                          <option>카카오 페이 결제</option>
                        </Select>
                      </InputAreaBoxContainer>
                      <InputAreaDescription>해당 주문의 결제수단을 선택해주세요.</InputAreaDescription>
                    </SelectBox>
                  </PaymentContainer>
                  <InfoBox>남은 금액 : 1000원</InfoBox>
                </HorizontalContainer>
                <PaymentField>
                  <InfoBox>카드</InfoBox>
                  <NamedBox>
                    <legend>주문 금액</legend>
                    <InputAreaBox/>
                    <InputClearButton/>
                  </NamedBox>
                </PaymentField>
                <PaymentField>
                  <InfoBox>모바일</InfoBox>
                  <NamedBox>
                    <legend>주문 금액</legend>
                    <InputAreaBox/>
                    <InputClearButton/>
                  </NamedBox>
                </PaymentField>
              </OrderField>
              <SubmitButton/>
            </MainContent>
          </div>
        </SMain>
      </SBody>

      <GlobalStyle/>
    </AppContainer>
  )
};

export default App;
