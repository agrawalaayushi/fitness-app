import React, { Component } from 'react';
import { Label, Menu, Tab, Icon } from 'semantic-ui-react'
import ScheduleFitnessView from './schedule-fitness-view';
import SchedulePilatesView from './schedule-pilates-view';
import ScheduleYogaView from './schedule-yoga-view';
import ScheduleDanceView from './schedule-dance-view';


class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }
  getScheduleYoga () {
    return <ScheduleYogaView />
  }
  getScheduleFitness () {
    return <ScheduleFitnessView />
  }
  getScheduleDance () {
    return <ScheduleDanceView />
  }
  getSchedulePilates () {
    return <SchedulePilatesView />
  }
  getScheduleTabs () {
      const panes = [
        { menuItem: { key: 'scheduleYoga', icon: 'image', content: 'Yoga' }, render: () => <Tab.Pane>{this.getScheduleYoga()}</Tab.Pane> },
        { menuItem: { key: 'scheduleFitness', icon: 'image', content: 'Fitness' }, render: () => <Tab.Pane>{this.getScheduleFitness()}</Tab.Pane> },
        { menuItem: { key: 'scheduleDance', icon: 'image', content: 'Dance' }, render: () => <Tab.Pane>{this.getScheduleDance()}</Tab.Pane> },
        { menuItem: { key: 'schedulePilates', icon: 'image', content: 'Pilates' }, render: () => <Tab.Pane>{this.getSchedulePilates()}</Tab.Pane> },
      ]
        return (
        <Tab menu={{ secondary: true, pointing: true}} panes={panes} />
      )
      
  }
  render() {
    return (
      <div className="fitness-main-view">
        <section className="header-section background-cover top-center" style={{backgroundImage: 'url(https://www.hubspot.com/hubfs/e064_-_CRM_landing_page_assets/hero-couch.jpg)'}}>
          <div className="header-center">
            <h2 className="heading center">Let us find your perfect <span className="highlight"> &nbsp;fitness&nbsp;</span> class!</h2>
            <div className="search-wrapper">
              <input type="text" className="search-input" name="location-name" placeholder="Enter your location"></input>
              <button type="submit" value="submit" className="btn-submit">SEARCH</button>
            </div>
          </div>
        </section>
        <main className="schedule-fitness-wrp">
         {this.getScheduleTabs()}
        </main>
      </div>
    );
  }
}


export default (Schedule);
