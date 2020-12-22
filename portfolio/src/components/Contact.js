import React from "react";

function Contact (){
    return (
        <div class="container">
        <section class="contact">
          <div>
            <h1>Contact Developer</h1>
          </div>
          <div
            class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 bg-white text-dark"
          >
            <div id="email-icon" class="icon">
              <h3 class="fa-align-centerr">Email Me!</h3>
              <a href="mailto:VScacchitti24@gmail.com"
                ><i
                  class="fa fa-envelope-o fa-5x fa-align-centerr"
                  aria-hidden="true"
                ></i></a>
            </div>
          </div>
  
          <div
            class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 bg-white text-dark"
          >
            <div id="mobile-icon" class="icon">
              <h3 class="fa-align-centerr">Call Me!</h3>
              <a href="tel:(860)913-5775"
                ><i
                  class="fa fa-mobile fa-5x fa-align-centerr"
                  aria-hidden="true"
                ></i></a>
            </div>
          </div>
  
          <div
            class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg- bg-white text-dark"
          ></div>
          <div id="github-icon" class="icon">
            <h3 class="fa-align-centerr">My Work</h3>
            <a href="https://github.com/VScacchitti"
              ><i
                class="fa fa-github fa-5x fa-align-centerr"
                aria-hidden="true"
              ></i></a>
          </div>
          <div
            class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 bg-white text-dark"
          >
            <div id="linkedin-icon" class="icon">
              <h3 class="fa-align-centerr">LinkedIn!</h3>
              <a href="https://www.linkedin.com/in/vincent-scacchitti-254b301b3/"
                ><i
                  class="fa fa-linkedin-square fa-5x fa-align-centerr"
                  aria-hidden="true"
                ></i></a>
            </div>
          </div>
  
          <div
            class="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-1 bg-white text-dark"
          >
            <div id="resume-icon" class="icon">
              <h3 class="fa-align-centerr">My Resume!</h3>
              <a href="Assets/Resume2020.pdf"
                ><i
                  class="fa fa-file-pdf-o fa-5x fa-align-centerr"
                  aria-hidden="true"
                ></i></a>
            </div>
          </div>
        </section>
      </div>
    )
}

export default Contact;