import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';

class App extends Component {
  state = {
    open: false,
  };
 
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  Closing = () => {
    this.props.signOut()
    this.setState({ open: false });
    
  };
 

    handleChange = (event, DONOR) => {
    this.setState({donorChange: DONOR});
  };
  

  render() {
    const actions = [
        <FlatButton
        label="SignOut"
        primary={true}
        onTouchTap={this.Closing}
      />,
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />

    ];
    
    

    return (
      <div>
        {this.props.login.isLogged ? <AppBar
          style={{ backgroundColor: '#802000', textAlign: "center" }}
          title="BLOOD DONATE SYSTEM"
          iconElementRight={<Chip onTouchTap={this.handleOpen}>{this.props.login.user.email}</Chip>}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        /> : <AppBar
            style={{ backgroundColor: '#802000', textAlign: "center" }}
            title="BLOOD DONATE SYSTEM"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />}
        <Dialog
          title="What you want to do ??"
          modal={false}
          actions={actions}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          Do you want to signOut ??? 
        </Dialog>
        
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
export default App;
