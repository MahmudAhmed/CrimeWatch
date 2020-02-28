import { connect } from "react-redux";
import MainPage from "./main_page";
import { requestIncidents } from "../../actions/incident_action";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    incidents: Object.values(state.incidents)
});

const mapDispatchToProps = dispatch => {
    return {
      requestIncidents: () => dispatch(requestIncidents()),
      openModal: modal => dispatch(openModal(modal))
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
