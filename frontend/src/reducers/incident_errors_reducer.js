import {
  RECEIVE_INCIDENT,
  RECEIVE_INCIDENT_ERRORS
} from "../actions/incident_action";

export default function(state = [], action) {
  switch (action.type) {
    case RECEIVE_INCIDENT:
      return [];
    case RECEIVE_INCIDENT_ERRORS:
      return action.errors;
    default:
      return state;
  }
}