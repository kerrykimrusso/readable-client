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
  ]
});

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
