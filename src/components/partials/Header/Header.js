import React from 'react'
import classes from './Header.module.scss'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className={classes.Wrapper}>
      <div className={classes.Container}>
        <div className={classes.Logo}>
          <Link to="/">
            <img src="/stockbitfilm.png" alt="logo"/>
          </Link>
        </div>
      </div>
    </div>
  )
}
