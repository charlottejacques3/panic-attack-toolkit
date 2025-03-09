import React, { useState } from 'react';
import './ContactDetail.css';

//images
import contact_photo from './images/profile_pic.png'

function ContactDetail({name, phone}) {
    return (
        <div className="contact-card">
            <div className="details">
                <img src={contact_photo}/>
                <div className="contact-info">
                <p>{name}</p>
                <p>{phone}</p>
                </div>
            </div>
        </div>
    );
}

export default ContactDetail;