import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux'
import * as mat from 'material-ui';
// import * as fbConfigs from '/configs/dbconfigs';
// import { signUp } from '../store/action/auth'
// import TextField from 'material-ui/TextField';
// import AppBar from 'material-ui/AppBar';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';
import * as firebase from 'firebase';

class Student extends Component {
    constructor() {
        super();
        this.state = {
            fullname: '',
            mobile: '',
            address: '',
            age:'',
           
        }
        this.submit = this.submit.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        let multipath = {};
        var student = {
            fullname: this.state.fullname,
            mobile: this.state.mobile,
              age: this.state.age,
            address: this.state.address,
            
        }
        console.log(student)
        firebase.database().ref('/newStudent/').push({student});
        browserHistory.push('/companyData')

    }
    render() {
        return (
            <div ><center>
                <SignupComponent signUpState={this.state} _inputHandler={this.inputHandler} _submit={this.submit} />
            </center>
            </div>
        );
    }
}



class SignupComponent extends React.Component {

    render() {
        
        return (
            <div >
              
                <h1> Registered to See Jobs </h1>
                <form onSubmit={this.props._submit} >
                    <mat.TextField
                        hintText="Full Name"
                        name="fullname"
                        value={this.props.signUpState.fullname}
                     floatingLabelText="Full Name"
                        onChange={this.props._inputHandler}
                        /><br />

                    <mat.TextField
                        type="text"
                        hintText="Mobile"
                        name="mobile"
                        value={this.props.signUpState.mobile}
                       floatingLabelText="Mobile"
                        onChange={this.props._inputHandler}
                        /><br />

                    <mat.TextField
                        type="text"
                        hintText="address"
                        name="address"
                        value={this.props.signUpState.address}
                        floatingLabelText="Address"
                        onChange={this.props._inputHandler}
                        /><br />
                        <mat.TextField
                        type="text"
                        hintText="Age"
                        name="age"
                        value={this.props.signUpState.age}
                        floatingLabelText="Age"
                        onChange={this.props._inputHandler}
                        /><br />
                        <br />

                 <mat.RaisedButton type="submit" label="Available jobs" backgroundColor="" Color ="white" /> <br /><br />
                </form>
                 <h3> Already Registered</h3> 
            <Link to='/companyData'> <mat.RaisedButton type="submit" label="Available Jobs " primary="true" /> </Link>
            </div>
        )
    }
}


export default Student;