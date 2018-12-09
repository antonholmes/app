import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BuildingFormReducer from './BuildingFormReducer';

export default combineReducers({
  auth: AuthReducer,
  buildingForm: BuildingFormReducer,
});
