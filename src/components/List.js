import React, { Component } from 'react';
import Card from './card'

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = { nameFilter: '' };
  }
  onFilterChange(e) {
    this.setState({ nameFilter: e.target.value })
  }
  render() {
    const {data} = this.props
    const {nameFilter} = this.state
    return (
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
        <input
          value={this.state.nameFilter}
          onChange={this.onFilterChange.bind(this) }
          />
        <div className = "list">
          <ul>
            {
              data.filter(value => value.first_name.indexOf(nameFilter) != -1)
                .map((item, i) => <li key={i}> <Card data={item}/></li>)
            }
          </ul>
        </div>
      </div>
    )
  }
};

