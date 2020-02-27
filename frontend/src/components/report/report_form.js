import React from "react";
import { withRouter } from "react-router-dom";

class ReportForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e) {
        this.props.closeFormModal();
    }

    render() {
        return (
            <div className="report-outer-container">
                <div className="report-form-container-1">
                    <form onSubmit={this.handleSubmit} className="login-form">
                        <div className="report-message">
                            <h2 className="title">Write a Report:</h2>
                        </div>
                        <div className='report-dropd'>
                            <label className='report-crime-cat'>Crime Category: 
                                <select id="category" className='report-drop-select'>
                                    <option value="theft">Theft</option>
                                    <option value="homicide">Homicide</option>
                                    <option value="streetfight">Street-Fight</option>
                                    <option value="robbery">Robbery</option>
                                    <option value="assault">Assault</option>
                                </select>
                            </label>
                        </div>
                        <div className="report-form">
                            <br />
                            <label className="report-lg-lat">Latitude:
                                <input
                                    type="text"
                                    placeholder="ie: 40.712776"
                                className='report-location'
                            />
                            </label>

                            <br />
                            <label className="report-lg-lat">Longitude:
                                <input
                                    type="text"
                                    placeholder="ie: -74.005974"
                                className='report-location'
                            />
                            </label>
                            </div>

                            <br />
                            
                            <br />
                            <label className='report-text-des'>Add a Description:</label>
                            <div className="report-textarea">
                                <textarea rows="4" cols="50"
                                    type="textarea"
                                    placeholder="ie: ' Someone was spotted stealing an old Lady's Purse near Baker Street. Suspect was wearing a red sweater with a black shoes.'"
                                    className='report-textarea-2'
                                />
                                
                            </div> 
                            <br />
                            <div className='report-submit'>
                            <input type="submit" value="Submit" className='report-submit-in'/>
                        </div>
                    </form> 
                    <div className="report-modal-overlay" onClick={() => this.props.closeFormModal()}>X</div>
                </div>
             </div >

        );
    }
}



export default withRouter(ReportForm);