import "../induspagestyle/automotive.css"

import { Link } from "react-router-dom";

import Automotivecardservices from "./auto-serv-type";
import Autoadvatiaing from "./auto-after-serv-cont";

const Automotive = () =>{
    return(
        <div>
            <div className="automotive-main">
                <div className="automotive-shado">
                    <div className="aut-heder-onemain" >
                      <div className="aut-heder-one">
                        <h1>Automotive</h1>
                        <div className="divforline">  </div>
                        <div className="auto-continer-parti">
                        <div className="auto-heder-two">
                            <h2>Comprehensive IT Solutions for the Automotive Sector</h2>
                            <p className="auto-p-one">
                            We specialize in meeting the unique IT needs of the automotive industry, seamlessly integrating advanced technologies to enhance vehicle manufacturing and optimize dealership management.Driving Innovation in the Automotive Industry.
                            </p>
                            <Link to="/contactus">
                     <button className='auto-ctas-button'>Get in Touch</button>
                     </Link>
                        </div>
                        <div className="auto-img-cont">
                            
                            </div>
                        </div>
                      </div>
                      </div>
                     
                </div>
                </div>
                <div className="auto-sol-tab">
                    <div className="auto-sol-tab-heading">
                     <h1>
                     Expert IT Solutions Customized for the Automotive Sector.

                     </h1><p>Empowering automotive businesses with cutting-edge technology solutions for streamlined operations, enhanced cybersecurity, and the integration of next-gen automotive technologies.</p>
                    <Automotivecardservices/>
                    <Autoadvatiaing/>
                    </div>
                </div>
            </div>
        
    );
};
export default Automotive;