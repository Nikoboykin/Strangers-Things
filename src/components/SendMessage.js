import React, {useState} from "react";
import './style/SendMessage.css'


const SendMessage = ({ userLogin }) =>{

    const [messageText, setMessageText]= useState('')
    
   

    return(
        <div className='message'>
            <span>From : {userLogin} </span>       <span>To: </span>
                <button type='submit' id="button">Send</button>
            <form>
               

                <textarea  rows={10} cols={40} onChange={(event) => setMessageText(event.target.value)}
                    placeholder='Text Here'>
                </textarea>
                
                
            </form>
        </div>
    )
}

export default SendMessage;