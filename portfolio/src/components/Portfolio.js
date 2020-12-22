import React from "react";
import "../index.css"
import HomeWorkHelp from "../Images/homeworkhelper.png"
import EDM from "../Images/EDM.png"
import EmpSummGen from "../Images/EmpSummGen.png"
import QuizApp from "../Images/QuizAPP.png"
import Rebate from "../Images/rebate.png"
import burger from "../Images/burger.png"




function Portfolio(){
    return(

        <div className="container">
            <div className="portfolio">
                <div className="row">
                 <div className="col-md-12 bg-white text-primary">
                   <h1>Portfolio</h1>
                 </div>
                 <div className="front-end">
                     <h2>Front-End Development Examples</h2>
                     <div className="row row-cols-1 row-cols-sm-4 row-cols-md-4 row-cols-lg-4 bg-white text-dark">
                        <img className="port-img" src={HomeWorkHelp} alt="Homework Helper Homepage" />
                       <ul>
                         <li className="port-li"><span className="bold">Project Title:</span>Homework Helper</li>
                         <li className="port-li"><span className="bold">GitHub Repository:</span><a href="https://github.com/VScacchitti/HomeworkHelper">Homework Helper Repository</a></li>
                         <li className="port-li"><span className="bold">Deployed Application:</span><a href="https://vscacchitti.github.io/HomeworkHelper/">Homework Helper!</a></li>
                         <li className="port-li"><span className="bold">Description:</span>Created for grades K-12. Homework Helper is an online platform to keep track of assignments. This application also assists students with their homework in the form of a calculator, grammar bot, and spell checker. We’ve added a place for artwork as well! </li>
                       </ul>
                     </div>
                     <div
                       class="row row-cols-1 row-cols-sm-6 row-cols-md-4 row-cols-lg-8 bg-white text-dark">
                       <img className="port-img" src={QuizApp} alt="QuizAPP Homepage" />
                      <ul>
                     <li className="port-li"><span className="bold">Project Title:</span>QuizApp</li>
                     <li className="port-li"><span className="bold">GitHub Repository:</span><a href="https://github.com/VScacchitti/QuizApp">QuizApp Repository</a></li>
                     <li className="port-li"><span className="bold">Deployed Application:</span><a href="https://vscacchitti.github.io/QuizApp/">QuizAPP!</a></li>
                     <li className="port-li"><span className="bold">Description:</span>In this simple quiz application we use HTML, CSS, JS, and DOM manipulation to write a quiz about coding, This quiz is timed, begins on a start button, the quiz lets a user know if they are correct or incorrect by showing red or green on the selected answer. The top 5 quiz scores are saved onto a High Scores page where the user can enter their intials or name.</li>
                    </ul>
                   </div>
                   <div>
      <h2>Back-End Delvelopment Examples</h2>
      <section
      className="row row-cols-1 row-cols-sm-4 row-cols-md-4 row-cols-lg-4 bg-white text-dark">
      <img className="port-img" src={EmpSummGen} alt="Employee Summary Homepage"/>
    <ul>
      <li className="port-li"><span className="bold">Project Title:</span>Employee Summary Generator</li>
      <li className="port-li"><span className="bold">GitHub Repository:</span><a href="https://github.com/VScacchitti/Employee-Summary-Template-Engine">Employee Summary Generator Repository</a></li>
      <li className="port-li"><span className="bold">Deployed Application:</span><a>Head Over to my GitHub to install this!</a></li>
      <li className="port-li"><span className="bold">Description:</span>A node.js CLI that creates an employee summary dashboard based on user input.</li>
    </ul>
  </section>
  <br />
  <section
  className="row row-cols-1 row-cols-sm-6 row-cols-md-4 row-cols-lg-8 bg-white text-dark">
    <img className="port-img" src={EDM} />
    <ul>

      <li className="port-li"><span className="bold">Project Title:</span>E.D.M</li>
      <li className="port-li"><span className="bold">GitHub Repository:</span><a href="https://github.com/VScacchitti/E-D-M">E.D.M Repository</a></li>
      <li className="port-li"><span className="bold">Deployed Application:</span><a href="">Head Over to GitHub to install this!</a></li>
      <li className="port-li"><span className="bold">Description:</span>This command line application allows the user to access, add, update, or delete employee information from a database.</li>
    </ul>

  </section>
     </div>
     <div>
      <h2>Full-Stack Delvelopment Examples</h2>
      <section
      className="row row-cols-1 row-cols-sm-4 row-cols-md-4 row-cols-lg-4 bg-white text-dark">
      <img className="port-img" src={Rebate} alt="Re:bate Homepage"/>
    <ul>
      <li className="port-li"><span className="bold">Project Title:</span>Re: Bate</li>
      <li className="port-li"><span className="bold">GitHub Repository:</span><a href="https://github.com/VScacchitti/RE-Bate">Re: Bate Repository</a></li>
      <li className="port-li"><span className="bold">Deployed Application:</span><a href="https://sheltered-shelf-47742.herokuapp.com/">Re: Bate</a></li>
      <li className="port-li"><span className="bold">Description:</span>A custom made sequelize ORM. This application allows users to create a debate on a choice of three topics brough into our database from googleTrends. This application allows users to cooment on the topic above and see what others think about it.

      </li>
    </ul>
  </section>
  <br/>
  <section
  class="row row-cols-1 row-cols-sm-6 row-cols-md-4 row-cols-lg-8 bg-white text-dark">
    <img className="port-img" src={burger} alt="Burger Homepage"/>
    <ul>

      <li className="port-li"><span className="bold">Project Title:</span>Stop! Burger-Time!</li>
      <li className="port-li"><span className="bold">GitHub Repository:</span><a href="https://github.com/VScacchitti/Stop-Burger-Time">Stop! Burger-Time! Repository</a></li>
      <li className="port-li"><span className="bold">Deployed Application:</span><a href="https://whispering-reef-69189.herokuapp.com/#/">Stop! Burger-Time</a></li>
      <li className="port-li"><span className="bold">Description:</span>A Burger ORM that allows the user to create a list of burgers and then click a button to eat them and change the column to devour. This is a designed in an MVC style and uses mySQL as a database.</li>
    </ul>

  </section>
     </div>
                 </div>
                </div>
            </div>
        </div>

    )
}

export default Portfolio;