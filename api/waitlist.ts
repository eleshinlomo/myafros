import { CreateWaitListTypes } from "@/types/WaitlistTypes"


const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL


export const createWaitList = async (payload: CreateWaitListTypes)=>{
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