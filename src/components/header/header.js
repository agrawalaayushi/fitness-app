import React from 'react';
import '../../styles/app.scss';
import mail from '../../assets/svg/mail-icon.svg';
import heartPulse from '../../assets/images/icon-heart-pulse.png'; 
import { Nav } from './nav'; 

export const Header = () => {
  return (
    <header className="header-container-wrapper">
      <div className="header-container container-fluid">
        <div className="row-fluid-wrapper row-number-4">
          <div className="row-fluid">
             <section className="header-section">
               <div className="nav">
                <div className="nav-left">
                  <a href="/" className="align-center"> 
                    <span ><img className="heart-icon" src={heartPulse} alt="Fitness_logo"/></span>
                    <span className="nav-item">FIT<span className="highlight">ME</span></span>
                  </a>
                  <Nav/>
                </div>
                <div className="nav-right">
                  <div className="notification-wrp">
                    <div className="notification">
                      <img className="mail-icon" src={mail} alt="Notification_icon"/>
                      <span className="green-dot"></span>
                    </div>
                  </div>
                  <div className="profile-circle">

                  </div>
                  <div className="profile-name">
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
