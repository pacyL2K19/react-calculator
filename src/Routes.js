import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Home from './screens/Home';
import Calculator from './screens/Calculator';
import Quote from './screens/Quote';
import Header from './components/Header';

const Routes = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default Routes;
