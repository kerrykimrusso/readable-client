import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePageContainer from '../containers/home.page.container';

const store = createStore(reducers, {
    categories: [
      {
        name: 'react',
        path: 'react'
      },
      {
        name: 'redux',
        path: 'redux'
      },
      {
        name: 'udacity',
        path: 'udacity'
      }
    ],
    posts: [
      {
        id: '8xf0y6ziyjabvozdd253nd',
        timestamp: 1467166872634,
        title: 'Udacity is the best place to learn React',
        body: 'Everyone says so after all.',
        author: 'thingtwo',
        category: 'react',
        voteScore: 6,
        deleted: false
      },
      {
        id: '6ni6ok3ym7mf1p33lnez',
        timestamp: 1468479767190,
        title: 'Learn Redux in 10 minutes!',
        body: 'Just kidding. It takes more than 10 minutes to learn technology.',
        author: 'thingone',
        category: 'redux',
        voteScore: -5,
        deleted: false
      }
    ]
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const App = (props) => (
  <Provider store={store}>
    <Router>
      <Route exact path="/" render={() => <HomePageContainer/>}/>
      {/* <Route exact path="/category/:id" render={}/>
      <Route exact path="/category/post/:id" render={}/>
      <Route path="/post" render={}/>
      <Route path="/post/new" render={}/>
      <Route path="/post/:id/edit" render={}/> */}
    </Router>
  </Provider>
);

export default App;
