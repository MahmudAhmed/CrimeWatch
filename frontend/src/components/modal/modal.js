import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';


function Modal({modal, closeModal}) {

    if (!modal) {
        return null;
    }   

    let component;

    switch(modal) {
 
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    );
}


const mStP = state => {
    return {
        modal: state.modal
    };
};

const mDtP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mStP, mDtP)(Modal);