import React from 'react';
import IncidentIndexItem from './incident_index_item';
import './incident.css'

const IncidentIndex = props  => {
    const incidents = [
        {
            lat: 40.7288134,
            lng: -74.0026197,
            category: "Theft",
            time: "4:30pm",
            description: "Someone was spotted stealing an old Lady's Purse near Baker Street. Suspect was wearing a red sweater with a black shoes"
        },
        {
            lat: 40.6924415,
            lng: -73.9892479,
            category: "Street-Fight",
            time: "2:00am",
            description: "Two gangs were spotted in Jay Street MetroTech having a loud argument and eventually started shooting at each other, their colors were blue and red."
        },
        {
            lat: 40.8570529,
            lng: -73.8873627,
            category: "Burglary",
            time: "11:00am",
            description: "Someone was spotted near central Bronx breaking into a family home after the residents have left. Suspect was wearing all black with a ski mask on."
        },
        {
            lat: 42.257987,
            lng: -74.2823627,
            category: "Homicide",
            time: "7:45am",
            description: "A drive-by shooting was spotted on Cross Island Parkway near the Burger King. Suspect was driving a 1988 grey corvette."
        },
        {
            lat: 41.1170529,
            lng: -73.1208671,
            category: "Assault",
            time: "1:00am",
            description: "Someone was spotted near Cherry Lane assaulting a young man. Suspect is wearing all black with a red baseball cap."
        }
    ];

    return (
        <div className='incident-outer-div'>
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