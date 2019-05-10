import { hot } from 'react-hot-loader';
import React, { useState } from 'react';
import Button from '@material/react-button';
import { Headline2 } from '@material/react-typography';
import MaterialIcon from '@material/react-material-icon';
import './style/app.scss';

function App() {
  const title = 'Welcome to React Material Starting Kit';
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    return setClickCount(clickCount + 1);
  }

  return (
    <div className="app">
      <Headline2 tag="h1">{title}</Headline2>
      <Button
        trailingIcon={<MaterialIcon icon="plus_one" />}
        raised
        className="button-alternate"
        onClick={handleClick}
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

export default hot(module)(App);
