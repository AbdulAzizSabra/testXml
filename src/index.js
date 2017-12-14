import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import Steps from './Steps';
import reducers from './reducers';
import Gantt from './Gantt';
import { Management } from './components/Management';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/management" component={Management} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('container')
);
