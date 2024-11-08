import React from "react";

import instagram from "./images/instagram.png";

import gmail from "./images/email.png";
import whatsapp from "./images/whatsapp.png";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import youtube from "./images/youtube.png";
import linkedin from "./images/linkedin.png";

import "./CSS/home.css";
import brand_13 from "./images/debugged.exe_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="contactus_footer ">
      <footer>
        <div className="line"></div>
        <div className="footer bg-dark d-flex col">
          {/* <div className="contact_information m-1 p-2">
            <h5>CONTACT INFORMATION</h5>
            <div className="address d-flex col  m-3   align-items-center">
              <img src={signpost} width="35px " height="40px" alt="errr" />
              <div className="mx-2 ">
                {" "}
                address <br />
                Sharva Akiam Foundation, Ambika Vihar, Talab Tillo, Jammu,
                Jammu and Kashmir 180002{" "}
              </div>
            </div>
            
            <div className="line"></div>
            <div className="address d-flex col  m-3   align-items-center ">
              <img src={mail} width="30px " height="30px" alt="errr" />
              <div className="mx-2">
                {" "}
                email adress : team <br />
                team.sharvafoundation@gmail.com{" "}
              </div>
            </div>
            <div className="line"></div>
            <div className="address d-flex col  m-3   align-items-center ">
              <img src={handshake} width="30px " height="30px" alt="errr" />
              <div className="mx-2">
                {" "}
                email adress : manager
                <br /> managersharvafoundation@gmail.com
              </div>
            </div>
            <div className="line"></div>
            <div className="address d-flex col  m-3   align-items-center ">
              <img src={hr} width="30px " height="30px" alt="errr" />
              <div className="mx-2">
                {" "}
                email adress : hr <br />
                hr.sharvafoundation@gmail.com
              </div>
            </div>
          </div> */}
          <div className="footer_section_2 d-flex row">
            <div className="footer_2 d-flex col justify-content-evenly ">
              <div className="for_mobile_view">
                <div className="my_account">
                  <h5>OUR INITIATIVES</h5>
                  <ul>
                    <li> <Link to='/foodforcause'> food for cause</Link>
</li>
                    <li> <Link to='/strivewithpride'> strive with pride</Link> </li>
                    <li> <Link to='/giveherwings'> give her wings to fly</Link> </li>
                    <li> <Link to='/projectgreen'> project green</Link> </li>
                    <li> <Link to='/blooddonation'> blood donation</Link> </li>
                  </ul>
                </div>
                <div className="main_Feature ">
                  <h5>QUICK LINKS </h5>
                  <ul>
                    <li><a href="/">Home</a>  </li>
                    <li><a href="/#AboutUs"> About Us</a></li>
                    <li><a href="/"> Our Initiatives</a></li>
                    <li><Link to="/contact-us"> Contact Us</Link></li>
                    <li><Link to="/join-us"> Join us</Link></li>
                    <li><a href="https://rzp.io/l/oQlaIFYe"> Donate Now</a></li>
                  </ul>
                </div>
              </div>
              <div className="be_the_first">
                <h5>OUR VISION</h5>
                <p>
                  We make a living by what we get, but we make a life by what we
                  give” These Words define the very energy that flows through
                  the heart of Sharva foundation. We here at Sharva Foundation
                  believe in building a community through giving. Our young
                  minds and passion for this is what strives us towards giving
                  the best! Although young, we look forward to do small things
                  with great love.
                </p>{" "}
              </div>
            </div>
            <div className="line"></div>
            <div className="credit d-flex  justify-content-between   ">
              <div className="cards_image">sharvafoundation.org</div>
              <div className="socials">
                <a href="https://www.instagram.com/sharvafoundation/?igshid=yubeg3h96wn4">
                  <img src={instagram} alt="error" />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=919596156678&text&type=phone_number&app_absent=0">
                  <img src={whatsapp} alt="error" />
                </a>
                <a href="https://www.facebook.com/Sharva-Aikyam-Foundation-571908020152850/">
                  <img className="facebooklogo" src={facebook} alt="error" />
                </a>
                <a href="mailto:team.foundationsharva@gmail.com?subject=Joining%20a%20good%20cause">
                  <img className="emaillogo" src={gmail} alt="error" />
                </a>
                <a href="https://www.facebook.com/Sharva-Aikyam-Foundation-571908020152850/">
                  <img src={twitter} alt="error" />
                </a>
                <a href="https://www.linkedin.com/company/sharva-foundation">
                  <img src={linkedin} alt="error" />
                </a>
                <a href="https://www.youtube.com/channel/UCZT6olVE-2v_LWqXmrbqPug">
                  <img className="youtubelogo" src={youtube} alt="error" />
                </a>
              </div>
              <div className="debugged">
                © Copyrights 2020 |{" "}
                <a href="https://www.debuggedexe.com">
                  debugged.exe
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
