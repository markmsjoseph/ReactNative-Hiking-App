import React, {Component} from 'react';
import {TextInput, Text} from 'react-native';
import Button from './Button';
import EventContainer from './EventContainer';
import EventSection from './EventSection';
import Input from './Input';


class Register extends Component{

  state={
    email: '',
    password:''
  };




  render() {
                return(

                      <EventContainer >

                                <EventSection>
                                    <Input
                                      placeholder="user@gmail.com"
                                      label="Email"
                                      value={this.state.text}
                                      onChangeText={ (email)=>{this.setState({email})}}
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


                                <EventSection>
                                  <Button title="Register" />
                                </EventSection>

                      </EventContainer>

                );
      }

}//end class


export default Register;
