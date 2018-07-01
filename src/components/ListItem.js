import React, {Component} from 'react';
import {Text, ListView, View, TouchableWithoutFeedback} from 'react-native';
import EventContainer from './EventContainer';
import EventSection from './EventSection';
import {Actions} from 'react-native-router-flux';

class ListItem extends Component{
  onRowPress(){
    console.log("Row Pressed");
    Actions.createHike({hike: this.props.hike});
  }

  render(){
    return(
        <TouchableWithoutFeedback onPress ={this.onRowPress.bind(this)}>
          <View>
              <EventSection>
                <Text style={styles.titleStyle}>
                  {this.props.hike.name}
                </Text>
              </EventSection>
          </View>
        </TouchableWithoutFeedback>
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
