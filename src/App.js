import { createGlobalStyle } from "styled-components";
import React from "react";
import OrderRegisterView from "./page/OrderRegisterView";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import SideBarLayout from "./layout/SideBarLayout";
import MainHeader from "./component/MainHeader";
import MainSideBar from "./component/MainSideBar";
import OrderListView from "./page/OrderListView";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  
  * {
    box-sizing: border-box;
  }
`

const App = () => {
  return (
    <Router>
      <SideBarLayout header={<MainHeader/>} sideBar={<MainSideBar/>}>
        <Switch>
          <Route path="/order/register">
            <OrderRegisterView/>
          </Route>
          <Route path="/order/list">
            <OrderListView/>
          </Route>
        </Switch>
        <GlobalStyle/>
      </SideBarLayout>
    </Router>
  )
};

export default App;
