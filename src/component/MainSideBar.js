import React, { useState } from 'react';
import styled from "styled-components";
import { MOCK_DATA } from "../Const";
import { Link } from "react-router-dom";


const IconButton = styled.div`
  background: ${({ url }) => "url('/" + url + "')"};
  background-size:100% 100%;
  ${({ width, height }) => `width:${width}; height:${height};`};
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

const MenuItem = styled(Link)`
  text-decoration: none;
  display: flex;
  padding-left: 10px;
  height: 50px;
  
  font-size:15px;
  font-weight:500;
  color: black;
  align-items:center;
  
  &:hover {
    background-color: rgba(0,0,0,0.1);
  };
`


const MainSideBar = () => {
  const [menuList, setMenuList] = useState(MOCK_DATA);

  const changeMenuToggle = (id) => {
    setMenuList(menuList.map(m => m.id === id ? ({ ...m, toggle: !m.toggle }) : m))
  }

  return (
    <>
      {menuList.map(m => <MenuList key={m.id}>
        <MenuHeader onClick={() => changeMenuToggle(m.id)}>
          <IconContainer isActive={m.toggle}>

            <IconButton url={"arrow.svg"} width="15px" height="15px"/>
          </IconContainer>
          {m.name}
        </MenuHeader>
        {m.toggle && m.menuItems.map(menu => <MenuItem key={menu.id} to={menu.path}>
          <IconContainer isItem>
            <IconButton url={menu.icon} width="15px" height="15px"/>
          </IconContainer>
          {menu.name}
        </MenuItem>)}
      </MenuList>)}
    </>
  )
}

export default MainSideBar;