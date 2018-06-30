import {HIKE_UPDATE} from './types'

export const hikeUpdate = ({prop, value}) =>{
  return{
    type:HIKE_UPDATE,
    payload:{prop,value}
  }

};
