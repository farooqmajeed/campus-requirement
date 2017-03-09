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
            height: 500,
            width: 450,
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
            width: 450,
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
                
                <h1>  my name is Farooq </h1>
                    <mat.Paper style={style} zDepth={5} rounded={false}>
                      <h2> student Access</h2>
                           <br />
                              <br />

                    <Link to='/student'> <mat.FlatButton type="submit" label="Submit" primary={true} /></Link>

                     </mat.Paper>

                      <mat.Paper style={style} zDepth={5} rounded={false}>
                       <h2> Company Access</h2>
                       <br />
                              <br />

                    <Link to='/Company'>  <mat.FlatButton type="submit" label="Submit" primary={true} /></Link>
                     </mat.Paper>
                     <mat.Paper style={style2} zDepth={5} rounded={false}>
                      <h2> Admin Panel </h2>
                               <br />
                              <br />

                     <mat.FlatButton type="submit" label="Submit" primary={true} />
                     </mat.Paper>
                     
                     
                    
                    
                </div>
            </div>
        );
    }
}

export default Dashboard;