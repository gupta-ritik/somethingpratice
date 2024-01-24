import React from "react";
import "./home.css";

export default function Home() {
  return (
    <div>
      
      <div className="techteam">
        <div className="tech-left">
          <div className="heading">Ragam ‘24 Tech-Team Inductions</div>
          <div className="text">Embrace the challenges that lie ahead, as you become part of a community dedicated to pushing boundaries and shaping the fest. </div>
          <div className="button">
            <div className="explore">Explore</div>
            <div className="arrow"></div> 
            </div>
        </div>
        <div className="tech-right"></div>
      </div>
      <div className="learn-more">
        <div className="learn">Learn more</div>
        <div className="expandmore"></div>
      </div>
      <div className="about">
        <div className="about-left"></div>
        <div className="about-right">
          <div className="aboutus">About us</div>
          <div className="about-text" id='text-1'>The quick brown fox jumped over the lazy dog. Meanwhile, a gentle breeze rustled the leaves on the trees, creating a soothing melody. Birds chirped in the distance, adding to the natural symphony of the surroundings. As the sun began to set, casting warm hues across the horizon, the world seemed to embrace a sense of tranquility.</div>
          <div className="about-text" id='text-2'>As the sun began to set, casting warm hues across the horizon, the world seemed to embrace a sense of tranquility. In this serene moment, one could appreciate the beauty of nature and the simplicity of life.</div>
        </div>
      </div>
      <div className="join-us">
        <div className="join-left">
              <div className="joinus">Join us</div>
              <div className="join-text">Embark on a journey with us and become part of a vibrant tech team, where innovation meets collaboration. Join us and contribute to something extraordinary!</div>
              <ol className="points">
                <li typeof="int">Invaluable experience</li>
                <li>Work with the latest technologies and frameworks</li>
                <li>Work with the latest technologies and frameworks</li>
                <li>Be part of the biggest cultural fest of South India</li>
              </ol></div>
        <div className="join-right">
          <div className="logo"></div>
          <div className="email">EMAIL</div>
          <div className="email-address">contactus@nitc.ac.in</div>
        </div>
      </div>
    </div>
  );
}
