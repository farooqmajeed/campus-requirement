import React from 'react';
import ReactDOM from 'react-dom';

import Main from "./Container/Main";
import Signup from "./Components/Signup";
import App from "./Components/App";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Router , Route , IndexRoute , browserHistory} from "react-router";
import Login from "./Components/Signin" ;
import Dashboard from "./Components/Dashboard" 
import Home from "./Components/Home" ;
import {Provider} from "react-redux";
import {store} from "./Store/store"
import {history} from "./Store/store"
import firebase from "firebase"
import requireds from "./required"
import Profile from "./Components/profile"
// import {firedux} from "./Server/index"
// firebase.auth().onAuthStateChanged((user)=>{
 
//    if(user){   
//      var uid = user.uid 
// //      firedux.watch("users/"+uid)
//      store.dispatch({
//        type: "LoginSuccess",
//        user
//      })
//      browserHistory.push("/dashboard")
//          console.log(user.uid); 
//    }
//    else{
//    }
// })



ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
  <Router history = {history}>  
    <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    <Route path ="signup" component={Signup} />
    <Route path="signin" component={Login} />
 
    <Route path="dashboard:id" component={Dashboard} onEnter={requireds} />
    <Route path="profile" component={Profile} onEnter={requireds} />
      </Route>
    </Router>
    </Provider>
    </MuiThemeProvider>,
  document.getElementById('root')

);
