import React, { useRef, useState } from "react";
import "./Home.css";
import * as hom from "react-bootstrap";
import logo from "../../Assets/logo.jpg";
import log from "../../Assets/log.png";
import plum from "../../Assets/plum.webp";
import repair from "../../Assets/repair.webp";
import sew from "../../Assets/sewage.jpg";
import solar from "../../Assets/solar.webp";
import unblock from "../../Assets/toi.png";
import pro from "../../Assets/pro.jpg";
import panel from "../../Assets/panel.jpeg";
import pipe from "../../Assets/pipe.jpeg";
import sola from "../../Assets/solar.jpeg";
import tap from "../../Assets/tap.jpeg";
import * as rev from "react-reveal";
import { BsTelephoneFill } from "react-icons/bs";
import { Helmet } from "react-helmet";

function Home() {
  const [successResponce, setSuccessResponce] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qk3ecbi",
        "template_h2a286a",
        form.current,
        "KFsuGcuTAtVQTcEYG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setSuccessResponce("Message sent successfully");
    setTimeout(() => {
      setSuccessResponce("");
    }, 2000);
  };
  return (
    <div>
      <div
        style={{
          marginLeft: "45%",
          marginTop: "15%",
          position: "fixed",
          zIndex: "2",
        }}
      >
        {successResponce && (
          <div
            style={{
              color: "white",
              fontSize: "16px",
              width: "17vw",
              background: "#28a745",
              borderRadius: "15px",
              paddingTop: "15px",
              paddingBottom: "15px",
              paddingLeft: "6%",
              border: "1px solid lightgray",
              opacity: "0.7",
              transition: "0.5",
            }}
          >
            {successResponce}
          </div>
        )}
      </div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Walez Plumbing</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta
          name="description"
          content="Awesome resort you need to checkout"
        />
      </Helmet>
      <div className="sect1">
        <div className="nam1"></div>
        <div className="nam2">
          <hom.Container>
            <div className="topsec">
              <div className="topcontact">Give us a call?</div>
              <div className="topnumber">
                {" "}
                <BsTelephoneFill /> 0714582808
              </div>
            </div>
          </hom.Container>
        </div>
      </div>
      <header>
        <div id="nav">
          <nav className="navigation">
            <div className="logo">
              <rev.Zoom delay={1000}>
                <hom.Image
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
      <div className="homeimage">
        <rev.Zoom delay={1000}>
          <div className="overlay">
            <h2>In need of quality plumbing solutions?</h2>
            <p>Search no more, we've got you covered</p>
            <div className="btnbody">
              <a className="linky" href="#contact">
                <div className="buton">Contact us</div>
              </a>
            </div>
          </div>
        </rev.Zoom>
      </div>

      <div className="about">
        <hom.Container className="aboutcont">
          <hom.Row>
            <hom.Col lg={6} className="mx-auto mb-5">
              <h3 className="abouthead">
                Quality and Expertise at your Dispposal
              </h3>
              <p>
                We are a reknown plumbing company that prides itself <br />
                in not only the quality we deliver but also in the expertises{" "}
                <br />
                in service delivery.
              </p>
              <p className="mb-4">
                Our quest as a company is for satisfaction to our clients
                through
                <br />
                efficiency and quality srvice delivery. With out team of well
                trained <br />
                experts, our clients can rest be assured of nothing but the
                best.
              </p>
              <div className="btn btn-primary">Reach Out</div>
            </hom.Col>
            <hom.Col lg={5} className="mx-auto mb-5">
              <rev.Zoom delay={1000}>
                <hom.Image
                  src={pro}
                  alt="image"
                  className="d-block w-100"
                  fluid
                />
              </rev.Zoom>
            </hom.Col>
          </hom.Row>
        </hom.Container>
      </div>

      <div className="serv">
        <a id="service"></a>
        <div className="services" id="learnmore">
          <h2>Services we Offer</h2>
          <p>
            We pride ourselves in delivering quality services with efficiency
          </p>
          <div
            style={{
              paddingBottom: "30px",
              position: "relative",
            }}
          ></div>

          <hom.Container className="mx-auto">
            <hom.Row className="mx-auto">
              <hom.Col lg={4} sm={10} xs={12} className="mx-auto mb-4">
                <rev.Zoom delay={1000}>
                  <div className="service">
                    <img src={plum} alt="#/" />
                    <h3>plumbing work</h3>
                  </div>
                </rev.Zoom>
              </hom.Col>

              <hom.Col lg={4} sm={10} xs={12} className="mx-auto mb-4">
                <rev.Zoom delay={1000}>
                  <div className="service">
                    <img src={unblock} alt="#/" />
                    <h3>Unblocking</h3>
                  </div>
                </rev.Zoom>
              </hom.Col>
              <hom.Col lg={4} sm={10} xs={12} className="mx-auto mb-4">
                <rev.Zoom delay={1000}>
                  <div className="service">
                    <img src={solar} alt="#/" />
                    <h3>solar installation</h3>
                  </div>
                </rev.Zoom>
              </hom.Col>
              <hom.Col lg={4} sm={10} xs={12} className="mx-auto mb-4">
                <rev.Zoom delay={1000}>
                  <div className="service">
                    <img src={sew} alt="#/" />
                    <h3>waste&storm water</h3>
                  </div>
                </rev.Zoom>
              </hom.Col>
              <hom.Col lg={4} sm={10} xs={12} className="mx-auto mb-4">
                <rev.Zoom delay={1000}>
                  <div className="service">
                    <img src={repair} alt="#/" />
                    <h3>Repairs & Renovation</h3>
                  </div>
                </rev.Zoom>
              </hom.Col>
            </hom.Row>
          </hom.Container>
          <div className="service-icons"></div>
        </div>
      </div>

      <div>
        <div className="services">
          <div>
            <h2>Sample projects</h2>
            <p>Check out some of the projects we have handled</p>
          </div>
        </div>

        <hom.Container className="galacont">
          <hom.Row className="mb-2">
            <hom.Col lg={4} xs={8} className="mx-auto mb-3 ">
              <hom.Image
                src={panel}
                className="d-block w-100 imagegala"
                alt="picture1"
                fluid
              />
            </hom.Col>
            <hom.Col lg={4} xs={8} className="mx-auto mb-3">
              <hom.Image
                src={pipe}
                className="d-block w-100 imagegala"
                alt="picture2"
                fluid
              />
            </hom.Col>
            <hom.Col lg={4} xs={8} className="mx-auto mb-3">
              <hom.Image
                src={tap}
                className="d-block w-100 imagegala"
                alt="picture3"
                fluid
              />
            </hom.Col>
          </hom.Row>
        </hom.Container>
      </div>
      <div className="serv">
        <div className="services" id="learnmore">
          <h2>Why Work with us</h2>

          <div
            style={{
              paddingBottom: "30px",
              position: "relative",
            }}
          ></div>
          <div className="whysection">
            <a id="about"></a>
            <hom.Container className="whyus">
              <hom.Row>
                <hom.Col lg={3} sm={10} xs={9} className="mx-auto mb-3">
                  <rev.Zoom delay={1000}>
                    <h4 className="whyhead">Reliable bookings</h4>
                    <div className="contentt">
                      We provide on-site services from 7.am to 7 p.m.,7days a
                      week.Simply book online or contact us through a phone call
                      and get the service as soon as the next day
                    </div>
                  </rev.Zoom>
                </hom.Col>
                <hom.Col lg={3} sm={10} xs={9} className="mx-auto mb-3">
                  <rev.Zoom delay={1000}>
                    <h4 className="whyhead1">Security Guarantee</h4>
                    <div className="contentt">
                      All our Tecnicians have undergone rigorous identity checks
                      and personality interviews. We make sure that you do not
                      have to worry about your security and that of your items.
                    </div>
                  </rev.Zoom>
                </hom.Col>
                <hom.Col lg={3} sm={10} xs={9} className="mx-auto mb-3">
                  <rev.Zoom delay={1000}>
                    <h4 className="whyhead">Proffesionalism</h4>
                    <div className="contentt">
                      Our Technicals are highly experienced and specialised.This
                      is complimented with our dedication to perfection.We use
                      your reviews and feedback to continuously improve our
                      service
                    </div>
                  </rev.Zoom>
                </hom.Col>
                <hom.Col lg={3} sm={10} xs={9} className="mx-auto mb-3">
                  <rev.Zoom delay={1000}>
                    <h4 className="whyhead1">Pocket friendly services</h4>
                    <div className="contentt">
                      We have made it sure that our services are cost friendly
                      to the clients as we only charge the price worth of the
                      task. And with this you can be sure to have access to high
                      quality services.
                    </div>
                  </rev.Zoom>
                </hom.Col>
              </hom.Row>
            </hom.Container>
          </div>
        </div>
      </div>

      <div className="contact">
        <a id="contact"></a>
        <hom.Container className="mx-auto">
          <hom.Row>
            <hom.Col className="mx-auto" lg={4}>
              <div className="contacts">
                <h3>Contact us</h3>
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>Along macharia Road
                    King's Place
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
                  <rev.Zoom delay={1000}>
                    <hom.Image
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
