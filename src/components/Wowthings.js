import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class Wowthings extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
  
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
<React.Fragment>
    <AppBar title="Wow Things" />
    <TextField 
    // hintText="Enter Your Name"
    floatingLabelText="Why you selected this track?"
    onChange={handleChange('track')}
    defaultValue={values.track}
    />
   <br/>
  
   <TextField 
    // hintText="Enter Your MailId" 
    floatingLabelText="Your best project till date?" 
    onChange={handleChange('project')}
    defaultValue={values.project}
    />
  
  <br />
<TextField 
    // hintText="Enter Mobile Number"
    floatingLabelText="Why intern with us?"
    onChange={handleChange('intern')}
    defaultValue={values.intern}
    />
    <br />

    
    <RaisedButton 
    label="Continue"
    primary={true}
    style={styles.button}
    onClick={this.continue}
    />
  <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
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

export default Wowthings