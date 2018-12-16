import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  APPOINTMENT_UPDATE,
  APPOINTMENT_CREATE,
  APPOINTMENTS_FETCH_SUCCESS,
  APPOINTMENT_SAVE_SUCCESS,
} from './types';

export const appointmentUpdate = ({ prop, value }) => {
  return {
    type: APPOINTMENT_UPDATE,
    payload: { prop, value },
  };
};

export const appointmentCreate = ({ name, phone, day }) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/appointments`)
      .push({ name, phone, day })
      .then(() => {
        dispatch({ type: APPOINTMENT_CREATE });
        Actions.pop();
      });
  };
};

export const appointmentsFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/appointments`)
      .on('value', snapshot => {
        dispatch({ type: APPOINTMENTS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const appointmentSave = ({ name, phone, day, uid }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/appointments/${uid}`)
      .set({ name, phone, day })
      .then(() => {
        dispatch({ type: APPOINTMENT_SAVE_SUCCESS });
        Actions.appointmentList({ type: 'reset' });
      });
  };
};

export const appointmentDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/appointments/${uid}`)
      .remove()
      .then(() => {
        Actions.appointmentList({ type: 'reset' });
      });
  };
};
