import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';
import {connect} from 'react-redux';
import Button from './Button';
import EventContainer from './EventContainer';
import EventSection from './EventSection';
import Input from './Input';
import Spinner from './Spinner';
import {emailChanged, passwordChanged, loginUser, resetError} from './actions/actions';


//redux
//1. user types something
//2. call onEmilChanged handler from input field to create a new actions
//3. returns a new action object with a payload and types
//4. newly returned action will be sent to all reducers

class Login extends Component{

  onEmailChanged(text){
      this.props.emailChanged(text);
  }

  onPasswordChange(password){
      //call action creator from actions file
      this.props.passwordChanged(password);
  }

  onButtonPress(){
    this.props.loginUser(this.props.email, this.props.password);
  }
  componentWillMount(){
    console.log("IN WILL MOUNT");
    this.props.resetError();
  }

  renderError(){
    if(this.props.error){
      return(
        <View>
          <Text> {this.props.error}</Text>
        </View>
      )
    }
  }


  renderButton(){
    if(this.props.loading){
      return <Spinner size="large" />;
    }
    else {
      return(
          <Button title ="Login" onPress={this.onButtonPress.bind(this)} />
      );

    }
  }

  render() {
    console.log("PROPS Email", this.props.email);
    console.log("PROPS Password", this.props.password);
                return (

                      <EventContainer >

                                <EventSection>
                                    <Input
                                      placeholder="user@gmail.com"
                                      label="Email"
                                      onChangeText={this.onEmailChanged.bind(this)}
                                      value={this.props.email}
                                    />
                                </EventSection>


                                <EventSection>
                                  <Input
                                    secureTextEntry
                                    placeholder="Password"
                                    label="Password"
                                    onChangeText={this.onPasswordChange.bind(this)}
                                    value={this.props.password}
                                  />
                                </EventSection>

                              {this.renderError()}
                                <EventSection>
                                  {this.renderButton()}

                                </EventSection>

                      </EventContainer>

                );
      }

}//end class

const mapStateToProps = state =>{
  console.log("Email:", state.auth.email);
    console.log("Password:", state.auth.password);
    console.log("ERROR", state.auth.error);
  return{
    email:state.auth.email,
    password:state.auth.password,
    error:state.auth.error,
    loading:state.auth.loading
  };
}


export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser, resetError })(Login);
