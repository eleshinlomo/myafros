import { AddMemberToNewsLetterTypes} from "@/types/NewsletterTypes"


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL


export const addMemberToNewsLetter = async (payload: AddMemberToNewsLetterTypes)=>{
    const response = await fetch(`${BASE_URL}/newsletters/addmember`, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

    if(!response) return 'No response from server'
    const data = await response.json()
    return data
}