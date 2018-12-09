import { BUILDING_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  hours: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BUILDING_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
