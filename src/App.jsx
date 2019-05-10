import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import Button from '@material/react-button';
import { Headline2 } from '@material/react-typography';
import MaterialIcon from '@material/react-material-icon';
import './style/app.scss';

class App extends Component {
  state = {
    title: 'Welcome to React Material Starting Kit',
    clickCount: 0,
  };

  handleClick = () => {
    const { clickCount } = this.state;
    this.setState({ clickCount: clickCount + 1 });
  };

  render() {
    const { title, clickCount } = this.state;

    return (
      <div className="app">
        <Headline2 tag="h1">{title}</Headline2>
        <Button
          trailingIcon={<MaterialIcon icon="plus_one" />}
          raised
          className="button-alternate"
          onClick={this.handleClick}
        >
          Click Me!
        </Button>
        <p>This is a simple test using Roboto font</p>
        <p className="clicked">
          Button clicked
          {' '}
          <span>{clickCount}</span>
          {' '}
          times
        </p>
      </div>
    );
  }
}

export default hot(module)(App);
