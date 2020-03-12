const axios = require("axios");

export const fetchAllIncidents = () => {
  return axios.get("/api/incidents/all");
};

export const fetchIncident = (incident_id) => {
  return axios.get(`/api/incidents/${incident_id}`);
};

export const createIncident = (formData) => {
  return axios.post("/api/incidents/create", formData);
};

export const updateIncident = (incident_id, formData) => {
  return axios.patch(`/api/incidents/update/${incident_id}`, formData);
};
