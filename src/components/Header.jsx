import React, { useContext } from 'react'
import { context } from '../context/oscuroContext'
import { contextInfo } from '../context/InfoContext'
import { Link } from 'react-router'

export default function Header() {
  const { oscuro, setOscuro } = useContext(context)
  const { info } = useContext(contextInfo)
  return (
    <header>
      <nav>
        <Link to={"/Home"}>Home</Link >
        <Link to={"/Agentes "}>Agentes</Link>

        {info == null ? <Link to={"/login"}>Login</Link> :
          <Link to={"/dashboard"}>{info.username}</Link>
        }

        <button onClick={() => setOscuro(!oscuro)}>
          {oscuro ? "🌞" : "🌚"}
        </button>
      </nav>
    </header>
  )
}
