import React from 'react';
import styled from "styled-components";
import DefaultInputField from "../component/DefaultInputField";
import NamedInputField from "../component/NamedInputField";
import SelectBox from "../component/SelectBox";
import RegisterNumberField from "../component/RegisterNumberField";
import DefaultMainLayout from "../layout/DefaultMainLayout";

const SubmitButton = styled.div`
  background: url("./check.svg");
  background-size: 100% 100%;
  width: 40px;
  height: 40px;
  align-self: flex-end;
`

const VerticalDivider = styled.div`
  margin: 20px 0;
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

const InfoBox = styled.div`
  padding: 10px;
  border-radius:5px;
  background-color: #ddd;
  display:flex;
  justify-content: center;
  align-items: center;
`
const PaymentField = styled.div`
  display: flex;
  margin: 10px;
  
  ${InfoBox} {
    width: 20%;
    margin-right: 20px;
  } 
`

const OrderRegisterView = () => {
  return (
    <DefaultMainLayout title="주문 등록" width="500px">
      <DefaultInputField title="주문 발생 일자" description="주문 등록 번호는 주문 발생 일자를 기준으로 부여됩니다."
                         type="date" />
      <VerticalDivider/>
      <DefaultInputField title="주문 발생 시간" type="time"/>
      <VerticalDivider/>
      <RegisterNumberField/>
      <VerticalDivider/>
      <NumberField>
        <NamedInputField title="주문 금액"/>
      </NumberField>
      <VerticalDivider/>
      <OrderField>
        <SelectOrderBox>
          <RadioContainer>
            <RadioButton type={"radio"} name={"order-type"}/>
            <RadioBox>정상 주문</RadioBox>
          </RadioContainer>
          <RadioContainer>
            <RadioButton type={"radio"} name={"order-type"}/>
            <RadioBox>취소 주문</RadioBox>
          </RadioContainer>
        </SelectOrderBox>
        <HorizontalContainer>
          <PaymentContainer>
            <SelectBox/>
          </PaymentContainer>
          <InfoBox>남은 금액 : 1000원</InfoBox>
        </HorizontalContainer>
        <PaymentField>
          <InfoBox>카드</InfoBox>
          <NamedInputField title="주문 금액"/>
        </PaymentField>
        <PaymentField>
          <InfoBox>모바일</InfoBox>
          <NamedInputField title="주문 금액"/>
        </PaymentField>
      </OrderField>
      <SubmitButton/>
    </DefaultMainLayout>
  )
}

export default OrderRegisterView;