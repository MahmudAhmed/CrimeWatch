import { connect } from "react-redux";
import MainPage from "./main_page";
import { requestIncidents } from "../../actions/incident_action";

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    incidents: Object.values(state.incidents)
});

const mapDispatchToProps = dispatch => {
    return {
      requestIncidents: () => dispatch(requestIncidents())
    };
};


export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
