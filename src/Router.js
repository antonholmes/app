import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import AppointmentList from './components/AppointmentList';
import AppointmentCreate from './components/AppointmentCreate';
import AppointmentEdit from './components/AppointmentEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            leftButtonImage="../assets/images/logo-login.png"
            title="ASSET"
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.appointmentCreate()}
            key="appointmentList"
            component={AppointmentList}
            title="Appointments"
            initial
          />
          <Scene
            key="appointmentCreate"
            component={AppointmentCreate}
            title="Create Appointments"
          />
          <Scene
            key="appointmentEdit"
            component={AppointmentEdit}
            title="Edit Appointment"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
