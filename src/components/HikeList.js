import React, {Component} from 'react';
import _ from 'lodash';
import {Text, ListView, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import HikeEventDetails from './HikeEventDetails';
import {eventFetch} from './actions/hikeActions';
import ListItem from './ListItem';


class HikeList extends Component{


      //on mount we get the data and set it to the state. axiosis asyncronous
      componentWillMount(){
        this.props.eventFetch();
        this.createDataSource(this.props);
      }

      componentWillReceiveProps(nextProps){
          this.createDataSource(nextProps);
      }

      createDataSource({hikes}){
        const ds = new ListView.DataSource({
          rowHasChanged:(r1,r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(hikes);
      }

      renderRow(hike){
        return <ListItem hike={hike} />;
      }

      render(){
                return(
                  <ListView
                    enableEmptySections
                    dataSource = {this.dataSource}
                    renderRow={this.renderRow}
                  />
                );
      }

}//end class

const mapStateToProps = state =>{
  //state.hikes is an object with may key val pairs,
  //for each key val pair run map, and put the objects into an array
  //vid 148
  const hikes = _.map(state.hikes, (val, uid) =>{
    return {...val, uid}
  });
  return {hikes};
};


export default connect(mapStateToProps,{eventFetch}) (HikeList);
