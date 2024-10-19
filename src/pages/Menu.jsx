import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
function Menu() {
    return (
      <>
      {/* Menu header */}
        <div className="container d-md-block r">
          <header className="row align-items-center py-2">
            <div className="col-6 col-md-4">
              <img src="/src/assets/images/image 650 1.png" alt="cuvette" className="cuvette img-fluid" />
            </div>
            <div className="col-6 col-md-8 text-end d-flex justify-content-end align-items-center">
              <span className="contact me-3">Contact</span><br />
              
              
              <nav className="navbar navbar-light bg-light p-0" style={{ border: '2px solid black', borderRadius: '5px' }}>
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ><span className="bi bi-person">  </span>
                    Your Name
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><Link to='/companysignup' className="dropdown-item" style={{ textDecoration: 'none' }}>Logout</Link></li>

                  </ul>
                </div>
              </nav>
            </div>
          </header>
        </div>
        <hr />

        <div className="container-fluid">
      <div className="row">
        <nav className="col-md-1 col-lg-1 d-md-block bg-light min-vh-100 border ">
          <div className="position-sticky">
            <ul style={{alignContent:'center'}}  className="nav flex-column">
              <li className="nav-item">
                <a  className="nav-link active" href="#">
                  <span style={{color:'grey'}} className="bi bi-house-fill fs-1"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
            
        <main className="col-md-6 ms-sm-auto col-lg-10 px-4">
            <br />
            <Link to="/interviewdetails">
          <button id="btn1" style={{width:'300px',fontFamily:'DM Sans'}} className="btn btn-primary">Create Interview</button>
          </Link>
        </main>
      </div>
    </div>
      </>
    );
  }
  
  export default Menu;
  