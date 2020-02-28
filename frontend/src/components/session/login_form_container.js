import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import LoginForm from "./login_form";
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => {
  // debugger
  return {
    errors: state.errors.session,
    formType: 'login'

  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    otherForm: () => {
      dispatch(openModal("signup"));
    },
    closeModal: () => {
      dispatch(closeModal());
      dispatch(clearErrors());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
