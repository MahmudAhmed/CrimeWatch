import React from "react";
import { withRouter } from "react-router-dom";

class ReportForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        this.props.closeModal();
    }

    render() {
        return (
            <div className="report-form-container">
                <div onClick={() => this.props.closeModal()} className="modal-overlay">X</div>
                <form onSubmit={this.handleSubmit}>
                    <div className="report-form">
                        <br />
                        <input
                            type="text"
                            placeholder="Lat"
                        />

                        <br />
                        <input
                            type="text"
                            placeholder="Lng"
                        />

                        <br />
                        <select id="category">
                            <option value="theft">Theft</option>
                            <option value="homicide">Homicide</option>
                            <option value="streetfight">Street-Fight</option>
                            <option value="robbery">Robbery</option>
                            <option value="assault">Assault</option>
                        </select>

                        <br />
                        <textarea rows="4" cols="50"
                            type="textarea"
                            placeholder="Description"
                        />

                        <br />
                        <input type="submit" value="Submit" />
                    </div>
                </form> 
            </div>

        );
    }
}



export default withRouter(ReportForm);