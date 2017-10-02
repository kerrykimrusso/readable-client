import {connect} from 'react-redux';
import HomePage from '../components/pages/home.page';

const mapStateToProps = (state) => ({
  categories: state.categories,
});

const mapDispatchToProps = (state) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);