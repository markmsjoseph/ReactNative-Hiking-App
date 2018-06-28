import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Input = (props)=>{
  const styles = {
    inputStyle:{
      color: '#000',
      paddingRight:5,
      paddingLeft:5,
      fontSize:18,
      lineHeight:23,
      flex:2
    },
    labelStyle :{
      paddingLeft:20,
      fontSize:18,
      flex:1
    },
    containerStyle:{
      height:40,
      flex:1,
      flexDirection:'row',
      alignItems:'center'
    }
  }

  return(
        <View style={styles.containerStyle}>
          <Text style={styles.labelStyle}>{props.label}</Text>
          <TextInput
            secureTextEntry={props.secureTextEntry}
            placeholder={props.placeholder}
            autoCorrect={false}
            style={styles.inputStyle}
            value={props.value}
            onChangeText= {props.onChangeText}/>
        </View>
  );

};



export default Input;
