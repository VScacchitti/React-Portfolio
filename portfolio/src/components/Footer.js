import React from "react";

function Footer() {
  return (
  <footer>
    <nav className="navbar fixed-bottom navbar-light bg-primary">
      <div className="container-fluid">
       &copy; {new Date().getFullYear()} COPYRIGHT 
      </div>
    </nav>
  </footer>
  );
}

export default Footer;