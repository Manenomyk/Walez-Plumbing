import React from 'react'
import './Home.css';
import * as hom from 'react-bootstrap';
import logo from '../../Assets/logo.jpg';
import plum from '../../Assets/plumb.jpg';

function Home() {
  return (
    <div>
        <div className='sect1'>
            <div className='nam1'></div>
            <div className='nam2'>
              <hom.Container>
                <div className='topsec'>
                <div className='topcontact'>Give us a call?</div>
                <div className='topnumber'>12345678</div>
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
            alt='logo'
            className='img d-block w-100'
            fluid
            />
            </div>
            <ul>
                <li><a href="#learnmore"> Learn more <i className="fas fa-caret-right"></i></a></li>
                <li><a href="/login ">Customer <i className="fas fa-caret-right"></i></a></li>
                <li><a href="/techlogin">Technician <i className="fas fa-caret-right"></i></a></li>
                <li><a href="#0794636596"><i className="fas fa-phone-alt"></i> 0794636596</a></li>
            </ul>
        </nav>
        </div>
    </header>
    <div className='homeimage'>
      <hom.Image 
      src='plum'
      alt='home picture'
      className='d-block w-100'
      fluid
      />
    </div>
    </div>
  )
}

export default Home