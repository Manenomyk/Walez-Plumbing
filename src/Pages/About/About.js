import React from 'react';
import './About.css';
import * as abou from 'react-bootstrap';
import { BsTelephoneFill } from "react-icons/bs";
import logo from "../../Assets/logo.jpg";
import abo from "../../Assets/abou.jpg";
import * as rev from "react-reveal";
import log from "../../Assets/log.png";


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
                <a href="/">
                  {" "}
                  Home <i className="fas fa-caret-right"></i>
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
      <div className="homeimage1">
        <rev.Zoom delay={1000}>
        <div className="overlay">
            <h2>Having any inquiries about us?</h2>
            <p>Get to know us better</p>
            <div className="btnbody">
              <a className="linky" href="#contact">
              <div className="buton">Reach out</div>
              </a>
            </div>
          </div>
        </rev.Zoom>
      </div>
      <div className="contact">
        <a id="contact"></a>
        <abou.Container className="mx-auto">
          <abou.Row>
            <abou.Col className="mx-auto" lg={4}>
              <div className="contacts">
                <h3>Contact us</h3>
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>GA House,2nd
                    floor,Upperhill
                  </li>
                  <li>
                    <i className="fas fa-phone-alt"></i>0714582808/0796921877
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i> waltermusoka@gmail.com
                  </li>
                </ul>
                <h3 className="social">Get Social</h3>
                <ul className="social-links">
                  <li>
                    <a
                      href="#facebook"
                      style={{ fontSize: "20px", color: " black" }}
                    >
                      <i className="fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#twitter">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </abou.Col>

            <abou.Col className="mx-auto" lg={4}>
              <div className="footer-links">
                <div className="footer-logo">
                <rev.Zoom delay={1000}>
                  <abou.Image
                    src={log}
                    className="d-block w-100"
                    fluid
                    alt="logo"
                  />
                  </rev.Zoom>
                </div>
                <ul>
                  <li>
                    <a href="#service">Service</a>
                  </li>
                  <li>
                    <a href="#policy">Policy</a>
                  </li>
                  <li>
                    <a href="#technicians">Technicians</a>
                  </li>
                </ul>
              </div>
            </abou.Col>

            <abou.Col className="mx-auto" lg={4}>
              <form>
                <rev.Fade right delay={1000}>
                  <div>
                    <input
                      name="name"
                      className="form form-control shadow-none mb-3 pt-3 pb-3"
                      placeholder="Your Name"
                      type="text"
                      required
                    />
                  </div>
                </rev.Fade>

                <rev.Fade right delay={1200}>
                  <div>
                    <input
                      name="email"
                      type="email"
                      className="form form-control shadow-none mb-3 pt-3 pb-3 "
                      placeholder="Your Email Address"
                      required
                    />
                  </div>
                </rev.Fade>

                <rev.Fade right delay={1400}>
                  <div>
                    <textarea
                      name="message"
                      className="form form-control shadow-none mb-3"
                      placeholder="Your Messsage"
                      rows="4"
                      required
                    />
                  </div>
                </rev.Fade>

                <rev.Zoom delay={1600}>
                  <div>
                    <button type="submit" className="btn btn-danger">
                      Messsage
                    </button>
                  </div>
                </rev.Zoom>
              </form>
            </abou.Col>
          </abou.Row>
        </abou.Container>
        <hr />
        <p className="copyright">
          {" "}
          &copy; <span>Walez 2023 All Rights Reserved</span>
        </p>
      </div>
    </div>
  )
}

export default About