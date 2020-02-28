import {
  RECEIVE_INCIDENT,
  RECEIVE_INCIDENT_ERRORS,
  CLEAR_ERRORS
} from "../actions/incident_action";

export default function(state = [], action) {
  switch (action.type) {
    case RECEIVE_INCIDENT:
      return [];
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_INCIDENT_ERRORS:   
      return Object.values(action.errors);
    default:
      return state;
  }
}
