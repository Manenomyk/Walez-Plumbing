import React from 'react';
import './About.css';
import * as abou from 'react-bootstrap';
import { BsTelephoneFill } from "react-icons/bs";

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
    </div>
  )
}

export default About