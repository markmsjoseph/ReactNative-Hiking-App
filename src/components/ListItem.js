import React, {Component} from 'react';
import {Text, ListView, ScrollView} from 'react-native';
import EventContainer from './EventContainer';
import EventSection from './EventSection';

class ListItem extends Component{

  render(){
    console.log("EVENT:", this.props.hike);
    return(
      <EventSection>
        <Text>
          {this.props.hike.name}
        </Text>
      </EventSection>
    )
  }
}
