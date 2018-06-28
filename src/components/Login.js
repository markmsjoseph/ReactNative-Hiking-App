import React, {Component} from 'react';
import {TextInput, Text} from 'react-native';
import firebase from 'firebase';
import Button from './Button';
import EventContainer from './EventContainer';
import EventSection from './EventSection';
import Input from './Input';


class Login extends Component{

  state={
    email: '',
    password: '',
    error: ''
  };

  onLoginPressed() {
    console.log('LOGIN PRESSED AUTHENTICATING....');
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .catch(() => {
      console.log('SOmething wrong');
      this.setState({ error: 'No User Creating user..' });
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(() => {
        console.log('Another thing wrong');
        this.setState({ error: 'Incorrect Password' });
      });
    });
    console.log('DONE');
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

                                  <Button title="Login" onPress={this.onLoginPressed.bind(this)} />
                                </EventSection>

                      </EventContainer>

                );
      }

}//end class


export default Login;
