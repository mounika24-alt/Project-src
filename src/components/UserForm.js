import React, { Component } from 'react'
import AboutYou from './AboutYou';
import YourSkills from './YourSkills';
import Wowthings from './Wowthings';
import Confirm from './Confirm';
import Success from './Success'
export class UserForm extends Component {
    state ={
        step: 1,
        firstName:'',
        email:'',
        mobileNumber:'',
        education:'',
        parentsMobile:'',
        linkedIn:'',
        f:'',
        s:'',
        t:'',
        fo:'',
        fi:'',
        track:'',
        project:'',
        intern:'',

    }

    //proceed to next step
    nextStep = () =>{
        const {step}= this.state;
        this.setState({
         step : step + 1
        });
    }

      //go back to previous step
      prevStep = () =>{
        const {step}= this.state;
        this.setState({
         step : step - 1
        });
    }

    //handle field change
handleChange = input => e =>{
    this.setState({[input]:e.target.value});
}

    render() {
        const { step} =this.state;
        const {firstName,email,mobileNumber,education,parentsMobile,linkedIn,f,s,t,fo,fi,track,project,intern}=this.state;
        const values = {firstName,email,mobileNumber,education,parentsMobile,linkedIn,f,s,t,fo,fi,track,project,intern}
      switch(step){
          case 1:
              return (
                  <AboutYou
                      nextStep={this.nextStep}
                      handleChange={this.handleChange}
                      values={values}
                  />
                );
                     case 2:
                        return(
                             <YourSkills
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}/>
                        );
                        
                        case 3:
                            return(
                                <Wowthings
                           nextStep={this.nextStep}
                           prevStep={this.prevStep}
                           handleChange={this.handleChange}
                           values={values}/>
                           );
                            case 4:
                                return(
                                    <Confirm
                                nextStep={this.nextStep}
                                prevStep={this.prevStep}
                               
                                values={values}/>
                                );
                                case 5:
                                    return <Success />
    }    
      }
    }


export default UserForm
