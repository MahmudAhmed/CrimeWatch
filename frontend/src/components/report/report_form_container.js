import { connect } from "react-redux";
import ReportForm from "./report_form";
import { createIncident } from "../../actions/incident_action";

const mapStateToProps = state => {
    return {
      userId: state.session.user.id,
      errors: state.errors.incident
    };
};

const mapDispatchToProps = dispatch => {
    return {
      createIncident: formData => dispatch(createIncident(formData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportForm);