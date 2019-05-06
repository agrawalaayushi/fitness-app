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
            <span key={'member'+index} className="sub-content partner mute">{item}, </span>
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
        return (
           <div className="fitness-card"> 
            <div className="card-top-section">
                <div className="card-image">
                    <img className="fitness-poster" src={`${fitnessImage}`} alt="Fitness_image"/>
                </div>
                
                <div className="card-description">
                   <div className="sub-heading bold">{fitness.name}</div>
                   <div className="created-by"><span className="sub-content mute">by&nbsp;</span>{fitness.created_by}</div>
                   <div className="description mute">{fitness.description}</div>
                </div>
            </div>
            <div className="card-mid-section">
                <div>
                   <div>
                       <span className="sub-heading bold">Club</span>: <span className="sub-content mute">{fitness.club_name}</span>
                   </div>
                   <div>
                       <span className="sub-heading bold">Partners</span>: 
                       {partners.length > 0 &&
                        partners.map((item, index) =>(this.getPartners(item, index) )) 
                        } 
                   </div>
                   <div>
                   <span className="sub-heading bold">Members</span>: <span className="sub-content mute">{fitness.total_active_members+'/'+members.length}</span>
                   </div>
                </div>
                <div>
               
                <div className="stars-outer">
                    <div className="stars-inner" style={starStyle}></div>
                </div>
                <div className="sub-content mute">({fitness.review_count} Review)</div>
                </div>
            </div>
            <div className="card-bottom-section">
              <div className="active-members">
                {members.length > 0 &&
                    members.map((item, index) =>( index < 4 && this.getMembers(item, index) )) 
                } 
                {members.length > 3 && <span className="profile-circle member-count">+{members.length-4}</span>}
              </div>
              <button type="button" value="schedule" className="btn-submit primary-btn">Schedule</button>
            </div>
           </div>
        )
    }
}

export default (FitnessCardView);
