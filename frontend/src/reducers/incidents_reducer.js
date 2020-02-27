import { RECEIVE_INCIDENTS, RECEIVE_INCIDENT } from "../actions/incident_action";


export default function(state = {}, action) {
  switch (action.type) {
    case RECEIVE_INCIDENTS:
      const incidents = {};
      Object.values(action.incidents).forEach( (incident) => {
        incidents[incident.id] = incident;
      })
      return Object.assign({}, incidents);
    case RECEIVE_INCIDENT:
      return Object.assign({}, state, { [action.incident.id]: action.incident })
    default:
      return state;
  }
}
