import React from 'react'; 
import profileImage from '../images/profile.jpg'

function InfoSection() {
    return(
        <div className='header'>
            <img src={profileImage} className='profile-img'  />
            <div className='profile-info'>
                <h1 className='profile-name'>Phiwe Mhlope</h1>
                <h4 className='profile-position'>Frontend Developer</h4>
                <h5 className='profile-website'>phiwemhlope.com</h5>
                <div className='profile-btns'>
                    <button type='button'><i class="fa-solid fa-envelope"></i>Email</button>
                    <button type='button'><i class="fa-brands fa-linkedin"></i>linkedIn</button>
                </div>
            </div>
        </div>
    );
}

export default InfoSection;