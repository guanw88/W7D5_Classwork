import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup } from '../../util/session_api_util';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formtype: "signup"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
