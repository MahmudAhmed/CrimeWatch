import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import ReportFormContainer from '../report/report_form_container';

function Modal(props) {
    // debugger
    if (!props) {
        return null;
    }
    let component;
    switch (props.modal) {
        case 'login':
            component = <LoginFormContainer />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        case 'report':
            component = <ReportFormContainer />;
            break;
        default:
            return null;
    }
    // debugger
    return (
        component
    );
}

const mapStateToProps = state => {
    // debugger
    return {
        modal: state.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Modal);