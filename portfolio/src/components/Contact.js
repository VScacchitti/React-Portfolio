import React from "react";


function Contact (){
    return (
        <div className="container">
        <section className="contact">
          <div>
            <h1>Contact Developer</h1>
          </div>
          
            <div id="email-icon" className="icon">
              <h3 className="fa-align-centerr">Email Me!</h3>
              <a href="mailto:VScacchitti24@gmail.com"><i
                  className="fa fa-envelope-o fa-5x fa-align-centerr"
                  aria-hidden="true"
                ></i>Click Me!</a>
            </div>
      
            <div id="mobile-icon" className="icon">
              <h3 className="fa-align-centerr">Call Me!</h3>
              <a href="tel:(860)913-5775"
                ><i
                  className="fa fa-mobile fa-5x fa-align-centerr"
                  aria-hidden="true"
                ></i>Click Me!</a>
            </div>
          
  
          <div id="github-icon" className="icon">
            <h3 className="fa-align-centerr">My Work</h3>
            <a href="https://github.com/VScacchitti"
              ><i
                className="fa fa-github fa-5x fa-align-centerr"
                aria-hidden="true"
              ></i>Click Me!</a>
          </div>
         
            <div id="linkedin-icon" className="icon">
              <h3 className="fa-align-centerr">LinkedIn!</h3>
              <a href="https://www.linkedin.com/in/vincent-scacchitti-254b301b3/"
                ><i
                  className="fa fa-linkedin-square fa-5x fa-align-centerr"
                  aria-hidden="true"
                ></i>Click Me!</a>
            </div>
          
            <div id="resume-icon" className="icon">
              <h3 className="fa-align-centerr">My Resume!</h3>
              <a href="Assets/Resume2020.pdf"
                ><i
                  className="fa fa-file-pdf-o fa-5x fa-align-centerr"
                  aria-hidden="true"
                ></i>Click Me!</a>
            </div>
        </section>
      </div>
    )
}

export default Contact;