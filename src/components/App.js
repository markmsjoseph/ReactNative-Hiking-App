import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers/CombineReducers';
import LoginForm from './LoginForm';


class App extends Component{

  componentWillMount(){
    firebase.initializeApp({
                               apiKey: "AIzaSyAL4SdKbiX7LtLUjVw65m0XOURF1FaVgAU",
                               authDomain: "hike-app-fc99b.firebaseapp.com",
                              databaseURL: "https://hike-app-fc99b.firebaseio.com",
                               projectId: "hike-app-fc99b",
                               storageBucket: "hike-app-fc99b.appspot.com",
                               messagingSenderId: "503379251321"
      });
}

  render(){

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store= {store}>
          <LoginForm />
      </Provider>
    );
  }


};



export default App;
