import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import BuildingList from './components/BuildingList';
import BuildingCreate from './components/BuildingCreate';
import BuildingEdit from './components/BuildingEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.buildingCreate()}
            key="buildingList"
            component={BuildingList}
            title="Buildings"
            initial
          />
          <Scene
            key="buildingCreate"
            component={BuildingCreate}
            title="Create Building"
          />
          <Scene
            key="buildingEdit"
            component={BuildingEdit}
            title="Edit Builing"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
