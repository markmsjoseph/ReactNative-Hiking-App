import {HIKE_UPDATE, HIKE_CREATE, HIKE_FETCH_SUCCESS} from './types'
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const hikeUpdate = ({prop, value}) =>{
  return{
    type:HIKE_UPDATE,
    payload:{prop,value}
  }

};

export const eventCreate = (name, description) =>{

  const currentUser = firebase.auth().currentUser;
    return (dispatch)=>{
        //make a ref to the database and the current user's events
        firebase.database().ref(`/users/${currentUser.uid}/events`)
        .push({name, description})
        .then(()=>{
          console.log("IN THEN IN HIKE CREATE");
            dispatch({type:HIKE_CREATE})
           Actions.pop()
         });
    }

}


export const eventFetch = (name, description) =>{
  const currentUser = firebase.auth().currentUser;
    return (dispatch)=>{
        //make a ref to the database and the current user's events
        firebase.database().ref(`/users/${currentUser.uid}/events`)
        //any data that comes back, call function with data that comes back(spapshot)
        .on('value', snapshot =>{
          dispatch({type:HIKE_FETCH_SUCCESS, payload:snapshot.val()})
        });
    }
}
