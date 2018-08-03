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
 
  filterRobots = () => {
    return this.props.robots.filter(robot => {
      // returns all names that include search field
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })
  }
  render() {
    const { onSearchChange, robots, isPending } = this.props;

    return isPending ?
      <h1>Loading...</h1> : 
      (
        <div className="tc">
          <Header />
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={this.filterRobots()} />              
            </ErrorBoundry>
          </Scroll>
        </div>
      )
  }
}

export default MainPage;
