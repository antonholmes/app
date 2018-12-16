import {
  APPOINTMENT_UPDATE,
  APPOINTMENT_CREATE,
  APPOINTMENT_SAVE_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  day: '',
  time: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case APPOINTMENT_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case APPOINTMENT_CREATE:
      return INITIAL_STATE;
    case APPOINTMENT_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
