import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {syncHistoryWithStore} from "react-router-redux"
import createLogger from "redux-logger";
import rootReducer from '../Reducer/index';
import {browserHistory} from "react-router"
// import {firedux} from '../Server/index'
import firebase from 'firebase'
import app from "../Server/index"

var Logger = createLogger();

const logger = createLogger();

export const store = createStore(rootReducer, 
	compose(applyMiddleware(thunk,Logger)));
  // firedux.dispatch = store.dispatch

  export const history = syncHistoryWithStore(browserHistory,store)