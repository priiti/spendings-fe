import React from 'react';
import SpendingsList from './../components/SpendingsList';
import SpendingsListFiltersContainer from './../components/SpendingsListFiltersContainer';
import SpendingsSummary from './SpendingsSummary';

const DashboardPage = () => (
  <div>
    <SpendingsSummary />
    <SpendingsListFiltersContainer />
    <SpendingsList />
  </div>
);

export default DashboardPage;
