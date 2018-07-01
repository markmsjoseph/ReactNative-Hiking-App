import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, Image} from 'react-native';
import EventContainer from './EventContainer';
import EventSection from './EventSection';
import Button from './Button';
import Input from './Input';
import {hikeUpdate, eventCreate} from './actions/hikeActions';


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

class HikeCreate extends Component{


  onHikeNameChange(text){
    this.props.hikeUpdate({prop:'name', value:text});
  }

  onHikeDescriptionChange(text){
    this.props.hikeUpdate({prop:'description', value:text});
  }

  onButtonPress(){
    this.props.eventCreate(this.props.name, this.props.description);
  }

    render(){
      console.log(this.props.hike);

              return(
                <EventContainer>

                  <EventSection>
                      <Input
                        placeholder="Avocat Falls Hike"
                        label="Event Name"
                        value={this.props.name}
                        onChangeText={this.onHikeNameChange.bind(this)}
                      />
                  </EventSection>

                  <EventSection>
                      <Input
                        placeholder="Event details..."
                        label="Description "
                        value={this.props.description}
                        onChangeText={this.onHikeDescriptionChange.bind(this)}
                      />
                  </EventSection>




                        <EventSection>
                              <Button title="Create Hike Event" onPress={this.onButtonPress.bind(this)}/>
                        </EventSection>
                </EventContainer>

              );
    }

}//end class
//made to pull stuff off of the hikeupdate piece of state
const mapStateToProps = state =>{

  return{
    name:state.hikeForm.name,
    description:state.hikeForm.description
  };
}

export default connect(mapStateToProps, {hikeUpdate, eventCreate})(HikeCreate);
