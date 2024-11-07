import "../induspagestyle/automotive.css"
import { Link } from "react-router-dom";

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
                            <h2>Customized IT Support For Automotive Industry</h2>
                            <p className="auto-p-one">
                            We specialize in meeting the unique IT needs of the automotive industry, seamlessly integrating advanced technologies to enhance vehicle manufacturing and optimize dealership management.Driving Innovation in the Automotive Industry.
                            </p>
                            <Link to="/contactus">
                     <button className='auto-ctas-button'>Contact Us</button>
                     </Link>
                        </div>
                        <div className="auto-img-cont">
                       
                            
                            </div>
                        </div>
                      </div>
                      </div>
                </div>
                <div className="auto-sol-tab">
                    <div className="auto-sol-tab-heading">
                     <h1>
                     Expert IT Solutions Customized for the Automotive Sector
                     </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Automotive;