import * as APIUtil from "../util/incidents_api";

export const RECEIVE_INCIDENT = "RECEIVE_INCIDENT";
export const RECEIVE_INCIDENTS = "RECEIVE_INCIDENTS";


const receiveIncident = incident => ({
  type: RECEIVE_INCIDENT,
  incident
});

const receiveIncidents = incidents => ({
  type: RECEIVE_INCIDENTS,
  incidents
});

//thunk-action

export const requestIncidents = () => dispatch => {
  APIUtil.fetchAllIncidents().then( (incidents) => 
    dispatch(receiveIncidents(incidents))
  )
};

export const requestIncident = (incident_id) => dispatch => {
  APIUtil.fetchIncident(incident_id).then(incident =>
    dispatch(receiveIncident(incident))
  );
};