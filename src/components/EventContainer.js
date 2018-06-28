import React from 'react';
import {Text, View} from 'react-native';

const EventContainer = (props)=>{
  const styles = {
    containerStyle:{
      borderWidth:1,
      borderRadius:2,
      borderColor:'#ddd',
      borderBottomWidth:0,
      shadowColor:'#000',
      shadowOffset:{width:0,Height:2},
      shadowOpacity:0.1,
      shadowRadius:2,
      elevation:1,
      marginLeft:5,
      marginRight:5,
      marginTop:10
    }
  }

  return(
        <View style={styles.containerStyle}>
          {/* must manually tell the card component that it is responsible for rendering anything within its brackets ie its children*/}
            {props.children}
        </View>
  );

};



export default EventContainer;
