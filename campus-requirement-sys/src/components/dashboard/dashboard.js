import React, { Component } from 'react';
import * as mat from 'material-ui';
import {
    browserHistory,
    Router,
    Route,
    IndexRoute,
    IndexRedirect,
    Link,
    IndexLink
} from 'react-router';

class Dashboard extends Component {
 
   


    componentDidMount() {
        //This is called for Loading Initial State
        this.props.loadUserRequest();
    }

    componentWillReceiveProps() {
        setTimeout(() => {
            if (!this.props.application || !this.props.application.user) {
                browserHistory.push('/login');
            }
        }, 5)
    }

   

    render() {
        const style = {
            marginTop:20,
            height: 500,
            width: 400,
            marginLeft: 60,
            textAlign: 'center',
            display: 'inline-block',
        };
         const style1 = {
    
            height: 500,
            width: 450,
            marginLeft: 120,
            textAlign: 'center',
            display: 'inline-block',
        };
          const style2 = {
            
            height: 500,
            width: 400,
            marginLeft: 140,
            textAlign: 'center',
            display: 'inline-block',
        };
        const customAnchor = {
            textDecoration: 'none',
            color: '#000'
        }
        return (
            <div>
                <div> 

       
                
                    <mat.Paper style={style} zDepth={0} rounded={false}>
                            <br/>
                    <br/>
                        <br/>
                    <br/>
                      <h2> student Access</h2>
                           <br />
      <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjg9VNs_ofugmc9WrbIoJdxUU4Mo0pYvXOr3Ag4qhWTttRWJ2pbQ"/> <br />
                    
                      <Link to='/student'> <mat.FlatButton type="submit" label="Students" primary={true} /></Link>
                     </mat.Paper>

                      <mat.Paper style={style1} zDepth={0} rounded={false}>
                       <h2> Company Access</h2>
                   <br />
                   <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe6bFcvoxY3I81oRlVymo4HMyDbQG5ozjMXe08xSgYaVQr4uHgoA "/>
    <br />
    <br />
                    <Link to='/Company'>  <mat.FlatButton type="submit " label="Company" primary={true} /></Link>
                     </mat.Paper>
                     <mat.Paper style={style2} zDepth={0} rounded={false}>
                      <h2> Admin Panel </h2>
                              <br />
                              <img src = "http://www.freeiconspng.com/uploads/control-panel-icon-png-20.png"/> <br />

                    <Link to ='/login' ><mat.FlatButton type="submit" label="Admin" primary={true} /></Link>
                     </mat.Paper>
                     
                     
                    
                    
                </div>
            </div>
        );
    }
}

export default Dashboard;