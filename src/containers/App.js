import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestUsers } from '../actions';

import CardList from '../components/CardList';
import Header from '../components/Header';
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

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
  
  componentDidMount() {
    this.props.onRequestRobots();
  }
 
  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      // returns all names that include search field
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ?
      <h1>Loading...</h1> : 
      (
        <div className="tc">
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />              
            </ErrorBoundry>
          </Scroll>
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
