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

  const postCountsPerCategory = {};
  state.posts.forEach((post) => {
    if(!(post.category in postCountsPerCategory)) postCountsPerCategory[post.category] = 0;
    postCountsPerCategory[post.category] += 1;
  });

  let categoriesWithCounts = state.categories.map((category) => ({
    ...category,
    numPosts: postCountsPerCategory[category.name] || 0,
  }));

  return {
    categories: categoriesWithCounts,
    posts: postsSortedByVoteScore,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onPostUpvote: (id) => dispatch(Actions.Post.upvote(id)),
  onPostDownvote: (id) => dispatch(Actions.Post.downvote(id)),
  onPostLinkClicked: (post) => dispatch(Actions.Post.clickLink(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);