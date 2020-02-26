import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        return(
            <>
                <h2>Report Feed:</h2>
                <div className="index-container">
                    <div className="report1">
                        <p>Report#1</p>
                        <p>Lat: 3343456554, Lng: -433334343</p>
                        <p>Category: Theft</p>
                        <p>Time: 4:30pm</p>
                        <p>Description: Someone was spotted stealing an old Lady's Purse near Baker Street.
                            Suspect was wearing a red sweater with a black shoes </p>
                    </div>

                    <div className="report2">
                        <p>Report#2</p>
                        <p>Lat: 876544567, Lng: -345676543</p>
                        <p>Category: Street-Fight</p>
                        <p>Time: 2:00am</p>
                        <p>Description: Two gangs were spotted in Jay Street MetroTech having a loud argument and
                            eventually started shooting at each other, their colors were blue and red.</p>
                    </div>

                    <div className="report3">
                        <p>Report#3</p>
                        <p>Lat: 5748939384, Lng: -2345678654</p>
                        <p>Category: Burglary</p>
                        <p>Time: 11:00am</p>
                        <p>Description: Someone was spotted near central Bronx breaking into a family home after the residents have left. 
                            Suspect was wearing all black with a ski mask on.</p>
                    </div>

                </div>
            </>
        );
    }
}

export default Profile;
