import React from 'react';
import PropTypes from 'prop-types';

export const DefaultLayout = ({
  nav,
  body,
  footer1,
  footer2,
  footer3
}) => (
  <div className="pusher">
    <div className="ui inverted vertical masthead center aligned segment">
      {/* following menu */}
      <div className="ui inverted large top fixed menu">
        {nav}
      </div>
    </div>

    <div className="ui main container">
      {body}
    </div>

    {/* footer */}
    <div className="ui inverted vertical footer segment">
      <div className="ui container">
        <div className="ui stackable inverted divided equal height stackable grid">
          <div className="three wide column">
            {footer1}
          </div>
          <div className="three wide column">
            {footer2}
          </div>
          <div className="seven wide column">
            {footer3}
          </div>
        </div>
      </div>
    </div>
  </div>
);

DefaultLayout.propTypes = {
  nav: PropTypes.element.isRequired,
  body: PropTypes.element.isRequired,
  footer1: PropTypes.element.isRequired,
  footer2: PropTypes.element.isRequired,
  footer3: PropTypes.element.isRequired,
};

export default DefaultLayout;