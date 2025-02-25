import React, {createContext, useState } from "react"

export const context = createContext()

function OscuroContext({ children }) {
    const [oscuro, setOscuro] = useState(false)
    return (

        <context.Provider value={{ oscuro, setOscuro }}>
            {children}
        </context.Provider>
    )
}
export default OscuroContext


