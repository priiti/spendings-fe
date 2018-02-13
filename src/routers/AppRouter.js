import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Header from './../components/Header';
import DashboardPage from './../components/DashboardPage';
import AddSpendingPage from './../components/AddSpendingPage';
import AddSpendingContainer from './../containers/AddSpendingContainer';
import EditSpendingPage from './../components/EditSpendingPage';
import HelpPage from './../components/Help';
import NotFoundPage from './../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact/>
        <Route path="/create" component={AddSpendingContainer}/>
        <Route path="/edit/:id" component={EditSpendingPage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage} exact/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
