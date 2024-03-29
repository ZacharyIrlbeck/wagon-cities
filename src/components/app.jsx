import React from 'react';
import CityList from '../containers/city_list';
import ActiveCity from '../containers/active_city';

const App = () => {
  return (
    <div className="app">
      <CityList className="cities" />
      <ActiveCity />
    </div>
  );
};

export default App;
