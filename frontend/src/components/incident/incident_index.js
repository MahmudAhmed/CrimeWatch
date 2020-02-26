import React from 'react';
import IncidentIndexItem from './incident_index_item';

const IncidentIndex = ({ incidents }) => (
    <div>
        <h1>Incidents: </h1>
        {incidents.map(incident => (
            <IncidentIndexItem
            incident={incident}
            key={incident.id}
            />
        ))}
    </div>
);

export default IncidentIndex;