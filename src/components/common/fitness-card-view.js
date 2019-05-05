import React from 'react';
import { IMAGE_PLACEHOLDER } from '../../constants/images';

class FitnessCardView extends React.Component {


    getMembers(item, index) {
        const userImage = item.user_image || IMAGE_PLACEHOLDER;
        return (
           <span key={'user'+index}><img className="profile-circle" src={`${userImage}`} alt="Member_image"/></span>
        )
    }

    getPartners(item, index) {
        return (
            <span key={'member'+index} className="partner">{item}, </span>
        )
    }

   

    render() {
        const { fitness, starTotal } = this.props;
        const fitnessImage = fitness.image || IMAGE_PLACEHOLDER;
        const members = fitness.members;
        const partners = fitness.partners;
        const starPercentage = (fitness.avg_review / starTotal) * 100;
        const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
        const starStyle = {
            width: starPercentageRounded,
        };
        console.log(starStyle)
        return (
           <div className="fitness-card"> 
            <div className="card-top-section">
                <div className="card-image">
                    <img className="fitness-poster" src={`${fitnessImage}`} alt="Fitness_image"/>
                </div>
                
                <div className="card-description">
                   <div className="name">{fitness.name}</div>
                   <div className="created-by">{fitness.created_by}</div>
                   <div className="description">{fitness.description}</div>
                </div>
            </div>
            <div className="card-mid-section">
                <div>
                   <div>
                       Club: {fitness.club_name}
                   </div>
                   <div>
                       Partners: {partners.length > 0 &&
                        partners.map((item, index) =>(this.getPartners(item, index) )) 
                        } 
                   </div>
                   <div>
                       Members: {fitness.total_active_members+'/'+members.length}
                   </div>
                </div>
                <div>
               
                <div className="stars-outer">
                    <div className="stars-inner" style={starStyle}></div>
                </div>
                {fitness.rating}
                </div>
            </div>
            <div className="card-bottom-section">
              <div className="active-members">
                {members.length > 0 &&
                    members.map((item, index) =>( index < 4 && this.getMembers(item, index) )) 
                } 
                {members.length > 3 && <span className="profile-circle member-count">+{members.length-4}</span>}
              </div>
              <button type="button" value="schedule" className="primary-btn">Schedule</button>
            </div>
           </div>
        )
    }
}

export default (FitnessCardView);
