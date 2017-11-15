import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export const ListWithStat = ({
  items,
  itemKeyPropertyName,
  itemDisplayNamePropertyName,
  itemClassNames,
  itemStatPropertyName,
}) => (
  <div>
    {items.map((item) => 
      <div className="item" key={item[itemKeyPropertyName]}>
        <div  
          className={classnames(itemClassNames)}>
          <i className="ui circular label">{item[itemStatPropertyName]}</i>
          {item[itemDisplayNamePropertyName]}
        </div>
      </div>)}
  </div>
);

ListWithStat.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
      displayName: PropTypes.string,
    })).isRequired,
  itemKeyPropertyName: PropTypes.string.isRequired,
  itemDisplayNamePropertyName: PropTypes.string.isRequired,
  itemClassNames: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
  itemStatPropertyName: PropTypes.string.isRequired,
}

export default ListWithStat;