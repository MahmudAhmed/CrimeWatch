import { connect } from "react-redux";
import MainPage from "./main_page";

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(MainPage);
