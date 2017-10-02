import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

export const Nav = ({
  categories,
}) => (
  <div className="ui container">
    <div className="ui large secondary inverted pointing menu">
      <NavLink to='/' className="item">Home</NavLink>
      <div className="ui dropdown item">
        Categories
        <div className="menu">
          {categories.map((cat) => <NavLink key={cat.name} to={`/category/${cat.path}`} className='item'>{cat.name}</NavLink>)}
        </div>
      </div>
      <div className="right item">
        <NavLink to='' className="ui inverted button">New Post</NavLink>
      </div>
    </div>
  </div>
);

Nav.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })).isRequired,
};

export default Nav;