// App.js

import React, { Component } from 'react';
import StockList from './StockList';
import UserList from './UserList';
import Hoc from './HOC';

const StocksData = [
  {
    id: 1,
    name: 'TCS'

  },
  {
    id: 2,
    name: 'Infosys'
  },
  {
    id: 3,
    name: 'Reliance'
  }
];

const UsersData = [
  {
    id: 1,
    name: 'Krunal'

  },
  {
    id: 2,
    name: 'Ankit'
  },
  {
    id: 3,
    name: 'Rushabh'
  }
];

const Stocks = Hoc(
    StockList,
    StocksData
);

const Users = Hoc(
    UserList,
    UsersData
);


class RightPanel extends Component {

  render() {
    return (
        <div>
          <Users></Users>
          {/* <Stocks></Stocks> */}
        </div>
    )
  }
}

export default RightPanel;
