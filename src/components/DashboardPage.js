import React from 'react';
import SpendingsList from './../components/SpendingsList';
import SpendingsListFiltersContainer from './../components/SpendingsListFiltersContainer';

const DashboardPage = () => (
  <div>
    <SpendingsListFiltersContainer />
    <SpendingsList />
  </div>
);

export default DashboardPage;
