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

                <h1> Available Jobs for Student </h1>
             
                                 
                      <mat.Table>
    <mat.TableHeader>
      <mat.TableRow>
           <mat.TableHeaderColumn><h2>Company Name </h2></mat.TableHeaderColumn>
            <mat.TableHeaderColumn><h2>Phone number of Company </h2></mat.TableHeaderColumn>   
        <mat.TableHeaderColumn><h2>Age Required for Job</h2></mat.TableHeaderColumn>
        <mat.TableHeaderColumn><h2>Location of a Company</h2></mat.TableHeaderColumn> 
       
       
       
      </mat.TableRow>
    </mat.TableHeader>
  </mat.Table>
  

{this.state.compony.map((z,i)=>{
                    return(
                        
                      <mat.Table>

    <mat.TableBody>
      <mat.TableRow>
            <mat.TableRowColumn><h2>{z.fullname}</h2></mat.TableRowColumn>
              <mat.TableRowColumn><h2>{z.mobile}</h2></mat.TableRowColumn>
        <mat.TableRowColumn><h2>{z.age}</h2></mat.TableRowColumn>
        <mat.TableRowColumn><h2>{z.address}</h2></mat.TableRowColumn>
      
      
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