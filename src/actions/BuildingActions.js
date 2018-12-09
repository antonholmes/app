import { BUILDING_UPDATE } from './types';

export const buildingUpdate = ({ prop, value }) => {
  return {
    type: BUILDING_UPDATE,
    payload: { prop, value },
  };
};
