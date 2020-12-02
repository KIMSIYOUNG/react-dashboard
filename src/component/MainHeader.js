import React from 'react';
import styled from "styled-components";


const HeaderTitle = styled.div`
  flex:1;
  display: flex;
  align-items: center;
  font-size:22px;
  font-weight:400;
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
  background: url("/user.svg");
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

const Divider = styled.div`
  margin-right: 10px;
`


const MainHeader = () => {

  return (
    <>
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
    </>
  )
}

export default MainHeader;