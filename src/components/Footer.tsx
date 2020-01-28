import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer--row__main'>
                <div className='footer--column footer--column__centered'>
                    <img src="/images/HMG-Logo-Web.png" alt="Hopkins Marketing Logo" className='footer--image' />
                </div>
                <div className='footer--column'>
                    <div>
                        <a href="#" target="_blank" rel="noopener noreferrer" className='footer--link'>
                            <FacebookIcon className='footer--icon'/>
                        </a>  
                        <a href="#" target="_blank" rel="noopener noreferrer" className='footer--link'>
                            <TwitterIcon className='footer--icon'/>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className='footer--link'>
                            <InstagramIcon className='footer--icon'/>
                    </a>
                    </div>
                    <p>Contact Details:</p>
                    <p>Ph: 027312313123</p>
                    <p>Email: hopkinsmarketing@gmail.com</p>
                </div>
            </div>
            <div className='footer--row__sub'>
                <div className='footer--column footer--column__centered'>
                    <span className='border-top'>
                        Copyright © 2020 Hopkins Marketing Group | All Rights Reserved.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Footer;