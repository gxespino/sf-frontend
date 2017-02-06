import React from 'react'
import { Link } from 'react-router'

// Components
import { SignedInNav } from './topnav/SignedInNav'
import { SignedOutNav } from './topnav/SignedOutNav'

// Functions
import { logout } from '../../helpers/auth'

export const TopNav = (props) => {
  return props.authed === true ? (
    <SignedInNav authed={props.authed} handleLogout={props.handleLogout} />
      ) : (
    <SignedOutNav authed={props.authed} handleLogout={props.handleLogout} />
  )
}
