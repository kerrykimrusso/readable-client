import {connect} from 'react-redux';
import HomePage from '../components/pages/home.page';
import Actions from '../actions';

const mapStateToProps = (state) => ({
  categories: state.categories,
  posts: [...state.posts].sort((post1, post2) => {
    return post2.voteScore - post1.voteScore;
  }),
});

const mapDispatchToProps = (dispatch) => ({
  onPostUpvote: (id) => dispatch(Actions.Common.upvote(id)),
  onPostDownvote: (id) => dispatch(Actions.Common.downvote(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);