import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { OverflowMenu, OverflowMenuItem } from 'carbon-components-react';

const overflowMenuEvents = {
  onClick: () => console.log('onClick overflowmenu'),
  className: 'some-class',
};

const overflowMenuItemEvents = {
  onClick: () => console.log('onClick item'),
  className: 'some-class',
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          style={{
            width: '25px',
          }}
        >
          <OverflowMenu {...overflowMenuEvents}>
            <OverflowMenuItem {...overflowMenuItemEvents} itemText="Stop App" />
            <OverflowMenuItem
              {...overflowMenuItemEvents}
              itemText="Restart App"
            />
            <OverflowMenuItem
              {...overflowMenuItemEvents}
              itemText="Rename App"
            />
            <OverflowMenuItem
              {...overflowMenuItemEvents}
              itemText="Edit Routes and Access"
            />
            <OverflowMenuItem
              {...overflowMenuItemEvents}
              itemText="Delete App"
              hasDivider
              isDelete
            />
          </OverflowMenu>
        </div>
      </div>
    );
  }
}

export default App;
