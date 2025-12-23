'use client'

import React, {createContext} from 'react'

const initialContext = {
  text: ''
}
export const GeneralContext = createContext(initialContext)
interface GeneralContextProps {
    children: React.ReactNode
}

export const GeneralContextProvider = ({children}: GeneralContextProps)=>{

    const text = 'See you there'
    const values= {
     text
    }
    return (
        <GeneralContext.Provider value={values}>
            {children}
        </GeneralContext.Provider>
    )

}