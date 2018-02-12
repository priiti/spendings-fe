import React from 'react';
import SpendingsList from './../components/SpendingsList';
import SpendingsListFilters from './../components/SpendingsListFilters';
import SpendingsListFiltersContainer from './../containers/SpendingsListFiltersContainer';
import SpendingsListContainer from './../containers/SpendingsListContainer';

const DashboardPage = () => (
  <div>
    <SpendingsListFiltersContainer />
    <SpendingsListContainer/>
  </div>
);

export default DashboardPage;
