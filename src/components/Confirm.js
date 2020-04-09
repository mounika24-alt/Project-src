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
        

        this.props.nextStep();
    }
    render() {
        // const {values:{firstName,email,mobileNumber,education,parentsMobile,linkedIn,selected1,selected2,selected3,track,project,intern}}=this.props;
        const {values:{firstName,email,mobileNumber,education,parentsMobile,linkedIn,selected1,selected2,selected3,track,project,intern}}=this.props;

        axios
        .post('http://localhost:3001/Confirm')
        .then(() => console.log('Book Created'))
        .catch(err => {
          console.error(err);
        });
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
        primaryText="email"
        secondaryText={email}
    />
    <ListItem
        primaryText="mobileNumber"
        secondaryText={mobileNumber}
    />
    <ListItem
        primaryText="education"
        secondaryText={education}
    />
    <ListItem
        primaryText="parentsMobile"
        secondaryText={parentsMobile}
    />
    <ListItem
        primaryText="linkedIn"
        secondaryText={linkedIn}
    />
     <ListItem
        primaryText="radiobutton1"
        secondaryText={selected1}
    />
     <ListItem
        primaryText="radiobutton1"
        secondaryText={selected2}
    />
     <ListItem
        primaryText="radiobutton1"
        secondaryText={selected3}
    />
     <ListItem
        primaryText="track"
        secondaryText={track}
    />
     <ListItem
        primaryText="project"
        secondaryText={project}
    />
     <ListItem
        primaryText="intern"
        secondaryText={intern}
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
