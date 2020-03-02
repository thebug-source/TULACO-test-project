import Login from './Login';
import { connect } from 'react-redux';
import * as actions from '../../store/login/actions';

const mapStateToProps = state => ({
  ...state.login,
});

const mapActionCreators = {
  ...actions,
};

export default connect(mapStateToProps, mapActionCreators)(Login);
