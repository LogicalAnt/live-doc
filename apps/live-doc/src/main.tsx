import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './app/app';
import { Home } from './app/Components/Home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/group/:id">
        <Home />
      </Route>
      <Route path="*">
        <p>page not found</p>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
