import React from "react";
import "./Home.css";
import * as hom from "react-bootstrap";
import logo from "../../Assets/logo.jpg";
import log from "../../Assets/log.png";
import plum from "../../Assets/plum.webp";
import repair from "../../Assets/repair.webp";
import sew from "../../Assets/sewage.jpg";
import solar from "../../Assets/solar.webp";
import unblock from "../../Assets/toi.png";
import * as rev from "react-reveal";

function Home() {
  return (
    <div>
      <div className="sect1">
        <div className="nam1"></div>
        <div className="nam2">
          <hom.Container>
            <div className="topsec">
              <div className="topcontact">Give us a call?</div>
              <div className="topnumber">12345678</div>
            </div>
          </hom.Container>
        </div>
      </div>
      <header>
        <div id="nav">
          <nav className="navigation">
            <div className="logo">
              {/* <img src='../Assets/log.png' alt="logo" className="img-fluid"/> */}
              <hom.Image
                src={logo}
                alt="logo"
                className=" img d-block w-100"
                fluid
              />
            </div>
            <ul>
              <li>
                <a href="#learnmore">
                  {" "}
                  Learn more <i className="fas fa-caret-right"></i>
                </a>
              </li>
              {/* <li><a href="/login ">Customer <i className="fas fa-caret-right"></i></a></li> */}
              <li>
                <a href="/Technicians">
                  Technician <i className="fas fa-caret-right"></i>
                </a>
              </li>
              <li>
                <a href="#0794636596">
                  <i className="fas fa-phone-alt"></i> 1234567890
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="homeimage">
        <div className="overlay">
          <h2>In need of quality plumbing solutions?</h2>
          <p>Search no more, we've got you covered</p>
          <div className="btnbody">
            <div className="buton">Contact us</div>
          </div>
        </div>
      </div>

      <div className="serv">
        <div className="services" id="learnmore">
          <h2>Services we Offer</h2>
          <p>We pride ourselves in delivering quality services with efficiency</p>
          <div
            style={{
              paddingBottom: "30px",
              position: "relative",
            }}
          ></div>

          <hom.Container className="mx-auto">
            <hom.Row className="mx-auto">
              <hom.Col lg={4} sm={10} xs={8} className="mx-auto mb-4">
                <div className="service">
                  <img src={plum} alt="#/" />
                  <h3>plumbing work</h3>
                </div>
              </hom.Col>
              <hom.Col lg={4} sm={10} xs={8} className="mx-auto mb-4">
                <div className="service">
                  <img src={unblock} alt="#/" />
                  <h3>Unblocking</h3>
                </div>
              </hom.Col>
              <hom.Col lg={4} sm={10} xs={8} className="mx-auto mb-4">
                <div className="service">
                  <img src={solar} alt="#/" />
                  <h3>solar installation</h3>
                </div>
              </hom.Col>
              <hom.Col lg={4} sm={10} xs={8} className="mx-auto mb-4">
                <div className="service">
                  <img src={sew} alt="#/" />
                  <h3>waste&storm water</h3>
                </div>
              </hom.Col>
              <hom.Col lg={4} sm={10} xs={8} className="mx-auto mb-4">
                <div className="service">
                  <img src={repair} alt="#/" />
                  <h3>Repairs & Renovation</h3>
                </div>
              </hom.Col>
            </hom.Row>
          </hom.Container>
          <div className="service-icons"></div>
        </div>

        {/* <hom.Container className="courel">

        </hom.Container> */}

      </div>

      <div className="contact">
        <hom.Container className="mx-auto">
          <hom.Row>
            <hom.Col className="mx-auto" lg={4}>
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
            </hom.Col>

            <hom.Col className="mx-auto" lg={4}>
              <div className="footer-links">
                <div className="footer-logo">
                  <hom.Image
                    src={log}
                    className="d-block w-100"
                    fluid
                    alt="logo"
                  />
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
            </hom.Col>

            <hom.Col className="mx-auto" lg={4}>
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
            </hom.Col>
          </hom.Row>
        </hom.Container>
        <hr />
        <p className="copyright">
          {" "}
          &copy; <span>Walez 2023 All Rights Reserved</span>
        </p>
      </div>
    </div>
  );
}

export default Home;
