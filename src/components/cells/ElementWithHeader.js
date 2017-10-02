import React from 'react';
import PropTypes from 'prop-types';

export const ElementWithHeader = ({
  headerText,
  element,
}) => (
  <div>
    <h4 className="ui inverted header">{headerText}</h4>
    {element}
  </div>
);

ElementWithHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
  element: PropTypes.element,
};

export default ElementWithHeader;