import React from 'react';
import DefaultMainLayout from "../layout/DefaultMainLayout";
import DefaultInputField from "../component/DefaultInputField";
import RegisterNumberField from "../component/RegisterNumberField";
import styled from "styled-components";

const HorizontalLayout = styled.div`
  display: flex;
`

const OrderListView = () => {
  return (
    <DefaultMainLayout title="주문 검색" width="100%">
      <HorizontalLayout>
        <div style={{ width:"500px", marginRight: "50px"}}>
          <DefaultInputField title="&nbsp;" description="검색할 주문의 발생일자를 선택하세요." type="date"/>
        </div>
        <div style={{ width:"500px" }}>
          <RegisterNumberField/>
        </div>
      </HorizontalLayout>
    </DefaultMainLayout>
  )
}

export default OrderListView;