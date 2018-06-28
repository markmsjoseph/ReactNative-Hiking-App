import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import EventContainer from './EventContainer';
import EventSection from './EventSection';
import Button from './Button';


const styles = {
  headerContentStyles:{
        flexDirection: 'column',
        justifyContent: 'space-around'
  },
  thumbnailStyle:{
    height:50,
    width:50
  },
  thumbnailContainerStyle:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
    marginRight:10
  },
  headerTextStyle:{
    fontSize:18
  },
  imageStyle:{
    height:300,
    flex:1,
    width:null

  }

}

class HikeEventDetails extends Component{


    constructor(props) {
        super(props);

    }

    render(){

              return(
                <EventContainer>

                        <EventSection>
                              <View style={styles.thumbnailContainerStyle}>
                                  <Image style={styles.thumbnailStyle} source={{uri:this.props.hike.thumbnail_image}} />
                              </View>
                              <View style={styles.headerContentStyles}>
                                    <Text style={styles.headerTextStyle}>{this.props.hike.title}</Text>
                                    <Text >{this.props.hike.artist}</Text>
                              </View>
                        </EventSection>

                        <EventSection>
                              <Image source={{uri:this.props.hike.image}} style={styles.imageStyle}/>
                        </EventSection>
                        <EventSection>
                              <Button title="click me" />
                        </EventSection>
                </EventContainer>

              );
    }

}//end class


export default HikeEventDetails;
