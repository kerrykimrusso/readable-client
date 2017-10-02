import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from '../layouts/default.layout';
import Nav from '../organisms/Nav';
import ElementWithHeader from '../cells/ElementWithHeader';

export default class HomePage extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),).isRequired,
  }

  render() {
    const {categories} = this.props;

    const nav = <Nav categories={categories}/>;
    const footer1 = <ElementWithHeader headerText='Footer 1' element={null}/>;
    const footer2 = <ElementWithHeader headerText='Footer 2' element={null}/>;
    const footer3 = <ElementWithHeader headerText='Footer 3' element={null}/>;

    return (
      <DefaultLayout 
        nav={nav}
        footer1={footer1}
        footer2={footer2}
        footer3={footer3}
      />
    )
  }
}
