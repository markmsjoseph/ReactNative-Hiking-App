import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER, REGISTER_USER, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS, RESET_ERROR} from '../actions/types';


//this is to let other ppl known what this reducer is responsible for
const INITIAL_STATE = {
  email:'',
  password:'',
  user:null,
  error:'',
  loading:false

};

//in order to deal with the different actions, our reducer takes in 2 arguments, a state and an action
export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    //if the action is of type EMAILCHANGED then we update the state.
    //NOTE we must return a new state object and not mutate it therefore we get the old state and add on the payload
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case RESET_ERROR:
      return { INITIAL_STATE};

    //user is loggin in so we want to show the spinner and clear any error messages
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };

    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
      //login failed therefore we set an error message and stop the spinner from loading
    case LOGIN_USER_FAIL:
    console.log("USER FAIL");
      return { ...state, error: 'Password incorrect or user doesnt exist', password: '', loading: false };



    case REGISTER_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
      //login failed therefore we set an error message and stop the spinner from loading
    case REGISTER_USER_FAIL:
    console.log("REGISTER FAIL");
      return { ...state, error: 'Registration fail. Username already exist or you entered an invalid email', password: '', loading: false };

    case REGISTER_USER:
      return { ...state, loading: true, error: '' };




      //there were no matching actions
    default:
      return state;
  }
};
