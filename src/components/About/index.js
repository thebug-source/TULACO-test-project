import About from './About';
import { connect } from 'react-redux';
import * as actions from '../../store/about/actions';

const mapStateToProps = state => ({
  ...state.about,
});

const mapActionCreators = {
  ...actions,
};

export default connect(mapStateToProps, mapActionCreators)(About);