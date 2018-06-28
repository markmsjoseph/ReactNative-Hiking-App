import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './Login';
import Register from './Register';
import LoginRegister from './LoginRegister';

  const RouterComponent = () => {
    return (
          <Router>
            <Scene key="root">
              <Scene key="LoginRegister" component={LoginRegister} title="Login or Register" />
              <Scene key="login" component={Login} title="Please Login" />
              <Scene key="register" component={Register} title="Register" />
            </Scene>
          </Router>
    );
  };


export default RouterComponent;
