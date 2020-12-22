import React from "react";

function Footer() {
  return (
  <footer>
    <nav className="navbar fixed-bottom navbar-dark bg-primary text-align-center">
      <div className="container-fluid text-center" id="footer">
       &copy; {new Date().getFullYear()} COPYRIGHT 
      </div>
    </nav>
  </footer>
  );
}

export default Footer;