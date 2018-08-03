import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestUsers } from '../actions';

import MainPage from '../components/MainPage'; 

import './App.css';



const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestUsers.users,
    isPendning: state.requestUsers.isPendning,
    error: state.requestUsers.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestUsers())
  }
}

class App extends Component {
  render() {
    return <MainPage { ...this.props }/>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
