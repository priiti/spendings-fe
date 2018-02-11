import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Header from './../components/Header';
import DashboardPage from './../components/DashboardPage';
import AddSpendingPage from './../components/AddSpendingPage';
import EditPage from './../components/EditPage';
import HelpPage from './../components/Help';
import NotFoundPage from './../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact/>
        <Route path="/create" component={AddSpendingPage}/>
        <Route path="/edit/:id" component={EditPage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage} exact/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
