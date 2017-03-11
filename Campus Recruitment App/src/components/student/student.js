import React, { Component } from 'react';

import * as mat from 'material-ui';
import firebase from 'firebase';
 
class StudentData extends Component {
   constructor(){
       super();

       this.state = {
           donors : []
       }
   }
    
    componentWillMount(){
        var donors = [];

        firebase.database().ref('/newStudent/').on('value', (date) => {
            let obj = date.val();

            for(var prop in obj){
                donors.push(obj[prop].student);
                console.log(obj[prop]);
                this.setState({
                    donors: donors
                })
                console.log(this.state.donors);

            }
        })
    }
   
   render() {
        return (
            <div >
                <centre>
                <h1>  Available Candidate </h1>
             </centre>  
                                 
                      <mat.Table>
    <mat.TableHeader>
      <mat.TableRow>
           <mat.TableHeaderColumn> <h2>Full Name</h2>  </mat.TableHeaderColumn>
            <mat.TableHeaderColumn>  <h2>Mobile</h2>  </mat.TableHeaderColumn>   
        <mat.TableHeaderColumn> <h2>Age </h2> </mat.TableHeaderColumn>
        <mat.TableHeaderColumn><h2>Address</h2>  </mat.TableHeaderColumn> 
       
       
       
      </mat.TableRow>
    </mat.TableHeader>
  </mat.Table>
  

{this.state.donors.map((z,i)=>{
                    return(
                        
                      <mat.Table>

    <mat.TableBody>
      <mat.TableRow>
            <mat.TableRowColumn><h2>{z.fullname}</h2> </mat.TableRowColumn>
              <mat.TableRowColumn><h2>{z.mobile}</h2> </mat.TableRowColumn>
        <mat.TableRowColumn><h2>{z.age}</h2> </mat.TableRowColumn>
        <mat.TableRowColumn><h2>{z.address}</h2> </mat.TableRowColumn>
      
      
      </mat.TableRow>
    </mat.TableBody>
  </mat.Table>
  
  
  )
                })
                  
                }

            </div>
        );
    }
}

export default StudentData;