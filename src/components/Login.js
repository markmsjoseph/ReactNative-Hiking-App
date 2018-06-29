import React, {Component} from 'react';
import {TextInput, Text} from 'react-native';
import firebase from 'firebase';
import Button from './Button';
import EventContainer from './EventContainer';
import EventSection from './EventSection';
import Input from './Input';
import Spinner from './Spinner';


class Login extends Component{

  state={
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onLoginPressed() {

    this.setState({ error: '', loading: true });
//.then is executed only if everything works out
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(this.onLoginSuccess.bind(this))
    .catch(() => {
      this.setState({ error: 'No User Creating user..', loading:false });
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        this.setState({ error: 'Incorrect Password', loading:false });
      });
    });
    console.log('DONE');
  }

onLoginSuccess(){
  this.setState({
    email:'',
    password:'',
    loading:false,
    error:''
  });
}

  renderButton(){
      if(this.state.loading){
        return <Spinner size="large"/>
      }
      else{
        return(
            <Button title="Login" onPress={this.onLoginPressed.bind(this)} />
        )
      }
}


  render() {
                return (

                      <EventContainer >

                                <EventSection>
                                    <Input
                                      placeholder="user@gmail.com"
                                      label="Email"
                                      value={this.state.text}
                                      onChangeText={(email) => {this.setState({email})}}
                                    />
                                </EventSection>


                                <EventSection>
                                  <Input
                                    secureTextEntry
                                    placeholder="Password"
                                    label="Password"
                                    value={this.state.password}
                                      onChangeText={ (password)=>{this.setState({password})}}
                                  />
                                </EventSection>

                                  <Text>{this.state.error}</Text>
                                <EventSection>
                                    {this.renderButton()}

                                </EventSection>

                      </EventContainer>

                );
      }

}//end class


export default Login;
