import { Link } from "react-router-dom";
const Autoadvatiaing =()=>
{return(
    <div>
<div className="reliable-it-sect-div">
    <div className="reliable-it-sect-div-heding"><h2>
    Why Choose Us for Cutting-Edge Automotive IT Solutions.
    </h2>
    </div>
    <div>
        <div className="auto-phot-contant-div">
         <div className="phot-auto-div">
         </div>
         <div className="adv-content-auto-div">
            <div className="adv-content-auto-div-font">
            <h1>Advantages of Partnering with Us for Automotive Innovation</h1>
          <p>Collaborating with us empowers automotive businesses to stay ahead with advanced IT solutions, boosting operational efficiency, fortifying cybersecurity, and enabling the integration of pioneering technologies like IoT, cloud solutions, and immersive digital showrooms.</p>
          </div>
           </div>
        </div>
    </div>
   
</div>
<div className="main-auto-last-div-allok">
    <div className="auto-last-div-allok">
        <h1>Moving Forward: Strategies for Sustainable Growth</h1>
        <p>Unlock your business’s full potential with our tailored IT solutions. Contact us to create a customized strategy that meets your specific challenges and seizes new opportunities.</p>
        <Link to="/contactus" >
                     <button className='auto-ctas-button-last'>Contact Us</button>
                     </Link>
                     </div></div>
    
</div>

); };
export default Autoadvatiaing;