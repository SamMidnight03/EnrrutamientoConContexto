import React, { useState } from 'react'

export default function Agentes() {

    const [contador, setContador] = useState(0)

    return (
        <div className='Agentes'>
            <div className="contakills">
                <h2>Contador de Kills</h2>
                <div className='Conts'><img src="/img/KillConter.png" alt="" />{contador}</div>
                <button onClick={() => setContador(contador + 1)}> +1 KILL</button>
            </div>
        </div>
    )
}
