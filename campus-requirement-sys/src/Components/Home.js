import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import imga from "../12.jpg"
import "../index.css"
import {Link} from "react-router"
import RaisedButton from 'material-ui/RaisedButton';


class Login extends Component {
  render() {
    return (
      <div style={{ width: '100%', maxWidth: 600, margin: 'auto' }}>
        <br />
         <br />
        <img src={imga} style={{width:"60%",height:"60%",opacity:0.6}} />
        <br />
        <Link to="/signin" ><RaisedButton label="Login" primary={true} style={{margin:"12px"}} /> </Link>
         <Link to="/signup" ><RaisedButton label="Sign Up" primary={true} /></Link>
      </div>
    );
  }
}

export default Login;
