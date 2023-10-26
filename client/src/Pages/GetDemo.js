import React from "react";
import './GetDemo.css';
import  Navbar  from "../Components/Navbar";
import DemoForm from "../Components/DemoForm";

function GetDemo () {

   

    return (
        <div>
        <Navbar />  
        <div className="demoContainer">
            <div className="heroContent">
                <h1>Let's talk.</h1>
                <h1>Get a personalised demo.</h1>
                 <ul>
                     <li>300X faster answers, 30% higher user engagement</li>
                     <li>2X more productive contact center, 50% lower costs to serve</li>
                     <li>
                     20% higher tech velocity, focus on your core product
                     </li>
                 </ul>

                 <div className="demoForm">
                    <DemoForm />
                </div>
            </div>
        </div>
        </div>
    )
}
export default GetDemo;