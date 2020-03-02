import Logout from './Logout';
import { connect } from 'react-redux';
import * as actions from '../../store/logout/actions';

const mapStateToProps = state => ({
  ...state.logout,
});

const mapActionCreators = {
  ...actions,
};

export default connect(mapStateToProps, mapActionCreators)(Logout);