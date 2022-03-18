import React from 'react'
import { NavMenu } from './components/NavMenu.jsx'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import './styles/global.scss'
import { Layout } from './containers/Layout.jsx'
import { Home } from './containers/Home.jsx'
import { EncuestadoInformation } from './components/EncuestadoInformation.jsx'
import {Formulario} from './containers/Formulario.jsx'
export const App = () => {
  return (
    <Router>
      <NavMenu />
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/personal-information" element={<EncuestadoInformation />} />
          <Route exact path="/encuesta" element={<Formulario />} />
        </Routes>
      </Layout>
    </Router>
  )
}
