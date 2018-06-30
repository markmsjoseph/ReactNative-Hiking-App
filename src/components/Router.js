import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './LoginForm';
import Register from './Register';
import LoginRegister from './LoginRegister';
import HikeList from './HikeList';
import HikeCreate from './HikeCreate';
import {Actions} from 'react-native-router-flux';

  const RouterComponent = () => {
    return (
          <Router>
            <Scene key="root" hideNavBar>

              <Scene key = "auth">
                <Scene key="login" component={LoginForm} title="Please Login" />
              </Scene>

              <Scene key="main" rightTitle="Add" onRight={()=>{Actions.createHike()}}>
                  <Scene key="hikeList" component={HikeList} title="List of all hikes" />
                    <Scene key="createHike" component={HikeCreate} title="Create Event" />
              </Scene>

            </Scene>
          </Router>
    );
  };


export default RouterComponent;


{/* <Scene key="loginRegister" component={LoginRegister} title="Login or Register" />
<Scene key="register" component={Register} title="Please Register" /> */}
