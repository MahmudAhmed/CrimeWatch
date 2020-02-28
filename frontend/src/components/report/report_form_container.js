import { connect } from "react-redux";
import ReportForm from "./report_form";
import { closeModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
    return {
        formType: 'report'
    };
};

const mapDispatchToProps = dispatch => {
    return {
      closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportForm);