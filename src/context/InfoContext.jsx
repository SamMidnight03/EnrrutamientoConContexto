import React, { createContext, useState } from 'react'

export const contextInfo = createContext()

function InfoContext({ children }) {

    const [info, setInfo] = useState(null);

    function LoginUser(username, password) {
        setInfo({
            username,
            password
        })
    }
    return (
        <contextInfo.Provider value={{info, LoginUser}}>
            {children}
        </contextInfo.Provider>
    )
}

export default InfoContext