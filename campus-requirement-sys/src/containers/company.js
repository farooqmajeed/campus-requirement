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

class Company extends Component {
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
        var companyList = {
            fullname: this.state.fullname,
            mobile: this.state.mobile,
              age: this.state.age,
            address: this.state.address,
            
        }
        console.log(companyList)
        firebase.database().ref('/newCompany/').push({companyList});
        browserHistory.push('/StudentList')

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
              
                <h1> Company Data To Find Candidate</h1>
                <form onSubmit={this.props._submit} >
                    <mat.TextField
                        hintText="Company Name"
                        name="fullname"
                        value={this.props.signUpState.fullname}
                     floatingLabelText="Company Name"
                        onChange={this.props._inputHandler}
                        isRequired = "true"
                        /><br />

                    <mat.TextField
                        type="text"
                        hintText="Phone Number"
                        name="mobile"
                        value={this.props.signUpState.mobile}
                       floatingLabelText="phone"
                        onChange={this.props._inputHandler}
                        /><br />

                    <mat.TextField
                        type="text"
                        hintText="location"
                        name="address"
                        value={this.props.signUpState.address}
                        floatingLabelText="location"
                        onChange={this.props._inputHandler}
                        /><br />
                        <mat.TextField
                        type="text"
                        hintText="Age Required for Job"
                        name="age"
                        value={this.props.signUpState.age}
                        floatingLabelText="Age of Candidate"
                        onChange={this.props._inputHandler}
                        /><br />
                        <br />

                 <mat.RaisedButton type="submit" label="Available Candidate" backgroundColor="" Color ="white" /> <br /><br />

                </form>
                 <h3> Already Registered</h3> 
            <Link to='/StudentList'> <mat.RaisedButton type="submit" label="Available Candidate " primary="true" /> </Link>
                
            </div>
        )
    }
}


export default Company;