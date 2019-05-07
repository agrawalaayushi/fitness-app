import React from 'react';
import '../../styles/app.scss';
import { Nav } from './nav'; 

export const Header = (props) => {
  return (
    <header className="header-container-wrapper">
      <div className="header-container container-fluid">
        <div className="row-fluid-wrapper row-number-4">
          <div className="row-fluid">
             <section className="header-section">
               <div className="nav">
                <div className="nav-left">
                  <a href="/" className="align-center"> 
                  <i className="fa fa-heart-o heart-icon"></i>
                    <span className="nav-item">FIT<span className="highlight">ME</span></span>
                  </a>
                  <Nav location={props}/>
                </div>
                <div className="nav-right">
                  <div className="notification-wrp">
                    <div className="notification">
                    <i className="fa fa-envelope-o mail-icon"></i>
                      <span className="green-dot"></span>
                    </div>
                  </div>
                  <div className="profile-circle">
                  </div>
                  <div className="user-name">
                    Aayushi
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </header>
  )
}
