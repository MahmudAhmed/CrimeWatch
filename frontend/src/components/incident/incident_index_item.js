import React from 'react';
import { withRouter } from 'react-router-dom';

class IndexItem extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        // const { category, time, description } = this.props.incident;
        return(
            <div className="incident-index-item" >

            </div>
        );
    }
}

{/* <select id="category">
    <option value="theft">Theft</option>
    <option value="homicide">Homicide</option>
    <option value="streetfight">Street-Fight</option>
    <option value="robbery">Robbery</option>
    <option value="assault">Assault</option>
</select> */}

export default withRouter(IndexItem);