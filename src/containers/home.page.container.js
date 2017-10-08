import {connect} from 'react-redux';
import HomePage from '../components/pages/home.page';
import Actions from '../actions';

const mapStateToProps = (state, ownProps) => {
  let postsSortedByVoteScore = [...state.posts].sort((post1, post2) => {
    return post2.voteScore - post1.voteScore;
  });

  if(ownProps.match.params.id) {
    postsSortedByVoteScore = postsSortedByVoteScore.filter((post) => post.category === ownProps.match.params.id);
  }

  return {
    categories: state.categories,
    posts: postsSortedByVoteScore,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onPostUpvote: (id) => dispatch(Actions.Common.upvote(id)),
  onPostDownvote: (id) => dispatch(Actions.Common.downvote(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);