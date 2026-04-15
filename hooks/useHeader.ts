import { useState } from "react"




export const useHeaderText = ()=>{

    const [headerTitle, setHeaderTitle] = useState('Seun')

    return {
       headerTitle, 
       setHeaderTitle
    }
}

