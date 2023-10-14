import React from "react";
import custom from './Images/custom.png';
import customCaseLower from './Images/customCaseLower.png';
import './CustomCase.css';


function CustomCase() {
  return ( 
  <div className="custom">
  <div className='CustomCaseContainer'>
  <div>
    <h1>Custom use case? Our APIs have got your back.</h1>
    <h3>We help you build and deploy bespoke assistants with custom knowledge ingestion and skillset in your work tools.</h3>
  <a href='/GetDemo'>Request a demo </a>
  </div>
  <div>
    <img src={custom} alt='custom_img' style={{width:'100%'}}/>
  </div>
</div>

<div className="CustomCaseContainerLower">
<div>
    <h1>No hallucinations.<br></br>No guesses.<br></br>Safe.

</h1>
    <h3>Always sticks to the knowledge provided with incredibly high first pass accuracy. Achieves 100% precision and 99%+ recall with fine tuning</h3>
  <a href='/GetDemo'>Try it to believe it  </a>
  </div>
  <div>
    <img src={customCaseLower} alt='custom_img_lower' style={{width:'80%'}}/>
  </div>
</div>
</div>
)
}
export default CustomCase;