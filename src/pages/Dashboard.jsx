import React, { useContext } from 'react'
import { contextInfo } from '../context/InfoContext'

export default function Dashboard() {
    const { info } = useContext(contextInfo)

    if (info == null) return <main className='pages-dash'>
        <p>Usuario no encontrado</p>
    </main>

    return (
        <main className='Usuario'>
            <span>Username: {info.username}</span>
            <span>Username: {info.password}</span>
        </main>
    )
}
