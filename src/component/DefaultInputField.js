import React from 'react';
import styled from "styled-components";

const InputFieldContainer = styled.div`
  display: flex;
  flex: 1;
  align-items:center;
`
const InputIcon = styled.div`
  background: ${({ icon }) => `url(/${icon})`};
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

const icons = {
  date: "calendar.svg",
  time: "clock.svg",
}

const DefaultInputField = ({ title, description, type }) => {
  return (
    <InputFieldContainer>
      <InputIcon icon={icons[type]}/>
      <InputArea>
        <InputAreaTitle>{title}</InputAreaTitle>
        <InputAreaBoxContainer>
          <InputAreaBox type={type}/>
          <InputClearButton/>
        </InputAreaBoxContainer>
        <InputAreaDescription>{description}</InputAreaDescription>
      </InputArea>
    </InputFieldContainer>
  )
}

export default DefaultInputField;