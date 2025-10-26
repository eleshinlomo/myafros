
import { BASE_URL } from "../urls";

interface ContactMessageProps {
    service: string;
    name: string;
    email: string;
    subject: string;
    message: string;
}

export const sendContactMessage = async (payload: ContactMessageProps)=>{
    const response = await fetch(`${BASE_URL}/message/sendcontactmessage`, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

    if(!response) return 'No response from server'
    const data = await response.json()
    return data
}