import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import LoginForm from "./login_form";
import { closeModal } from '../../actions/modal_actions';

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
    // otherForm: () => {
    //   dispatch(openModal('signup'))
    // },
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
