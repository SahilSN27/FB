
import { useEffect, useState } from 'react'
import Home from './FirebaseGoogleAuth/Home'
import {auth,provider}  from './FirebaseGoogleAuth/firebase'
import { signInWithPopup } from 'firebase/auth'

const Signup = () => {
    const[value,setValue]=useState("")
    function handleClick ()
    {
      signInWithPopup(auth,provider)
      .then((data)=>{ setValue(data.user.email)
        window.sessionStorage.setItem('Name',data.user.email)
    })
      
    }
    useEffect(()=>
    {
        window.sessionStorage.getItem('Name')
    })
  return (
    <div>
        <h1>Login Here</h1>
        {(value)?(<Home/>):(<button onClick={handleClick}><i style={{color:'orange'}}></i>Sign in with Google</button>)}
        </div>
  )
}

export default Signup