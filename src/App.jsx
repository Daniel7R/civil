import React,{Suspense} from 'react'
import { NavMenu } from './components/NavMenu.jsx'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './styles/global.scss'
import { Layout } from './components/Layout.jsx'
import { Home } from './containers/Home.jsx'
import { EncuestadoInformation } from './containers/EncuestadoInformation.jsx'
import {Formulario} from './containers/Formulario.jsx'
import {Login } from './admin/Login.jsx'
import { Card } from './containers/Card.jsx'
import { CardWithQuery } from './containers/CardWithQuery.jsx'

export const App = () => {

  return (
    <Router>
      <NavMenu />
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/personal-information" element={<EncuestadoInformation />} />
          <Route exact path="/encuesta" element={<Formulario />} />
          <Route exact path="/admin" element={<Login />} />
          {/* Ruta cards */}
          <Route exact path="/card" element={ <Card />} />
          <Route exact path="/card/:id" element={ <CardWithQuery /> } />
        </Routes>
      </Layout>
    </Router>
  )
}
