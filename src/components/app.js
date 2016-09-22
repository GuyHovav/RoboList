import React, { Component } from 'react';
import List from './List.js'
import items from '../MOCK_DATA.json'

export default class App extends Component {  
  
  render() {
    return (
      <div className="app">
		        <List data={items}/>
	    </div>
    );
  }

}
