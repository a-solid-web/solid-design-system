import React, { Component } from 'react';

import { Button, Toggle } from 'yoda-design-system';

export default class App extends Component {
  state = { checked: false };

  handleToggleSwitch = () => {
    this.setState(prevState => ({
      checked: !prevState.checked,
    }));
  };

  render() {
    const { checked } = this.state;
    return (
      <div>
        <Toggle checked={checked} onChange={this.handleToggleSwitch} />
        <Button>Modern React component module</Button>
      </div>
    );
  }
}
