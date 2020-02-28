import { connect } from "react-redux";
import MainPage from "./main_page";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => {
    return {
      openModal: modal => dispatch(openModal(modal))
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
