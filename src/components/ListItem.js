import React, {Component} from 'react';
import {Text, ListView, View} from 'react-native';
import EventContainer from './EventContainer';
import EventSection from './EventSection';

class ListItem extends Component{

  render(){
    console.log("In List ITEM:", this.props.hike);
    return(
        <View>
      <EventSection>
        <Text style={styles.titleStyle}>
          {this.props.hike.name}
        </Text>
      </EventSection>
    </View>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};


export default ListItem;
