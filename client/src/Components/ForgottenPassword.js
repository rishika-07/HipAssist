import React, { useState } from 'react';
import './ForgottenPassword.css';
import { sendPasswordResetEmail } from 'firebase/auth';
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';
import  backgrounfp from './Images/backgroundfp.png';

function ForgottenPassword(){
  const history = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const emalval = e.target.email.value;
      
        sendPasswordResetEmail(auth,emalval)
        .then(data=>{
            alert("Check Your Email");
            history("/Login")
        }).catch(err=>{
            alert(err.code)
        })
    }
  return (
    <div className='fpContainer'>
   
  <div className='header-Forgotten-Password'>
 <h1>Forgotten Password</h1>
 <p>Enter your email address and we'll send you an email with instructions to reset your password</p>
 <form onSubmit={(e)=>handleSubmit(e)}>
    <input name='email' className='email' placeholder='enter your email'/>
    <br></br>
    <button className='resetButton'> Reset </button>
 </form>
  </div>
  </div>
  )
}

export default ForgottenPassword;

    