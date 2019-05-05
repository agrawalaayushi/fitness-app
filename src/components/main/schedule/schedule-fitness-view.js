import React, { Component } from 'react';
import { NoDataFound } from '../../common/no-data-found';
import FitnessCardView from '../../common/fitness-card-view';

class ScheduleFitnessView extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        data: [
            {
                name: 'Perfect Body System',
                image: "",
                created_by: 'Jasmine',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                club_name: 'Health Forge',
                partners: ['Multisport'],
                review_count: 43,
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
                total_members: 14,
            },
            {
                name: 'Power Pump',
                image: '',
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
                total_active_members: 5
            },
            {
                name: 'Body Soul',
                image: '',
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
                        name: "Ruby Jordan",
                        user_image: "",
                        active: false
                    }
                ],
                total_active_members: 5
            },
            {
                name: 'Rapid Fat Burning',
                image: '',
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
                        name: "Ruby Jordan",
                        user_image: "",
                        active: false
                    }
                ],
                total_active_members: 5
            },
            {
                name: 'Rapid Fat Burning',
                image: '',
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
                total_active_members: 5
            },
            {
                name: 'Rapid Fat Burning',
                image: '',
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
                total_active_members: 5
            }
        ]
    };
  }

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
  
  render() {
    return (
        <div className="schedule-fitness-view">
           {this.getScheduleFitnessView()}
        </div>
    );
  }
}


export default (ScheduleFitnessView);
