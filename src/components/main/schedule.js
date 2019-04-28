import React, { Component } from 'react';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  
  render() {
    return (
      <div className="fitness-main-view">
        <div className="header-center">
          <h2 className="heading center">Let us find your perfect <span className="highlight"> &nbsp;fitness&nbsp;</span> class!</h2>
          <div className="search-wrapper">
            <input type="text" className="search-input" name="location-name" placeholder="Enter your location"></input>
            <button type="submit" value="submit" className="btn-submit">SEARCH</button>
          </div>
        </div>
        Schedule View
      </div>
    );
  }
}


export default (Schedule);
