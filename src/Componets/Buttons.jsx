/* @flow */
import React from 'react'
import type { Element } from 'react'
import Button from '@material/react-button'

type Props = {
  text: string,
  icon?: Element<'MaterialIcon'>,
  trailingIcon?: Element<'MaterialIcon'>,
  onClick: Function
}

function Buttons (props: Props) {
  const { text, icon, trailingIcon, onClick } = props

  return (
    <Button
      icon={icon}
      trailingIcon={trailingIcon}
      raised
      className='button-alternate'
      onClick={onClick}
    >
      { text }
    </Button>
  )
}

Buttons.defaultProps = {
  text: 'Click me'
}

export default Buttons
