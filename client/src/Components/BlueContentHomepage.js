import React from "react";
import "./BlueContentHomepage.css";
import IsmLogo from "../Components/Images/IsmLogo.png";
import AicpaLogo from "../Components/Images/AicpaLogo.png";
import appSecureLogo from "../Components/Images/appSecureLogo.png";

function BlueContentHomepage(){
    return(
        <div className="heroContainerBlue">
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
            <div className="internalGridImages">
                <div>
                    <img src={IsmLogo} style={{width:"170px"}}/>
                </div>

                <div>
                    <img src={AicpaLogo} style={{width:"170px"}}/>
                </div>

                <div>
                    <img src={appSecureLogo} style={{width:"170px"}}/>
                </div>

            </div>
            </div>

            <button>write us for a free consultation</button>
        </div>
    )
}
export default BlueContentHomepage;