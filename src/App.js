import React,{Component} from 'react';
import {UserForm} from './components/UserForm'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormControl from 'react-bootstrap/lib/FormControl';
 class  App extends Component {
  render(){
return(
  <div className="App">
      <UserForm />
  </div>
)
  }
}
export default App




