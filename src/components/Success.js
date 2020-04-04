import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


export class Success extends Component {
 
    render() {
        // const {values:{firstName,email,mobileNumber,education,parentsMobile,linkedIn,f,s,t,fo,fi,track,project,intern}}=this.props;
      
        return (
            <MuiThemeProvider>
<React.Fragment>
    <AppBar title="Success" />
<h1>Thank you for submitting your details</h1>
 
</React.Fragment>

            </MuiThemeProvider>
           
        );
    }
}


export default Success

