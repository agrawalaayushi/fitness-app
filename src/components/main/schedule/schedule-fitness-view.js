import React, { Component } from 'react';
import { NoDataFound } from '../../common/no-data-found';
import FitnessCardView from '../../common/fitness-card-view';
import { SAMPLE_IMAGE, SAMPLE_IMAGE2, SAMPLE_IMAGE3 } from '../../../constants/images';

class ScheduleFitnessView extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        data: [
            {
                name: 'Perfect Body System',
                image: SAMPLE_IMAGE,
                created_by: 'Jasmine',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                club_name: 'Health Forge',
                partners: ['Multisport'],
                review_count: 43,
                avg_review: 2.6,
                members: [
                    {
                        name: "Mark Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Orange Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Apple Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Cheeku Jordan",
                        user_image: "",
                        active: false
                    },
                    {
                        name: "Mango Jordan",
                        user_image: "",
                        active: false
                    },
                    {
                        name: "Ruby Jordan",
                        user_image: "",
                        active: false,
                    }
                ],
                total_active_members: 3,
                total_members: 6,
            },
            {
                name: 'Power Pump',
                image: SAMPLE_IMAGE2,
                created_by: 'Garg Admin',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                club_name: 'Iron Addicts Gym',
                partners: ['BeActive'],
                review_count: 21,
                avg_review: 3.4,
                members: [
                    {
                        name: "Mark Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Orange Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Apple Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Cheeku Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Mango Jordan",
                        user_image: "",
                        active: false
                    },
                    {
                        name: "Ruby Jordan",
                        user_image: "",
                        active: false
                    }
                ],
                total_active_members: 4,
                total_members: 6,
            },
            {
                name: 'Body Soul',
                image: SAMPLE_IMAGE3,
                created_by: 'Jammie Taylor',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                club_name: 'Gold Gym Ohio',
                partners: ['BeActive', 'Multisport'],
                review_count: 12,
                avg_review: 4,
                members: [
                    {
                        name: "Mark Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Orange Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Apple Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Cheeku Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Mango Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Mango Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Mango Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Mango Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Ruby Jordan",
                        user_image: "",
                        active: false
                    }
                ],
                total_active_members: 8,
                total_members: 9
            },
            {
                name: 'Rapid Fat Burning',
                image: SAMPLE_IMAGE3,
                created_by: 'Alice',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                club_name: 'Fit Life',
                partners: ['Multisport'],
                review_count: 143,
                avg_review: 2.5,
                members: [
                    {
                        name: "Mark Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Orange Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Apple Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Cheeku Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Mango Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Mango Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Ruby Jordan",
                        user_image: "",
                        active: false
                    }
                ],
                total_active_members: 6,
                total_members: 7
            },
            {
                name: 'Rapid Fat Burning',
                image: SAMPLE_IMAGE,
                created_by: 'Alice',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                club_name: 'Fit Life',
                partners: ['Multisport'],
                review_count: 23,
                avg_review: 3.5,
                members: [
                    {
                        name: "Mark Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Orange Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Apple Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Cheeku Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Mango Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Ruby Jordan",
                        user_image: "",
                        active: false
                    }
                ],
                total_active_members: 5,
                total_members: 6
            },
            {
                name: 'Rapid Fat Burning',
                image: SAMPLE_IMAGE2,
                created_by: 'Alice',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                club_name: 'Fit Life',
                partners: ['Multisport'],
                review_count: 21,
                avg_review: 4,
                members: [
                    {
                        name: "Mark Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Orange Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Apple Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Cheeku Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Mango Jordan",
                        user_image: "",
                        active: true
                    },
                    {
                        name: "Ruby Jordan",
                        user_image: "",
                        active: false
                    }
                ],
                total_active_members: 5,
                total_members: 6
            }
        ]
    };
  }

  //-----------------------------------
  // Methods
  //-----------------------------------


  //-----------------------------------
  // View
  //-----------------------------------

  //render common component of fitness card view
  getFitnessCard (card, index) {
    return(
        <FitnessCardView
          {...this.props}
          key={index}
          fitness={card}
          starTotal={5}
        />
      )
  }

  //render multiple card view
  getScheduleFitnessView () {
    const { data } = this.state
    return (
        <div className="fitness-body">
            {data.length > 0 ? 
                <div className={"fitness-card-wrp"}>
                    { data.map((item, index) =>( this.getFitnessCard(item, index) )) }
                </div> : 
                <NoDataFound />
            } 
        </div>
    )
  }
  
  //-----------------------------------
  // Lifecycle
  //-----------------------------------

  render() {
    return (
        <div className="schedule-fitness-view">
            <div className="dropdown-wrp">Sort By: <span className="selected-dropdown">Closest distance</span></div>
           {this.getScheduleFitnessView()}
        </div>
    );
  }
}


export default (ScheduleFitnessView);
