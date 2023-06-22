import React, {useState} from 'react';
import "../assets/style.css";
import fullBody from "../assets/images/full-body-portal.png"


export default function Hero() {
    const [showTooltip, setShowTooltip] = useState(false);


    return (
        <section className="row padding-top-bottom" id="hero">
            <div 
                onMouseEnter={() => setShowTooltip(true)} 
                onMouseLeave={() => setShowTooltip(false)}
                style={{ position: 'relative' }} 
                className="col col-sm-4 col-12"
            >
               <a href="/about"><img alt="full body shot of Will Cline" src={fullBody} id="profile-picture"/></a>
               {showTooltip && (
                <div style={{ 
                    position: 'absolute', 
                    backgroundColor: 'white',
                    border: '1px solid black',
                    borderRadius: "10px",
                    padding: '5px',
                    zIndex: 100,
                    top: '100%',  // Positions the tooltip just below the image
                    left: '50%',  // Centers the tooltip
                    transform: 'translateX(-50%)'  // Corrects the centering calculation
                }}>
                    <p style={{"fontSize": "15px"}}>Learn more about Will R Cline</p>
                </div>
            )}
            </div>
            <div className="section-body col col-sm-8 col-12" id="about-me">
                <h3 id="hero-quote">"There are those who need to be told what to do and there are those who figure it out with grit."</h3><br/>
                <p>
                    Equipped with data science and software engineering expertise, I can automate any process using both traditional and AI techniques.<br/><br/>

                    For projects requiring a front end, my broad experience in web development and familiarity with numerous JS and Python frameworks enable me to adapt to your preferred technology.<br/><br/>

                    Additionally, I bring seasoned project management skills to the table and am open to such roles.<br/><br/>

                    Based in Austin, Texas, I'm available for online or face-to-face meetings to discuss your project. Let's explore how I can assist you technically or connect you with my network.
                </p>
            </div>
        </section>
    )
}