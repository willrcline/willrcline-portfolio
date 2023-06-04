import React from "react";
import linkedinLogo from "../assets/images/linkedin-logo.png"


export default function Contact() {
    return (
        <section className="row padding-top-bottom" id="lets-work-together">
            <div className="headers d-flex flex-column justify-content-center align-items-center">
                <h3 id='lets-work-together-header'>Lets Work Together!</h3>
            </div>
            <div className="col col-sm-8 col-12 d-flex justify-content-center align-items-center">
                <ul id="lets-work-together-ul">
                    <a className="p-0 on-hover-white" href="https://www.linkedin.com/in/willrcline">
                        <li className="p-0 on-hover-white">
                            You can easily reach me on Linkedin as I'm active on there just about every day
                        </li>
                    </a>
                    <br /><br />
                    <a className="p-0 on-hover-white" href="https://www.github.com/willrcline">
                        <li className="p-0 on-hover-white">
                           I also invite you to snoop through my work on Github!
                        </li>
                    </a>
                    <br /><br />
                    <li className="p-0">
                        If you're old school, feel free to shoot me an email: willrcline.atx@gmail.com
                    </li>
                    <br /><br />
                </ul>
            </div>
            <section className="col col-sm-4 col-12">
                <a href="https://www.linkedin.com/in/willrcline">
                    <img alt="Linkedin logo" id="linkedin-logo" src={linkedinLogo} />
                </a>
            </section>
        </section>
    )
}