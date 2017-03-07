import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from "react-router"

class Login extends Component {
  handleClick = (ev) => {
    ev.preventDefault()
    var email = this.refs.email.getValue()
    var password = this.refs.password.getValue()
    this.props.Login(email, password)
  }

  render() {
    return (
      <form onSubmit={this.handleClick} style={{ width: '100%', maxWidth: 700, margin: 'auto' }} >
        <h1>Login </h1>
        <TextField
          hintText="Enter your email Address"
          floatingLabelText="email"
          type="email"
          floatingLabelStyle={{ color: "#802000" }}
          multiLine={false} ref="email" required /><br />
        <TextField
          hintText="Enter Your Password"
          floatingLabelText="Password"
          type="password"
          floatingLabelStyle={{ color: "#802000" }}
          multiLine={false} ref="password" required /> <br /><br />
        <RaisedButton
          label="Login"
          primary={true}
          type="submit"
           style={{margin:"12px"}}
        />
        <Link to="/" ><RaisedButton label="Cancel" primary={true} /></Link>
      </form>
      
    );
  }
}

export default Login;
