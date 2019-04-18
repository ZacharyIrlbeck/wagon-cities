import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectActiveCity } from '../actions';

class City extends React.Component {
  handleClick = () => {
    console.log(this.props.city.name);
    this.props.selectActiveCity(this.props.city);
  }

  render() {
    return (
      <div className='active' onClick={ this.handleClick }>
        <h3> {this.props.city.name} </h3>
        <p> {this.props.city.address} </p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectActiveCity },
    dispatch
  );
}


export default connect(null, mapDispatchToProps)(City);
