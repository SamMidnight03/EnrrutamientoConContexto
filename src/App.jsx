import './App.css'
import Header from './components/Header'
import { context } from './context/oscuroContext'
import React, { useContext } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Agentes from './pages/Agentes'

function App() {
  const { oscuro, setOscuro } = useContext(context)

  return (
    <>
      <main className={oscuro ? "dark" : ""} id='Rutas'>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Login />}></Route>
            <Route path='home' element={<Home />}></Route>
            <Route path='login' element={<Login />}></Route>
            <Route path='Agentes' >
              <Route index element={<Agentes />} />
              <Route path='panconquesogrande' element={<p>Pan con queso enorme</p>} />
              <Route path='panconbocadillo' element={<p>Pan con mantequilla</p>} />
              <Route path='pizza' element={<p>Pizza</p>} />
            </Route>
            <Route path='dashboard' element={<Dashboard />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
