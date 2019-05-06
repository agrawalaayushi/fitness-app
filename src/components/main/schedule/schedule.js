import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react'
import ScheduleFitnessView from './schedule-fitness-view';
import SchedulePilatesView from './schedule-pilates-view';
import ScheduleYogaView from './schedule-yoga-view';
import ScheduleDanceView from './schedule-dance-view';
import { FooterView } from '../../common/footer-view';

import { COVER_IMAGE } from '../../../constants/images';

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
        <Tab menu={{ secondary: true, pointing: true}} panes={panes} defaultActiveIndex={1}/>
      )
      
  }
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
         {this.getScheduleTabs()}
        </main>
        <FooterView />
      </div>
    );
  }
}


export default (Schedule);
