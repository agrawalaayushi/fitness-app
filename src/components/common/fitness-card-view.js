import React, { Component } from 'react';
import { IMAGE_PLACEHOLDER } from '../../constants/images';
import { RatingStar } from '../common/rating-star';

class FitnessCardView extends Component {


    //-----------------------------------
    // Methods
    //-----------------------------------

    //-----------------------------------
    // View
    //-----------------------------------

    //get overlapped gravatars view
    getMembers(item, index) {
        const userImage = item.user_image || IMAGE_PLACEHOLDER;
        return (
            item.active &&
           <span key={'user'+index}><img className="profile-circle" src={`${userImage}`} alt="Member_image"/></span>
        )
    }

    getStringSeparatedByComma (strArray) {
        return strArray.toString()
    }

   

    render() {
        const { fitness, starTotal } = this.props;
        const fitnessImage = fitness.image || IMAGE_PLACEHOLDER;
        const members = fitness.members;
        const activeMembersCount = fitness.total_active_members;
        const partners = fitness.partners;
      
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
                            <span className="sub-content partner mute">{this.getStringSeparatedByComma(partners)} </span>
                        } 
                   </div>
                   <div>
                   <span className="sub-heading bold">Members</span>: <span className="sub-content mute">{fitness.total_active_members+'/'+members.length}</span>
                   </div>
                </div>
                <div>
               
                <RatingStar avgReview={fitness.avg_review} starTotal={starTotal}/>
                <div className="sub-content mute">({fitness.review_count} Review)</div>
                </div>
            </div>
            <div className="card-bottom-section">
              <div className="active-members">
                {activeMembersCount > 0 && 
                    members.map((item, index) =>(index<4 && this.getMembers(item, index) )) 
                } 
                {activeMembersCount > 4 && <span className="profile-circle member-count">+{activeMembersCount-4}</span>}
              </div>
              <button type="button" value="schedule" className="btn-submit primary-btn">Schedule</button>
            </div>
           </div>
        )
    }
}

export default (FitnessCardView);
