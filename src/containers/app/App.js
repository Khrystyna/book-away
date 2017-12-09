import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import HomeContainer from "../home/HomeContainer";
import { userAuthStatusCheck } from "../../actions/user";

import './App.css';
import '../../styles/utils.css';


const history = createHistory();

export class App extends Component {
  componentDidMount() {
    this.props.checkUserAuthStatus();
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <main className="App">
          <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Redirect path="*" to="/" />
          </Switch>
        </main>
      </ConnectedRouter>
      );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userState.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserAuthStatus: () => dispatch(userAuthStatusCheck())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
