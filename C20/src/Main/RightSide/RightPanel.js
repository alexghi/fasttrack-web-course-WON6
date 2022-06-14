// App.js

import React, { Component } from 'react';
import Students from './components/Students';
import Counter from './components/Counter';

class RightPanel extends Component {

  render() {
    return (
        <div>
          <Students/>
          <Counter/>
        </div>
    )
  }
}

export default RightPanel;
