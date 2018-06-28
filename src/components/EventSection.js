import React from 'react';
import {Text, View} from 'react-native';

const EventSection = (props)=>{
  const styles = {
    containerStyle:{
      borderBottomWidth:1,
      padding:5,
      backgroundColor:'#fff',
      justifyContent:'flex-start',
      flexDirection:'row',
      borderColor:'#ddd',
      position:'relative'
    }
  }
  //flexbox vid 
  return(
        <View style={styles.containerStyle}>
          {/* must manually tell the card component that it is responsible for rendering anything within its brackets ie its children*/}
            {props.children}
        </View>
  );

};



export default EventSection;
