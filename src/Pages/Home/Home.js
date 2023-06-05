import React from 'react'
import './Home.css';
import * as hom from 'react-bootstrap';

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
    </div>
  )
}

export default Home