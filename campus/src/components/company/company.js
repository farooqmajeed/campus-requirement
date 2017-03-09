import React, { Component } from 'react';

import * as mat from 'material-ui';
import firebase from 'firebase';
 
class CompanyList extends Component {
   constructor(){
       super();

       this.state = {
           compony : []
       }
   }
    
    componentWillMount(){
        var compony = [];

        firebase.database().ref('/newCompany/').on('value', (date) => {
            let obj = date.val();

            for(var prop in obj){
                compony.push(obj[prop].companyList);
                console.log(obj[prop]);
                this.setState({
                    compony: compony
                })
                console.log(this.state.compony);

            }
        })
    }
   
   render() {
        return (
            <div >
                <h1>Missing Persons Report </h1>
             
                                 
                      <mat.Table>
    <mat.TableHeader>
      <mat.TableRow>
           <mat.TableHeaderColumn>Full Name  </mat.TableHeaderColumn>
            <mat.TableHeaderColumn>Mobile </mat.TableHeaderColumn>   
        <mat.TableHeaderColumn>Age </mat.TableHeaderColumn>
        <mat.TableHeaderColumn>Address </mat.TableHeaderColumn> 
       
       
       
      </mat.TableRow>
    </mat.TableHeader>
  </mat.Table>
  

{this.state.compony.map((z,i)=>{
                    return(
                        
                      <mat.Table>

    <mat.TableBody>
      <mat.TableRow>
            <mat.TableRowColumn>{z.fullname}</mat.TableRowColumn>
              <mat.TableRowColumn>{z.mobile}</mat.TableRowColumn>
        <mat.TableRowColumn>{z.age}</mat.TableRowColumn>
        <mat.TableRowColumn>{z.address}</mat.TableRowColumn>
      
      
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

export default CompanyList;