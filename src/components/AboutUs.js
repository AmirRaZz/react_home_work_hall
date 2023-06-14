import React, { Component } from "react";
import "../styles/about.css";
import img from "../images/cup.png"

class AboutUs extends Component {
    render() {
        return (
            <section className="about-us">
                <div className="about">
                    <img src={img} className="pic" alt="cup"/>
                    <div className="text">
                        <h2>About Us</h2>
                        <h5>
                            Front-end Developer & <span>Designer</span>
                        </h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Expedita natus ad sed harum itaque ullam enim
                            quas, veniam accusantium, quia animi id eos adipisci
                            iusto molestias asperiores explicabo cum vero atque
                            amet corporis! Soluta illum facere consequuntur
                            magni. Ullam dolorem repudiandae cumque voluptate
                            consequatur consectetur, eos provident
                            necessitatibus reiciendis corrupti!
                        </p>
                        <div className="data">
                            <button className="hire">Contact us</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;
