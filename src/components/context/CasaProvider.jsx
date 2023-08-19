import { createContext, useState } from "react";

const CasaContext = createContext() // Nombre del grupo

const CasaProvider = ({ children }) => { // Los integrantes

    const [ObjdineroContext, setObjDineroContext] = useState({ // La informacion a emitir
        detalle: "Play Station",
				lugar: "sala",
        dinero: 10000
    })

    return (
        <CasaContext.Provider value={{
            ObjdineroContext,
            setObjDineroContext
        }}>
            {children}
        </CasaContext.Provider>
    )
}

export {
    CasaProvider
}

export default CasaContext