import * as APIUtil from "../util/incidents_api";
import { closeModal } from "./modal_actions";

export const RECEIVE_INCIDENT = "RECEIVE_INCIDENT";
export const RECEIVE_INCIDENTS = "RECEIVE_INCIDENTS";
export const RECEIVE_INCIDENT_ERRORS = "RECEIVE_INCIDENT_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveIncident = incident => ({
  type: RECEIVE_INCIDENT,
  incident
});

const receiveIncidents = incidents => ({
  type: RECEIVE_INCIDENTS,
  incidents
});

const receiveIncidentErrors = errors => ({
  type: RECEIVE_INCIDENT_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
//thunk-action

export const requestIncidents = () => dispatch => {
  APIUtil.fetchAllIncidents().then( (res) => {
    dispatch(receiveIncidents(res.data.incidents));
  })
};

export const requestIncident = (incident_id) => dispatch => {
  APIUtil.fetchIncident(incident_id).then(incident =>
    dispatch(receiveIncident(incident))
  );
};

export const createIncident = formData => dispatch => {
  APIUtil.createIncident(formData).then(res => {
    dispatch(receiveIncident(res.data));
    dispatch(closeModal());
    })
    .catch( err => dispatch(receiveIncidentErrors(err.response.data)))
};

export const updateIncident = (incident_id,formData) => dispatch => {
  APIUtil.updateIncident(incident_id, formData).then(incident =>
    dispatch(receiveIncident(incident))
  );
};

