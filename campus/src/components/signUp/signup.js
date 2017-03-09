import React, { Component } from 'react';
import './signup.css';
import * as mat from 'material-ui';
import {
    browserHistory,
    Router,
    Route,
    IndexRoute,
    Link,
    IndexLink
} from 'react-router';

class SignUp extends Component {
    citiesGroup;
    constructor(props) {
        super(props);
       
        this.state = { email: '', password: '', name: '', gender: 1 };
        this.handleSubmit = this.handleLoginSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    componentDidMount() {
        this.props.loadInitialState();
    }

    // componentWillReceiveProps() {
    //     setTimeout(() => {
    //         if (this.props.application && this.props.application.user) {
    //             browserHistory.push('/dashboard');
    //         }
    //     }, 5)
    // }

    handleGenderTypeChange = (event, index, value) => this.setState({ gender: value });

    handleLoginSubmit(evt) {
        evt.preventDefault();
        var email = this.refs.email.getValue();
        var password = this.refs.password.getValue();
        var name = this.refs.name.getValue();
         var cellNumber = this.refs.cellNumber.getValue();
        var gender = this.state.gender;
        var userObj = { email: email, password: password, name: name,cellNumber: cellNumber, gender: gender, isDonor : false };
        this.props.signUpRequest(userObj);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const signupMain = {
            width : '60%',
            margin : '0 auto'
        }
        const { application } = this.props.application;
        return (
            <div className="main-login-div">
                <mat.Card style={signupMain}>
                    <mat.CardTitle title="SignUp" />
                    <mat.CardText>
                        <p>Already Have account? <Link to="/login">Login</Link></p>
                        <form onSubmit={this.handleSubmit} onChange={this.clearErrors}>
                            <h3>Account Info</h3>
                            <mat.Divider />
                            <mat.TextField
                                hintText="test@test.com"
                                floatingLabelText="Email"
                                className="full-width-container"
                                ref="email"
                                name="email"
                                required={true}
                                type="email"
                                onChange={this.handleInputChange}
                                /><br />
                            <mat.TextField
                                hintText="password"
                                ref="password"
                                name="password"
                                required={true}
                                type="password"
                                className="full-width-container"
                                onChange={this.handleInputChange}
                                floatingLabelText="Password" />
                            <br />
                          
                           
                            <mat.TextField
                                hintText="John Doe"
                                floatingLabelText="Name"
                                className="full-width-container"
                                ref="name"
                                name="name"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                            <mat.TextField
                                hintText="1231121234"
                                floatingLabelText="Cell Number"
                                className="full-width-container"
                                ref="cellNumber"
                                name="cellNumber"
                                required={true}
                                type="text"
                                onChange={this.handleInputChange}
                                /><br />
                            <mat.SelectField
                                ref="gender"
                                name="gender"
                                floatingLabelText="Gender"
                                onChange={this.handleGenderTypeChange}
                                className="full-width-container"
                                value={this.state.gender}
                                required={true}
                                >
                                <mat.MenuItem value={1} primaryText="Male" />
                                <mat.MenuItem value={2} primaryText="Female" />
                            </mat.SelectField>
                           
                            <br />
                          
                            <mat.RaisedButton type="submit" label="Submit" primary={true} />
                        </form>
                    </mat.CardText>
                </mat.Card>
            </div>
        );
    }
}

export default SignUp;