import react from "react";
import { FaConfluence} from 'react-icons/fa';
import { FaSalesforce} from 'react-icons/fa';
import { SiZendesk } from 'react-icons/si';
import IconWithText from './IconWithText';
import Office365Logo from '../Components/Images/Office365Logo.png';
import AirtableIcon from '../Components/Images/AirtableIcon.png';
import slackLogo from '../Components/Images/slackLogo.png';
import hubspotLogo from '../Components/Images/hubspotLogo.png';
import googleDrive from '../Components/Images/googleDrive.png';
import discordLogo from '../Components/Images/discordLogo.png';
import GmailLogo from '../Components/Images/GmailLogo.png';
import whatsappLogo from '../Components/Images/whatsappLogo.png';
import "./CustomApiSectionHomePage.css";

function CustomApiSectionHomePage(){
    return(
       <div className="heroContainerSection">
          <div className="part1">
            <p>Knowledge Sources</p>
            <div className="internalgridIcons1">
                
                <div className="icons">
                <img src={ googleDrive } style={{width:"40px"}}/>
                </div>

                <div className="icons">
                <FaConfluence size={40} color="blue"/>
                </div>

                <div className="icons">
                    <SiZendesk size={40} color=""/>
                </div>

                <div className="icons">
                <img src={ AirtableIcon } style={{width:"40px"}}/>
                </div>

                <div className="icons">
                    <img src={Office365Logo} style={{width:"40px"}}/>
                </div>

                <div className="icons1" >
                    <IconWithText text="Custom Api"/>
              </div>
             </div>
          </div>

          <div className="part2">
            <p>Skills and Actions</p>
            <div className="internalgridIcons1">

                <div className="icons">
                <SiZendesk size={40} color=""/>
                </div>

                <div className="icons">
                    <FaSalesforce size={40} color="deepskyblue"/>
                </div>
                
                <div className="icons">
                <img src={ hubspotLogo } style={{width:"40px"}}/>
                </div>

                <div className="icons1" >
                <IconWithText text="Custom Api"/>
                </div>
           </div>
          </div>

          <div className="part3">
            <p>Channels</p>
            <div className="internalgridIcons1">
               
                
            <div className="icons">
            <img src={ slackLogo } style={{width:"40px"}}/>
            </div>
               
               
            <div className="icons">
            <img src={ discordLogo } style={{width:"40px"}}/>
            </div> 

                 
            <div className="icons">
            <img src={ GmailLogo } style={{width:"40px"}}/>
            </div>

                 
            <div className="icons">
            <img src={ whatsappLogo } style={{width:"40px"}}/>
            </div>
           
            <div className="icons1" >
            <IconWithText text="Custom Api"/>
            </div>
           
           </div>
           </div>

       </div>
    )
}
export default CustomApiSectionHomePage;