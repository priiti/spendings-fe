import React from 'react';
import SpendingsList from './../components/SpendingsList';
import SpendingsListFilters from './../components/SpendingsListFilters';

const DashboardPage = () => (
  <div>
    <SpendingsListFilters />
    <SpendingsList />
  </div>
);

export default DashboardPage;
