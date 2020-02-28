import { connect } from "react-redux";
import ReportForm from "./report_form";
import { createIncident } from "../../actions/incident_action";
import {closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
    return {
      formType: 'report',
      userId: state.session.user.id,
      errors: state.errors.incident
    };
};

const mapDispatchToProps = dispatch => {
    return {
      createIncident: formData => dispatch(createIncident(formData)),
      closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportForm);