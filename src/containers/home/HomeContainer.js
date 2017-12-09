import React, { Component } from 'react';
import { connect } from 'react-redux';

export class HomeContainer extends Component {
  render() {
    return (
      <div>Welcome!</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
