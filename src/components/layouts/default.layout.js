import React from 'react';
import PropTypes from 'prop-types';

export const DefaultLayout = ({
  nav,
  footer1,
  footer2,
  footer3
}) => (
  <div>
    {/* following menu */}
    <div className="ui large top fixed menu transition hidden">
      {nav}
    </div>

    <div className="ui inverted vertical masthead center aligned segment">
      {/* top menu */}
      <div className="ui container">
        {nav}
      </div>

      <div className="ui text container">
        <h1 className="ui inverted header">
          Imagine-a-Company
        </h1>
        <h2>Do whatever you want when you want to.</h2>
        <div className="ui huge primary button">Get Started <i className="right arrow icon"></i></div>
      </div>

    </div>

    <div className="ui vertical stripe segment">
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
  footer1: PropTypes.element.isRequired,
  footer2: PropTypes.element.isRequired,
  footer3: PropTypes.element.isRequired,
};

export default DefaultLayout;