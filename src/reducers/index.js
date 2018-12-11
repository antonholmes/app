import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import BuildingFormReducer from './BuildingFormReducer';
import BuildingReducer from './BuildingReducer';

export default combineReducers({
  auth: AuthReducer,
  buildingForm: BuildingFormReducer,
  buildings: BuildingReducer,
});
