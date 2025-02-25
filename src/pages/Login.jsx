import React, { useContext, useState } from 'react'
import { contextInfo } from '../context/InfoContext'
import { useNavigate } from 'react-router';

export default function Login() {

    const { LoginUser } = useContext(contextInfo);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    function loginSubmit(event) {
        event.preventDefault();
        LoginUser(username, password)
        navigate("/dashboard")
    };

    return (
        <main className="Formulario">
            <form onSubmit={loginSubmit}>
                <h1>Inicio de sesion</h1>
                <div className='inputs'>
                    <input type="text" placeholder='User name' onChange={e => setUsername(e.target.value)} value={username} />
                    <input type="text" placeholder='Password' onChange={e => setPassword(e.target.value)} value={password} />
                </div>
                <button type='submit'>log in</button>
            </form>
        </main>
    )
}
