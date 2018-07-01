import firebase from 'firebase';
import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL, RESET_ERROR} from './types';
import {Actions} from 'react-native-router-flux';

//NOTE actions must return a type, payload is the data contained in it eg the textinput

//if the email is entered, we return an actiontype of EMAILCHANGED and the payload is the text
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};


export const resetError = () => {
  console.log("RESETTING ERROE");
  return {
    type: RESET_ERROR
  };
};


//login in user with firebase
export const loginUser = (email, password ) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
       loginUserFail(dispatch)
      });
  };
};


const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  //navigate user to this page, main is the key in router file
  Actions.main();
};




//login in user with firebase
export const registerUser = (email, password ) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER });

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => registerUserSuccess(dispatch, user))
          .catch(() => registerUserFail(dispatch));

  };
};

const registerUserSuccess = (dispatch, user) => {
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: user
  });
  //navigate user to this page, main is the key in router file
  Actions.main();
};

const registerUserFail = (dispatch) => {
  dispatch({ type: REGISTER_USER_FAIL });
};
