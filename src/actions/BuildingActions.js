import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { BUILDING_UPDATE, BUILDING_CREATE } from './types';

export const buildingUpdate = ({ prop, value }) => {
  return {
    type: BUILDING_UPDATE,
    payload: { prop, value },
  };
};

export const buildingCreate = ({ name, phone, borough }) => {
  const { currentUser } = firebase.auth();
  firebase
    .database()
    .ref(`/users/${currentUser.uid}/buildings`)
    .push({ name, phone, borough })
    .then(() => {
      dispatch({ type: BUILDING_CREATE });
      Actions.pop();
    });
};
