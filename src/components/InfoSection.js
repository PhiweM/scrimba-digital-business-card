import React from 'react'; 
import profileImage from '../images/profile.jpg'

function InfoSection() {
    return(
        <div className='header'>
            <img src={profileImage} className='profile-image' width="210px" />
            <div className='profile-info'>
                <h1 className='profile-name'>Phiwe Mhlope</h1>
                <h4 className='profile-position'>Frontend Developer</h4>
                <h5 className='profile-website'>phiwemhlope.com</h5>
                <div className='profile-btns'>
                    <button type='button'>Email</button>
                    <button type='button'>linkedIn</button>
                </div>
            </div>
        </div>
    );
}

export default InfoSection;