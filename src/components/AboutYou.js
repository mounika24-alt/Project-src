import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class AboutYou extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const {values, handleChange}=this.props;
      
        return (
            <MuiThemeProvider>
<React.Fragment>
    <AppBar title="Enter Your Details" />
    <TextField 
    hintText="Enter Your Name"
    floatingLabelText="Name"
    onChange={handleChange('firstName')}
    defaultValue={values.firstName}
    />
   <br/>
  
   <TextField 
    hintText="Enter Your MailId" 
    floatingLabelText="MailID" 
    onChange={handleChange('email')}
    defaultValue={values.email}
    />
  
  <br />
<TextField 
    hintText="Enter Mobile Number"
    floatingLabelText="MobileNumber"
    onChange={handleChange('mobileNumber')}
    defaultValue={values.mobileNumber}
    />
    <br />

    <TextField 
    hintText="what is school or college name?"
    floatingLabelText="Education"
    onChange={handleChange('education')}
    defaultValue={values.education}
    />
<br />
<TextField 
    hintText="Parents mobileno if  in highschool"
    floatingLabelText="ParentsMobileNumber"
    onChange={handleChange('parentsMobile')}
    defaultValue={values.parentsMobile}
    />
<br />
<TextField 
    hintText="Enter LinkedIn profile link"
    floatingLabelText="LinkedIn Details"
    onChange={handleChange('linkedIn')}
    defaultValue={values.linkedIn}
    />
    <br />
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

export default AboutYou
