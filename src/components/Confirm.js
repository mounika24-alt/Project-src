import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import axios from "axios";

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        //process form//
        axios.get('http://localhost:3000/')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error.response);
    console.log(error.response.data);
    console.log(error.message)
  });

        this.props.nextStep();
    }
    render() {
        const {values:{firstName,email,mobileNumber,education,parentsMobile,linkedIn,f,s,t,fo,fi,track,project,intern}}=this.props;
      
        return (
            <MuiThemeProvider>
<React.Fragment>
    <AppBar title="Confirm User Data" />
<List>
    <ListItem
        primaryText="First Name"
        secondaryText={firstName}
    />
      <ListItem
        primaryText="rate"
        secondaryText={f}
    />
  
</List>
    <RaisedButton 
    label="Continue"
    primary={true}
    style={styles.button}
    onClick={this.continue}
    />
 
</React.Fragment>

            </MuiThemeProvider>
           
        );
    }
}
const styles = {
    button :{
        margin: 15

    }
}

export default Confirm
