import React, { Component } from 'react';

import Header from './components/Header';
import Main from './components/Content';

import itemList from './__mock/mock';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="filter-block">
          <lebel className="filter-block__label">Filter1:</lebel>
            <input placeholder="filter1" type="text" className="filter-item" />
        </div>
        <div className="filter-block">
          <lebel className="filter-block__label"> Filter2:</lebel>
          <input placeholder="filter2" type="text" className="filter-item" />
        </div>
        <Main itemList={itemList}/>
      </div>
    );
  }
}

export default App;
