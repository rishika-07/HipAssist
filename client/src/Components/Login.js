import React , {useState} from 'react';
import './Login.css';
import login from './Images/login.jpeg';
import { Link ,useNavigate } from 'react-router-dom';
import {Form, Alert} from "react-bootstrap";
import { useUserAuth } from '../context/UserAuthContext';
import GoogleButton from "react-google-button";

function Login() {

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[error,setError]=useState("");
 const {logIn,googleSignIn} = useUserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try{
     await logIn(email,password);
     navigate("/")
    }
    catch(err){
     setError(err.message);
    }
   }

   const handleGoogleSignIn= async (e)=>{
  e.preventDefault();

  try{
   await googleSignIn();
   navigate("/")
  }
  catch(err){
   setError(err.message);
  }
  }


  return (
      <div className="login-popup">
          <div className="login-container">
            <div className="left-side">
              <img src={login} style={{width:'80%'}} alt="Login Image" />
            </div>
            <div className="right-side">
              <div className="login-box">
                <h2>Login</h2>
                {error && <Alert varient="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <div className="input-container">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email"  onChange={(e)=>setEmail(e.target.value)} />
                  </div>
                  <div className="input-container">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />
                  </div>
                  <button className="login-button">Login</button>
                </Form>
                <div className="or-divider">
                  <span>OR</span>
                </div>
                <GoogleButton className="google-login-button" type="dark" onClick={handleGoogleSignIn} />
                <p>Don't have an account? <Link to="/SignUp">Sign Up</Link></p>
              </div>
            </div>
          </div>
        </div>
 
 
    
  );
}

export default Login;
