import React from "react";

function NavBar () {
    return (
        <nav className="navbar fixed-top navbar-dark bg-primary text-white">
          <a className="navbar-brand" href="https://www.instagram.com/vpscacchitti/"
            >Vince Scacchitti</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <section className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <section className="navbar-nav">
              <a className="nav-link active" href="index.html"
                >About Me <span class="sr-only">(current)</span></a
              >
              <a className="nav-link" >Portfolio</a>
              <a className="nav-link" >Contact</a>
            </section>
          </section>
        </nav>
    )
}

export default NavBar;