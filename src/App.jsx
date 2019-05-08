import { hot } from 'react-hot-loader'
import React from 'react'
import Button from '@material/react-button'
import { Headline2 } from '@material/react-typography'
import style from './style/app.scss'

const message = 'Welcome to React Material Starting Kit'
const App = () => (
  <div className={style.app}>
    <Headline2 tag={'h1'}>{message}</Headline2>
    <Button
      raised
      className='button-alternate'
      onClick={() => console.log('clicked!')}
    >
      Click Me!
    </Button>
  </div>
)

export default hot(module)(App)
