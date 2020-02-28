import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions";
import SignupForm from "./signup_form";
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session,
    formType: 'signup'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    otherForm: () => {
      dispatch(openModal('login'))
    },
    closeModal: () => {
      dispatch(closeModal());
      dispatch(clearErrors());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
