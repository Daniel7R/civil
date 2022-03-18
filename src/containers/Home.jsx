import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Home.scss'

export const Home = () => {
  return (
    <>
        <NavLink className="link-encuesta" to="personal-information">Ir a la encuesta</NavLink>
    </>
  )
}
