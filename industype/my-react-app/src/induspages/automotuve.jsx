import "../induspagestyle/automotive.css";
import { Link } from "react-router-dom";
import Automotivecardservices from "./auto-serv-type";
import Autoadvatiaing from "./auto-after-serv-cont";

const Automotive = () => {
    return (
        <div>
            <main className="automotive-main">
                {/* Header Section with primary keywords */}
                <section className="automotive-shado">
                    <header className="aut-heder-onemain">
                        <div className="aut-heder-one">
                            <h1>Automotive IT Solutions for Industry Innovation</h1>
                            <div className="divforline"></div>
                            <section className="auto-continer-parti">
                                <article className="auto-heder-two">
                                    <h2>Advanced IT Support Tailored for the Automotive Industry</h2>
                                    <p className="auto-p-one">
                                        We deliver innovative IT solutions that cater to the unique challenges of the automotive industry. Our expertise enhances vehicle manufacturing processes, optimizes dealership management, and integrates advanced technologies like IoT and cloud solutions to drive industry growth.
                                    </p>
                                    <Link to="/contactus">
                                        <button className="auto-ctas-button">Get in Touch</button>
                                    </Link>
                                </article>
                                <div className="auto-img-cont" aria-label="Image of advanced automotive technology solutions">
                                 
                                </div>
                            </section>
                        </div>
                    </header>
                </section>

                {/* Services Section with focus keywords */}
                <section className="auto-sol-tab">
                    <div className="auto-sol-tab-heading">
                        <h1>Comprehensive IT Solutions for the Automotive Sector</h1>
                        <p>Empowering automotive businesses with cutting-edge technology solutions for streamlined operations, enhanced cybersecurity, and the integration of next-gen automotive technologies.</p>
                        <Automotivecardservices />
                        <Autoadvatiaing />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Automotive;
