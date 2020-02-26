import React from 'react';
import IncidentIndexItem from './incident_index_item';

const IncidentIndex = props  => {
    const incidents = [
        {
            lat: 3343456554,
            lng: -433345333,
            category: "Theft",
            time: "4:30pm",
            description: "Someone was spotted stealing an old Lady's Purse near Baker Street. Suspect was wearing a red sweater with a black shoes"
        },
        {
            lat: 876544567,
            lng: -345676543,
            category: "Street-Fight",
            time: "2:00am",
            description: "Two gangs were spotted in Jay Street MetroTech having a loud argument and eventually started shooting at each other, their colors were blue and red."
        },
        {
            lat: 5748939384,
            lng: -2345678654,
            category: "Burglary",
            time: "11:00am",
            description: "Someone was spotted near central Bronx breaking into a family home after the residents have left. Suspect was wearing all black with a ski mask on."
        }
    ];

    return (
        <div>
            <h1>Report Feed: </h1>
            {incidents.map(incident => (
                <IncidentIndexItem
                incident={incident}
                key={incident.id}
                />
            ))}
        </div>
    ); 
};

export default IncidentIndex;