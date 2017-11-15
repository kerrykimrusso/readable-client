import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from '../layouts/default.layout';
import Nav from '../organisms/Nav';
import ElementWithHeader from '../cells/ElementWithHeader';
import ListWithStat from '../cells/ListWithStat';
import Post from '../cells/Post';

export default class HomePage extends Component {
  static propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
      }),).isRequired,
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired, 
        timestamp: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired, 
        body: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        voteScore: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        deleted: PropTypes.bool.isRequired,
        numComments: PropTypes.number,
      })).isRequired,

    onPostUpvote: PropTypes.func.isRequired,
    onPostDownvote: PropTypes.func.isRequired,
  }

  static defaultProps ={
    categories: [],
    posts: [],
  }

  render() {
    const {categories, posts, onPostUpvote, onPostDownvote} = this.props;

    const nav = <Nav categories={categories}/>;

    const body = <div className='ui items'>{posts.map((post) => (
      <Post 
        key={post.id}
        id={post.id}
        timestamp={post.timestamp}
        title={post.title}
        body={post.body} 
        author={post.author}
        voteScore={post.voteScore}
        category={post.category}
        deleted={post.deleted}
        numComments={post.numComments}
        onUpvote={onPostUpvote}
        onDownvote={onPostDownvote}
      />
    ))}</div>;

    const categoryListWithPostCount = <ListWithStat className="ui list"
      items={categories} 
      itemClassNames='ui label'
      itemKeyPropertyName={'name'}
      itemDisplayNamePropertyName={'name'}
      itemStatPropertyName={'numPosts'}
      />
    const footer1 = <ElementWithHeader headerText='Top Categories' element={categoryListWithPostCount}/>;
    const footer2 = <ElementWithHeader headerText='Top Posts' element={null}/>;
    const footer3 = <ElementWithHeader headerText='About' element={null}/>;

    return (
      <DefaultLayout 
        nav={nav}
        body={body}
        footer1={footer1}
        footer2={footer2}
        footer3={footer3}
      />
    )
  }
}
