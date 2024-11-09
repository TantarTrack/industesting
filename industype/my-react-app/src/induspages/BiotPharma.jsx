import "../induspagestyle/BiotPharm.css"
import { Link } from "react-router-dom";
import soo2 from  "../assets/soo2.webp";
const BiotechnologyandPharmaceuticals = ()=>
{
    return(
        <div>
            <div className="Biotechnology-and-Pharmaceuticals">
                <div className="bio-tech-bg-shado">
                  <div className="bio-div-heading-div">
                   <h1>Biotechnology and Pharmaceuticals</h1>
                   <div className="bio-divforline">  </div>
                   <div className="Biodive-party">
                    <div className="biopharm-party-content">
                        <h2>Empowering Biotechnology and Pharmaceuticals 
                        through Advanced Digital Solutions</h2>
                        <p className="biophar-phara">We empowers biotechnology and pharmaceutical companies with advanced digital solutions, 
                            ensuring streamlined processes, secure data management, and regulatory compliance. From custom software and workflow 
                            automation, our tailored services enable companies to focus on research and patient care, accelerating innovation,
                             enhancing efficiency, and reducing time-to-market for new treatments.</p>
                             <Link to="/contactus">
                     <button className='auto-ctas-button'>Get in Touch</button>
                     </Link>
                    </div>

                    <div className="biopharm-party-photo-div"><img src={soo2} className="soo2-img"/></div>
                   </div>
                  </div>
                </div>

            </div>
        </div>
    );
}
export default BiotechnologyandPharmaceuticals;