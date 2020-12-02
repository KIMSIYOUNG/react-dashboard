import React from 'react';
import styled from "styled-components";

const SelectBoxContainer = styled.div`
  margin: 20px 0;
`

const Select = styled.select`
  margin: 10px 0;
  flex:1;
  background-color:transparent;
  outline: none;
  border: 0;
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

const InputAreaDescription = styled.div`
  font-size: 14px;
  color: #aaa;
`

const SelectBox = () => {
  return (
    <SelectBoxContainer>
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
    </SelectBoxContainer>
  )
}

export default SelectBox;