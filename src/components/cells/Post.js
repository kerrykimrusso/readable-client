import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {distanceInWordsToNow} from 'date-fns';

const Post = ({
  id, 
  timestamp,
  title, 
  body, 
  author,
  voteScore,
  category,
  deleted,
  numComments,

  onUpvote,
  onDownvote,
}) => (
  <div className="item">
    <div className="ui mini vertical buttons">
        <button className="ui icon circular button compact" onClick={() => onUpvote(id)}><i className='icon caret up'></i></button>
        <button className="ui button compact vote-score">{voteScore}</button>
        <button className="ui icon circular button compact" onClick={() => onDownvote(id)}><i className='icon caret down'></i></button>
      </div>
    <div className="content">
      <Link className="header" to={`post/${id}`}>{title}</Link>
      <div className="meta">
        <span>Submitted {distanceInWordsToNow(timestamp, {includeSeconds: true})} ago by {author} to <Link to={`category/${category}`}>{category}</Link></span>
      </div>
      <div className="description">
      </div>
      <div className="extra">
        <Link className="ui label" to={`/post/${id}`}>
          <i className="comment icon"></i> {numComments}
        </Link>
      </div>
    </div>
  </div>
);

Post.propTypes = {
  id: PropTypes.string.isRequired, 
  timestamp: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired, 
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  deleted: PropTypes.bool.isRequired,
  numComments: PropTypes.number,

  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired,
}

Post.defaultProps = {
  numComments: 0,
}

export default Post;