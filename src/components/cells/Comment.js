import React from 'react';
import PropTypes from 'prop-types';
import { formatDistance } from 'date-fns';

const Comment = ({
  id,
  parentId,
  timestamp,
  body,
  author,
  voteScore,	
  deleted,
  parentDeleted,
}) => {
  if(deleted) return (
    <div className="comment">
      <a className="avatar">
      </a>
      <div className="content">
        deleted
      </div>
    </div>
  );

  return (
    <div className="comment">
      <a className="avatar">
        {voteScore}
      </a>
      <div className="content">
        <a className="author">{author}</a>
        <div className="metadata">
          <span className="date">{formatDistance(timestamp, Date.now())}</span>
        </div>
        <div className="text">
          {body}
        </div>
        <div className="actions">
          <a className="reply">Reply</a>
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
};

Comment.defaultProps = {
  voteScore: 0,
  deleted: false,
  parentDeleted: false,
};

export default Comment;