import React from "react";
import { withRouter } from "react-router-dom";

class ReportForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          category: "Misc.",
          description: "",
          lat: "",
          lng: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    componentDidMount(){
        navigator.geolocation.getCurrentPosition(position => {
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        const {  userId, createIncident } = this.props; 
        const formData = {
          witness: userId,
          category: this.state.category,
          description: this.state.description,
          lat: this.state.lat.toString(),
          lng: this.state.lng.toString()
        };
      createIncident(formData)
    }

    handleChange(field){
        return e => {
            this.setState({[field]: e.target.value })
        }
    }

    render() {
        return (
          <div className="report-outer-container">
            <div className="report-form-container-1">
              <form onSubmit={this.handleSubmit} className="login-form">
                {this.props.errors}
                <div className="report-message">
                  <h2 className="title">Write a Report:</h2>
                </div>
                <div className="report-dropd">
                  <label className="report-crime-cat">
                    Crime Category:
                    <select
                      id="category"
                      className="report-drop-select"
                      defaultValue={this.state.category}
                      onChange={this.handleChange("category")}
                    >
                      <option value="Theft">Theft</option>
                      <option value="Homicide">Homicide</option>
                      <option value="Street-Fight">Street-Fight</option>
                      <option value="Robbery">Robbery</option>
                      <option value="Assault">Assault</option>
                      <option value="Misc.">Misc.</option>
                    </select>
                  </label>
                </div>
                <div className="report-form">
                  <br />
                  <label className="report-lg-lat">
                    Latitude:
                    <input
                      type="text"
                    //   placeholder="ie: 40.712776"
                      value={this.state.lat}
                      className="report-location"
                      disabled
                    />
                  </label>

                  <br />
                  <label className="report-lg-lat">
                    Longitude:
                    <input
                      type="text"
                      //   placeholder="ie: -74.005974"
                      value={this.state.lng}
                      className="report-location"
                      disabled
                    />
                  </label>
                </div>

                <br />

                <br />
                <label className="report-text-des">Add a Description:</label>
                <div className="report-textarea">
                  <textarea
                    rows="4"
                    cols="50"
                    type="textarea"
                    placeholder="ie: ' Someone was spotted stealing an old Lady's Purse near Baker Street. Suspect was wearing a red sweater with a black shoes.'"
                    className="report-textarea-2"
                    onChange={this.handleChange("description")}
                  />
                </div>
                <br />
                <div className="report-submit">
                  <input
                    type="submit"
                    value="Submit"
                    className="report-submit-in"
                  />
                </div>
              </form>
              <div
                className="report-modal-overlay"
                onClick={() => this.props.closeFormModal()}
              >
                X
              </div>
            </div>
          </div>
        );
    }
}



export default withRouter(ReportForm);