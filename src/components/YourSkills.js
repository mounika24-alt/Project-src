import React, { Component } from 'react';
 import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
 import AppBar from 'material-ui/AppBar';   import TextField from 'material-ui/TextField';
 import RaisedButton from 'material-ui/RaisedButton';
 import BeautyStars from "beauty-stars";
 import { RadioGroup, RadioButton,ReversedRadioButton } from 'react-radio-buttons'

 import { FormControl,FormControlLabel,FormLabel,Radio } from '@material-ui/core';
import ReactRadioGroup from 'react-simple-radio-button'
export class YourSkills extends React.Component {
  // state = { selected1: "", 
  // selected2: "", 
  // selected3: ""};
  // handleChange1 = ev => {
  //   this.setState({ selected1: ev.target.value });
  // };
  // handleChange2 = ev => {
  //   this.setState({ selected2: ev.target.value });
  // };
  // handleChange3 = ev => {
  //   this.setState({ selected3: ev.target.value });
  // };
      continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
  render() {
    
    const { values, handleChange1,handleChange2,handleChange3 } = this.props;
    return (
      <MuiThemeProvider>
      <React.Fragment>
         <AppBar title="Rate Your Skills" />
 <p >1) How would you rate your experience and knowledge of eLearning Platforms?</p>
      <FormControl >
        <RadioGroup onChange={handleChange1('selected1')} defaultValue={values.selected1}>
          <FormControlLabel value="Extremelypoor" control={<Radio />} label="Extremely poor"/>
          <FormControlLabel value="poor" control={<Radio />} label="Poor" />
          <FormControlLabel value="Good" control={<Radio />} label="Good"/>
          <FormControlLabel value="Very Good" control={<Radio />} label="Verygood"/>
          <FormControlLabel value="Excellent" control={<Radio />} label="Excellent"/>
        </RadioGroup>
        {/* { "Selected: " } {selected1} */}
      </FormControl>
      <p>2) And how would you rate your creativity and ability to find innovative solutions?</p>
      <FormControl >
        <RadioGroup onChange={handleChange2('selected2')} defaultValue={values.selected2}>
          <FormControlLabel value="Extremelypoor" control={<Radio />} label="Extremely poor"/>
          <FormControlLabel value="poor" control={<Radio />} label="Poor" />
          <FormControlLabel value="Good" control={<Radio />} label="Good"/>
          <FormControlLabel value="Very Good" control={<Radio />} label="Verygood"/>
          <FormControlLabel value="Excellent" control={<Radio />} label="Excellent"/>
        </RadioGroup>
        {/* { "Selected: " } {selected2} */}
      </FormControl>

      <p>3) What about your ability to get things done quickly?</p>
      <FormControl >
        <RadioGroup onChange={handleChange3('selected3')} defaultValue={values.selected3}>
          <FormControlLabel value="Extremelypoor" control={<Radio />} label="Extremely poor"/>
          <FormControlLabel value="poor" control={<Radio />} label="Poor" />
          <FormControlLabel value="Good" control={<Radio />} label="Good"/>
          <FormControlLabel value="Very Good" control={<Radio />} label="Verygood"/>
          <FormControlLabel value="Excellent" control={<Radio />} label="Excellent"/>
        </RadioGroup>
        {/* { "Selected: " } {selected3} */}
      </FormControl>
      {/*  */}
      <br/>
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

                  
export default YourSkills