import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import HikeEventDetails from './HikeEventDetails';
import axios from 'axios';

class HikeList extends Component{


      // //on mount we get the data and set it to the state. axiosis asyncronous
      // componentWillMount(){
      //   axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response=> this.setState({hikeEvent:response.data}));
      // }

      //render data to screen
      // renderData(){
      //       return this.state.hikeEvent.map((hike) =>{
      //             return <HikeEventDetails key ={hike.title} hike={hike}/>
      //       });
      // }

      render(){
                return(
                      <ScrollView >

                      <Text>LIST</Text>
                        <Text>LIST</Text>
                          <Text>LIST</Text>
                            <Text>LIST</Text>
                              <Text>LIST</Text>
                      </ScrollView>
                );
      }

}//end class


export default HikeList;
