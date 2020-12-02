import React from 'react';
import NamedInputField from "./NamedInputField";
import styled from "styled-components";

const RegisterName = styled.div`
  font-size: 15px;
  color: black;
  font-weight: 500;
`

const RegisterNumberFieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`



const RegisterNumberField = () => {
  return (
    <RegisterNumberFieldContainer>
      <RegisterName>업주 번호</RegisterName>
      <NamedInputField title="업주 번호 앞자리"/>
      -
      <NamedInputField title="업주 번호 뒷자리"/>
    </RegisterNumberFieldContainer>
  )
}

export default RegisterNumberField;