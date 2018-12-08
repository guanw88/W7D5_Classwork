import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../../util/session_api_util';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formtype: "login"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
