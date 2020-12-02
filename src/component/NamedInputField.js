import React from 'react';
import styled from "styled-components";

const NamedBox = styled.fieldset`
  display: flex;
  align-items: center;
  & > legend {
    color: #aaa; 
  };
  border: 1px solid #ccc;
  border-radius: 5px;
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


const NamedInputField = ({ title }) => {
  return (
    <NamedBox>
      <legend>{title}</legend>
      <InputAreaBox/>
      <InputClearButton/>
    </NamedBox>
  )
}

export default NamedInputField;