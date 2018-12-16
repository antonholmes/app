import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import AppointmentFormReducer from './AppointmentFormReducer';
import AppointmentReducer from './AppointmentReducer';

export default combineReducers({
  auth: AuthReducer,
  appointmentForm: AppointmentFormReducer,
  appointments: AppointmentReducer,
});
