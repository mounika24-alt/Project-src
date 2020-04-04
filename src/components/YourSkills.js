import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
  import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import BeautyStars from "beauty-stars";
import { RadioGroup, RadioButton,ReversedRadioButton } from 'react-radio-buttons'

export class YourSkills extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    state = { value: 0 ,val2:0,val3:0,};
    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Rate Your Skills" />
                  
                    <p >  

                        
How would you rate your experience and knowledge of eLearning Platforms? 

</p>
<RadioGroup onChange={ this.onChange } horizontal>
  <RadioButton value="apple">
   Extremely poor
  </RadioButton>
  <RadioButton value="apple">
  Poor
  </RadioButton>
  <RadioButton value="orange">
    Good
  </RadioButton>
  <RadioButton value="melon">
   Very Good
  </RadioButton>
  <ReversedRadioButton value="melon">
    Excellent
  </ReversedRadioButton>
</RadioGroup>
                    
               
                   
                    <br />
<p>And how would you rate your creativity and ability to find innovative solutions?</p>
                   
<RadioGroup horizontal>
  <RadioButton  onChange={handleChange('f')}
    defaultValue={values.f}>
   Extremely poor
  </RadioButton>
  <RadioButton onChange={handleChange('s')}
    defaultValue={values.s}>
  Poor
  </RadioButton>
  <RadioButton onChange={handleChange('t')}
    defaultValue={values.t}>
    Good
  </RadioButton>
  <RadioButton onChange={handleChange('fo')}
    defaultValue={values.fo}>
   Very Good
  </RadioButton>
  <ReversedRadioButton onChange={handleChange('fi')}
    defaultValue={values.fi}>
    Excellent
  </ReversedRadioButton>
</RadioGroup>

                    <br />

                    <p>What about your ability to get things done quickly?</p>
                   
<RadioGroup onChange={ this.onChange } horizontal>
  <RadioButton value="apple">
   Extremely poor
  </RadioButton>
  <RadioButton value="apple">
  Poor
  </RadioButton>
  <RadioButton value="orange">
    Good
  </RadioButton>
  <RadioButton value="melon">
   Very Good
  </RadioButton>
  <ReversedRadioButton value="melon">
    Excellent
  </ReversedRadioButton>
</RadioGroup>


                
                   

       
                   
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
    button: {
        margin: 15

    }
}

export default YourSkills
