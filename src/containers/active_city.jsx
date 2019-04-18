/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';

class ActiveCity extends React.Component {
  render() {
    if (this.props.activeCity) {
      return (
        <div>
          <h1>{ this.props.activeCity.name }</h1>
          <p>{this.props.activeCity.address }</p>
          <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.name}`} alt="camp" />
        </div>
      );
    }
    return (null);
  }
}

function mapStateToProps(state) {
  return { activeCity: state.activeCity };
}

export default connect(mapStateToProps)(ActiveCity);
