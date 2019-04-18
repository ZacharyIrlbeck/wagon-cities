import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import City from './city';
import { setCities } from '../actions/';


class CityList extends React.Component {   
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div>
        { this.props.cities.map(city => <City city={city} key={city.name} />) }
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cityList
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
