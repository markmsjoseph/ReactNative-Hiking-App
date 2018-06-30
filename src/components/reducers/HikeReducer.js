import {HIKE_FETCH_SUCCESS} from '../actions/types';


//this is to let other ppl known what this reducer is responsible for
const INITIAL_STATE = {
};

//in order to deal with the different actions, our reducer takes in 2 arguments, a state and an action
export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    //key interpolation
    case HIKE_FETCH_SUCCESS:
      console.log("IN HIKE_FETCH_SUCCESS: ", action.payload);
    //create new key value pair where key is id and value is everything
      return action.payload;

    default:
      return state;
  }
};
