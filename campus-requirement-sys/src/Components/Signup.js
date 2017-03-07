import React, { Component } from 'react';
import { Link } from "react-router"
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Toggle from 'material-ui/Toggle';
import MenuItem from 'material-ui/MenuItem';

class Signup extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
    value: "O",
    Sex: "Male",
    Data: {},
    donor: false,
    password: ""
  };

  Donor = () => {
      this.setState({
      donor: !this.state.donor
    })
    
  }
  

  handleNext = (ev) => {
    ev.preventDefault()
    const { stepIndex } = this.state;
    this.setState({
      finished: stepIndex >= 3,
    });
    if (stepIndex === 3) {
      { this.props.signUp(this.state.Data,this.state.password) }
    }

    switch (stepIndex) {
      case 0:
        if (this.refs.fullName.getValue() === "" || this.refs.email.getValue() === "" || this.refs.password.getValue() === "") {
          alert("Please Complete Form")
        }
        else {
          var copyData = Object.assign({ fullName: this.refs.fullName.getValue(), email: this.refs.email.getValue(), bloodGroup: this.state.value, donor: this.state.donor }, this.state.Data)
          this.setState({password: this.refs.password.getValue()})
          const { stepIndex } = this.state;
          this.setState({
            stepIndex: stepIndex + 1,
            Data: copyData
          })
        }

        break;
      case 1:
        if (this.refs.country.getValue() === "" || this.refs.city.getValue() === "" || this.refs.area.getValue() === "") {
          alert("Please Complete Form")
        }
        else {
          var copyData = Object.assign({ Country: this.refs.country.getValue(), City: this.refs.city.getValue(), Area: this.refs.area.getValue() }, this.state.Data)
          const { stepIndex } = this.state;
          this.setState({
            stepIndex: stepIndex + 1,
            Data: copyData
          })
        }
        break;
      case 2:
        if (this.refs.weight.getValue() === ""|| this.refs.mobileNumber.getValue()=== "") {
          alert("Please Complete Form")
        }
        else {
          var copyData = Object.assign({mobileNumber: this.refs.mobileNumber.getValue(), Weight: this.refs.weight.getValue(), Sex: this.state.Sex }, this.state.Data)
          const { stepIndex } = this.state;
          this.setState({
            stepIndex: stepIndex + 1,
            Data: copyData
          })
        }
        break;
      case 3:{
        
          const { stepIndex } = this.state;
          this.setState({
            stepIndex: stepIndex + 1
          })
        break;
      }
      default:
        console.log("Something Went Wrong")
    }
  };


  handleChange = (event, index, value) => this.setState({ value });

  changeSex = (event, index, Sex) => this.setState({ Sex });

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <div>
          <form onSubmit={this.handleNext}>  <TextField
            hintText="Enter Your Full Name"
            floatingLabelText="Full Name"
            floatingLabelStyle={{ color: "#802000" }}
            multiLine={false} ref="fullName" /> <br />
            <TextField
              hintText="Enter Your Email"
              floatingLabelText="Email"
              floatingLabelStyle={{ color: "#802000" }}
              multiLine={false}
              type="email"
              required ref="email" /> <br />
            <TextField
              hintText="Enter Password"
              floatingLabelText="Password"
              floatingLabelStyle={{ color: "#802000" }}
              multiLine={false}
              type="password" ref="password" /> <br />
              <div style={{ marginTop: 12 }}>
              <RaisedButton
                label='Next'
                backgroundColor="#802000"
                labelColor="white"
                type="submit"
              />
            </div>
                </form>

           
            
             
            

          
              </div>
        );
      case 1:
        return (
          <div>
            <TextField hintText="Enter Your Country" ref="country" floatingLabelText="Country" floatingLabelStyle={{ color: "#802000" }} multiLine={false} /><br />
            <TextField
              hintText="Enter Your City"
              floatingLabelText="City"
              ref="city"
              floatingLabelStyle={{ color: "#802000" }}
              multiLine={false}
            /><br />
            <TextField
              hintText="Enter Your Area"
              floatingLabelText="Area"
              ref="area"
              floatingLabelStyle={{ color: "#802000" }}
              multiLine={false}
            /><br />
            <br />
            <div style={{ marginTop: 12 }}>

              <RaisedButton
                label='Next'
                backgroundColor="#802000"
                labelColor="white"
                onTouchTap={this.handleNext}
              />
            </div>
          </div>);
      case 2:
        return (
          <form>
            <TextField
              hintText="Enter Your Weight in KG ex: 50"
              floatingLabelText="Your Weight"
              floatingLabelStyle={{ color: "#802000" }}
              multiLine={false}
              type="number"
              ref="weight"
            /><br />
            <SelectField
              floatingLabelText="Sex"
              value={this.state.Sex}
              onChange={this.changeSex}
              autoWidth={true}
            ><MenuItem value={"Male"} primaryText="Male" />
              <MenuItem value={"Female"} primaryText="Female" />
            </SelectField>
            <br />
            <TextField
              hintText="Enter Your Mobile number"
              floatingLabelText="Your Mobile Number"
              floatingLabelStyle={{ color: "#802000" }}
              multiLine={false}
              ref="mobileNumber"
              type="number"
            /><br />
            <br />
            <div style={{ marginTop: 12 }}>

              <RaisedButton
                label='Next'
                backgroundColor="#802000"
                labelColor="white"
                onTouchTap={this.handleNext}
              />
            </div></form>
        );
      case 3:
        return (
          <div>
            Are You Sure Complete Registration ? 
            <div style={{ marginTop: 12 }}>

              <RaisedButton
                label='Finish'
                backgroundColor="#802000"
                labelColor="white"
                onTouchTap={this.handleNext}
              />
            </div>
            </div>
        );

      default:
        return 'Something Went Wrong!';
    }
  }

  render() {
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: '0 16px' };
    return (
      <div style={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
        <h1 style={{ textAlign: "center" }}> User Registration </h1>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Basic Details</StepLabel>
          </Step>
          // <Step>
          //   <StepLabel >Location</StepLabel>
          // </Step>
          // <Step>
          //   <StepLabel>Other Details</StepLabel>
          // </Step>
          // <Step>
          //   <StepLabel>Contact Details</StepLabel>
          // </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <div>
              <p> Congratulations !! You Successfully Completed Registration <Link to="/signin"> Sign In </Link> </p>
            </div>
          ) : (
              <div>
                <div>{this.getStepContent(stepIndex)}</div>

              </div>
            )}
        </div>
      </div>
    );
  }
}
injectTapEventPlugin();
export default Signup;

