// Signup.js
import React, {useState} from 'react';
import './SignUp.css';
import { Link,useNavigate} from 'react-router-dom';
import signup from './Images/signup.jpeg';
import {useUserAuth} from '../context/UserAuthContext';
import {Form, Alert} from "react-bootstrap";


function Signup() {

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[error,setError]=useState("");

  const {signUp}=useUserAuth();
  const navigate = useNavigate();

   const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try{
     await signUp(email,password);
     navigate("/Login")
    }
    catch(err){
     setError(err.message);
    }
   }

  return (
    <div className="signup-popup">
      <div className="signup-container">
        <div className="left-side">
          <img src={signup} style={{width:'80%'}} alt="Signup Image" />
        </div>
        <div className="right-side">
          <div className="signup-box">
            <h2>Sign Up</h2>
            {error && <Alert varient="danger">{error}</Alert>}
            <Form  onSubmit={handleSubmit}>
              < div className="input-container">
                <label>Email</label>
                <input type="email" placeholder="Enter your email" 
                onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className="input-container">
                <label>Password</label>
                <input type="password" placeholder="Create a password" 
                onChange={(e)=>setPassword(e.target.value)}/>
              </div>
              <button className="signup-button">Sign Up</button>
            </Form>
            <div className="or-divider">
              <span>OR</span>
            </div>
            <button className="google-signup-button">Sign Up with Google</button>
            <p>Already have an account? <Link to="/Login">Log In</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
