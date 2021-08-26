import React from 'react'
import classes from './Layout.module.scss'
import Header from '../Header/Header'

export default function Layout(props) {
  return (
    <div className={classes.Wrapper}>
      <Header />
      {props.children}
      <div className={classes.Footer}></div>
    </div>
  )
}
