import React, { Component } from 'react';
import { FooterView } from '../common/footer-view';
import { COVER_IMAGE } from '../../constants/images';

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  //-----------------------------------
  // Methods
  //-----------------------------------
  //-----------------------------------
  // Views
  //-----------------------------------
  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  render() {
    return (
       <div className="fitness-main-view">
          <section className="header-section background-cover top-center" style={{backgroundImage: 'url(' + COVER_IMAGE +')'}}>
            <div className="header-center">
              <h2 className="heading center">Let us find your perfect <span className="highlight"> &nbsp;fitness&nbsp;</span> class!</h2>
              <div className="search-wrapper">
                <input type="text" className="search-input" name="location-name" placeholder="Enter your location"></input>
                <button type="submit" value="submit" className="btn-submit">SEARCH</button>
              </div>
            </div>
          </section>
          <main className="schedule-fitness-wrp">
          Articles View
          </main>
          <FooterView />
     </div>
    );
  }
}


export default (Articles);
