import React from "react";
import Vince from "../Images/New-Bio-Image.png"
import Resume from "..//Images/Resume2020.pdf"

function AboutMe () {
    return (
        <div className="container-fluid">
            <div className="about-me">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 bg-light text-dark">
                            <h1>About Me</h1>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 bg-light text-dark">
                        <img id="bio-image" 
                        src={Vince} 
                        className="img-fluid max-width: 100% height: auto" 
                        alt="Vince Scacchitti Headshot"/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 bg-light text-dark">
                    <p className="pgraph">
                  A Full-Stack Developer splitting time between Northern Hartford and Fairfield County, CT.  I spent the last 15 years working in the exercise industry and running my own personal training company for the past 8 before forced closure due to the pandemic of 2020. Through this experience I have gained knowledge in sales, management, leadership, and fostering great working relationships with a variety of clients with a variety of backgrounds and beliefs. Recently, I completed a Certificate in Full-Stack Web Development from the University of Connecticut, where I learned ideal practices behind the design of mobile and user-friendly websites and applications. I am actively looking for a job in the Web-Development where I can combine my past experience and merge it into a new field!
                    </p>
                    <div className="card skills">
                  <div className="card-body text-center">
                    <h3  id="skill-head" className="card-title">Technical Skills</h3>
                    <ul id="skill-list" className="card-text">
                      <li className="display"><span className="bold">Programming Languages:</span>HTML, CSS, JavaScript</li>
                      <li className="display"><span className="bold">Libraries/Frameworks:</span>JQuery, Express.js, BootStrap, React.js, Angular.js</li>
                      <li className="display"><span className="bold">Database Management:</span>MySql, Sequelize, MongoDB, Mongoose</li>
                      <li className="display"><span className="bold">Other Technologies:</span>Node.js, Passport.js, Express-Handlebars, git, Heroku, AJAX, REST API's, IndexedDB</li>
                    </ul>
                    <a href={Resume} id="resume-btn" class="btn btn-primary">Download My Resume!</a>
                  </div>
                </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;