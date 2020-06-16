import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.9.0";
import LandingPage from "views/LandingPage/LandingPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import axios from "axios"
import BillGen from "./views/BillGen/BillGen"
import TrackOrder from "views/TrackOrder/TrackOrder"
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import foodReducer from "./store/reducers/foodReducer"
var hist = createBrowserHistory();
axios.defaults.headers.common['Authorization'] = "Basic dGVzdEBnbWFpbC5jb20gdGVzdDEyMzp0ZXN0MTIzNDV0c3QxMjM=";
const store = createStore(foodReducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route exact path="/trackOrder" component={TrackOrder} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById("root")
);
