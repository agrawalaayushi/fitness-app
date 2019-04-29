import React, { Component } from 'react';

class ScheduleFitnessView extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        data: [
            {
                name: 'Perfect Body System',
                image: '',
                created_by: 'Jasmine',
                description: '',
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
                total_members: 14,
            },
            {
                name: 'Power Pump',
                image: '',
                created_by: 'Garg Admin',
                description: '',
                club_name: 'Iron Addicts Gym',
                partners: ['BeActive'],
                review_count: 21,
                avg_review: 4.5,
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
            },
            {
                name: 'Body Soul',
                image: '',
                created_by: 'Jammie Taylor',
                description: '',
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
                ]
            },
            {
                name: 'Rapid Fat Burning',
                image: '',
                created_by: 'Alice',
                description: '',
                club_name: 'Fit Life',
                partners: ['Multisport'],
                review_count: 143,
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
                ]
            },
            {
                name: 'Rapid Fat Burning',
                image: '',
                created_by: 'Alice',
                description: '',
                club_name: 'Fit Life',
                partners: ['Multisport'],
                review_count: 23,
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
                ]
            },
            {
                name: 'Rapid Fat Burning',
                image: '',
                created_by: 'Alice',
                description: '',
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
                ]
            }
        ]
    };
  }

  getScheduleFitnessView () {
    return (
        <div> Schedule Fitness View
        </div>
    )
  }
  
  render() {
    return (
        <div className="schedule-fitness-wrp">
           {this.getScheduleFitnessView()}
        </div>
    );
  }
}


export default (ScheduleFitnessView);
