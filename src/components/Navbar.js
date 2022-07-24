import React from "react";
import { Link, NavLink } from "react-router-dom";
function Navbar(props) {
    return (
        <nav  className="navbar navbar-dark bg-dark  navbar-expand-lg ">
  <div  className="container-fluid">
    <a  className="navbar-brand" href="#">Mohamed Zghidi</a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarNav">
      <ul  className="navbar-nav">
        <li  className="nav-item">
        <NavLink exact  className="nav-link" to="/">Home</NavLink>
        </li>
        <li  className="nav-item">
          {/* <a  className="nav-link" href="#">Skills</a> */}
          <NavLink  className="nav-link" to="/skills">Skills</NavLink>
        </li>
        <li  className="nav-item">
        <NavLink  className="nav-link" to="/projects">Projects</NavLink>
        </li>
        <li  className="nav-item">
        <NavLink  className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
    
}

export default Navbar