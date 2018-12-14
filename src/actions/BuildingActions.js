import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  BUILDING_UPDATE,
  BUILDING_CREATE,
  BUILDINGS_FETCH_SUCCESS,
  BUILDING_SAVE_SUCCESS,
} from './types';

export const buildingUpdate = ({ prop, value }) => {
  return {
    type: BUILDING_UPDATE,
    payload: { prop, value },
  };
};

export const buildingCreate = ({ name, phone, borough }) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/buildings`)
      .push({ name, phone, borough })
      .then(() => {
        dispatch({ type: BUILDING_CREATE });
        Actions.pop();
      });
  };
};

export const buildingsFetch = () => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/buildings`)
      .on('value', snapshot => {
        dispatch({ type: BUILDINGS_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const buildingSave = ({ name, phone, borough, uid }) => {
  const { currentUser } = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`users/${currentUser.uid}/buildings/${uid}`)
      .set({ name, phone, borough })
      .then(() => {
        dispatch({ type: BUILDING_SAVE_SUCCESS });
        Actions.buildingList({ type: 'reset' });
      });
  };
};

export const buildingDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/buildings/${uid}`)
      .remove()
      .then(() => {
        Actions.buildingList({ type: 'reset' });
      });
  };
};
