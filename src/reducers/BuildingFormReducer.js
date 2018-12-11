import { BUILDING_UPDATE, BUILDING_CREATE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  borough: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUILDING_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case BUILDING_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
