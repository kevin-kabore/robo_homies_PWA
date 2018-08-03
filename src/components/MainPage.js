import React, { Component } from 'react';

import CardList from '../components/CardList';
import Header from '../components/Header';
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import './MainPage.css';



class MainPage extends Component {
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

export default MainPage;
