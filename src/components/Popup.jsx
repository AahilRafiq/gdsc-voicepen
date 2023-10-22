import '../styles/popup.css'
import { useState } from 'react'

export default function Popup({isTokenReceived , updateToken}){

    const [formValue , setFormValue] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        updateToken(formValue)
    }

    return( !isTokenReceived ? (
        <div className="popup">
            <div className='popup-container'>
                <p>Enter your 🤗Hugging face Access Token</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" className='input-form' value={formValue} onChange={(e)=>setFormValue(e.target.value)}/>
                    <button className='submit-btn' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    ): "")
}