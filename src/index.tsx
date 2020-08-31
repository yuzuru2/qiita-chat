import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

const history = createBrowserHistory();

// reducer
import slice_basic from 'src/store/basic';
import slice_messageList from 'src/store/messageList';
import slice_post from 'src/store/post';

// component
import home from 'src/component';

// store
const store = configureStore({
  reducer: combineReducers({
    router: connectRouter(history),
    basic: slice_basic.reducer,
    messageList: slice_messageList.reducer,
    post: slice_post.reducer,
  }),
  middleware: [thunk],
});

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path={'/'} component={home} key="home" />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
