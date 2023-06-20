import React from 'react';
import './About.css';
import * as abou from 'react-bootstrap';
import { BsTelephoneFill } from "react-icons/bs";
import logo from "../../Assets/logo.jpg";
import * as rev from "react-reveal";


function About() {
  return (
    <div>
      <div className="sect1">
        <div className="nam1"></div>
        <div className="nam2">
          <abou.Container>
            <div className="topsec">
              <div className="topcontact">Give us a call?</div>
              <div className="topnumber">
                {" "}
                <BsTelephoneFill /> 0714582808
              </div>
            </div>
          </abou.Container>
        </div>
      </div>
      <header>
        <div id="nav">
          <nav className="navigation">
            <div className="logo">
              <rev.Zoom delay={1000}>
                <abou.Image
                  src={logo}
                  alt="logo"
                  className=" img d-block w-100"
                  fluid
                />
              </rev.Zoom>
            </div>
            <ul>
              <li>
                <a href="/about">
                  {" "}
                  Learn more <i className="fas fa-caret-right"></i>
                </a>
              </li>
              {/* <li><a href="/login ">Customer <i className="fas fa-caret-right"></i></a></li> */}
              <li>
                <a href="#service">
                  Services <i className="fas fa-caret-right"></i>
                </a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default About