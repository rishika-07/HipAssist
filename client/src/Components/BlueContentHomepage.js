import React from "react";
import "./BlueContentHomepage.css";


function BlueContentHomepage(){
    return(
        <div className="BlueContentHomepageContainer">
            <div className="BlueContentHomepageContent">
                <h1>
                Secure 100% of your data.<br></br>No compromises.
                </h1>
                <p>
                Why part with data so that other platforms can learn better? Contain  your data within a secure ISO 27001 and SOC2 Type 2 certified platform.
                </p>
                <h3>Conform to your info sec guidelines.</h3>
                <ol>
                    <li>Proprietary Alltius 'Sliver' retrieval algo</li>
                    <li>Public LLMs for answer construction </li>
                    <li>Alltius hosted LLMs in geography of choice</li>
                    <li>LLMs hosted in your VPC</li>
                </ol>
            </div>
        </div>
    )
}
export default BlueContentHomepage;