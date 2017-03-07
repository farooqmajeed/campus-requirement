// import React, { Component } from 'react';
// import { Tabs, Tab } from 'material-ui/Tabs';
// import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
// import { firedux } from "../Server/index"
// import firebase from "firebase"
// import { store } from "../Store/store"
// import Dialog from 'material-ui/Dialog';
// import {Link} from "react-router"
// import FlatButton from 'material-ui/FlatButton';
// import {List, ListItem} from 'material-ui/List';
// import Avatar from 'material-ui/Avatar';
// import Subheader from 'material-ui/Subheader';

// class Dashboard extends Component {
//   constructor(props)
//   {
//     super(props)
//     {
//       this.state = {donor:{},openUs:false}
//     }
//   }
// componentWillMount(){
//   let uid = firebase.auth().currentUser.uid
//   this.props.bloodGroup(uid)
 
// }
//    handleUserClose = () => {
//     this.setState({openUs: false});
//   };

//   handleUserOpen = (ev) => {
//     this.setState({openUs: true});
//     console.log(ev.target)
//   };

//   render() {
//     var obj = this.props.Detail.Donors
//     var keys=[]
//     var obje = {}
//     var asd = this.props.Detail;
    
    
//     asd.map((result)=>{
//       obje = Object.assign({},obje,result)
//     })
//     for(var key in obje)
//     {
//       keys.push(key)
//     }

//     console.log(obje)
//     const actions = [
//       <FlatButton
//         label="Cancel"
//         primary={true}
//         onTouchTap={this.handleUserClose}
//       />
      
//     ]
//     return (
//       <div className="App">
       
//         <Tabs>
//           <Tab label="Donors" value="a" >
//             <div>
//               <h2>Your Matching Blood Group Donor's</h2>
//                <List>
//       <Subheader>Your Matching Blood Group Donor's</Subheader>
      
//       {keys.map((key)=>{
//                       if(obje[key].donate===true)
//                       {
//           return (<ListItem key={key} primaryText={obje[key].username} secondaryTextLines={2}  secondaryText={<p>Blood Group: {obje[key].blood} <br /> Mobile Number: {obje[key].mobile}</p>} leftAvatar={<Avatar />} />)
//                       }
//         })}

//     </List>
//             </div>
//           </Tab>
          
//         </Tabs>
        
//       </div>
//     );
//   }
// }

// export default Dashboard;
