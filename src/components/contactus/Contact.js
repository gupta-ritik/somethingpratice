import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <div>
      <div className="contact">
        <div className="contact-heading">Contact us</div>
        <div className="contact-card">
          <div className="card" >
            <div className="logo" id='logo-1'></div>
            <div className="email">BY PHONE</div>
            <div className="email-address">+91 9994058168</div>
          </div>
          <div className="card">
            <div className="logo" id="logo-2"></div>
            <div className="email">FIND US</div>
            <div className="email-address">National Institute of Technology Calicut, Kerala 673601</div>
          </div>
          <div className="card">
            <div className="logo"></div>
            <div className="email">BY EMAIL</div>
            <div className="email-address">contactus@nitc.ac.in</div>
          </div>
        </div>
      </div>
  
    </div>
  )
}
