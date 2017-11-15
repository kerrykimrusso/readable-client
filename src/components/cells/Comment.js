import React from 'react';
import PropTypes from 'prop-types';
import {distanceInWordsToNow} from 'date-fns';

const Comment = ({
  id,
  parentId,
  timestamp,
  body,
  author,
  voteScore,	
  deleted,
  parentDeleted,

  onUpvote,
  onDownvote,
}) => {
  if(deleted) return (
    <div className="comment">
      <div className="content">
        <div className="text">deleted</div>
      </div>
    </div>
  );

  return (
    <div className="comment">
      <div className="ui mini vertical buttons">
          <button className="ui icon circular button compact" onClick={() => onUpvote(id)}><i className='icon caret up'></i></button>
          <button className="ui button compact vote-score">{voteScore}</button>
          <button className="ui icon circular button compact" onClick={() => onDownvote(id)}><i className='icon caret down'></i></button>
        </div>
      <div className="content">
        <h3 className="author">{author}</h3>
        <div className="metadata">
          <span>Submitted {distanceInWordsToNow(timestamp, {includeSeconds: true})} ago</span>
        </div>
        <div className="text">{body}</div>
        <div className="actions">
          put reply and other actions here
        </div>
      </div>
    </div>
  )
};

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  parentId: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  voteScore: PropTypes.number,
  deleted: PropTypes.bool,
  parentDeleted: PropTypes.bool,

  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired,
};

Comment.defaultProps = {
  voteScore: 0,
  deleted: false,
  parentDeleted: false,
};

export default Comment;