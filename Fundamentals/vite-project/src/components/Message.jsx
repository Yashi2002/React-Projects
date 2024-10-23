import { useState } from "react"
export const Message = () => {
    {
        const [message, setMessage] = useState('Welcome Visitor')
        return(
            <div>
               <h1>{message}</h1>
               <button onClick = {()=> setMessage('Thankyou for Subscribing')}>Subscribe</button>
               <button onClick ={()=> setMessage('What on the earth')}>Broo</button>
            </div>
        )
    }
    }