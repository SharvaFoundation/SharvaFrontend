import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import donation_card_2 from "./images/strivewithpride/5.jpg";
import donation_card_4 from "./images/foodforcause/4.jpg";
import donation_card_5 from "./images/donation_card_5.png";
import donation_card_15 from "./images/projectruya/1.jpg";
import donation_card_7 from "./images/donation_card_7.jpg";
import donation_card_6 from "./images/animal.jpg";

import "react-multi-carousel/lib/styles.css";

const DonationCard = (props) => {
  const options = {
    margin: 30,
    responsiveClass: true,

    dots: true,
    autoplay: false,

    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div className=" donation_background  ">
      <div className="gradient_for_donation_card">
        <h1 className="text-yellow ">Our Recent Causes to Serve Better</h1>
        <div className="line"></div>
        <div className="title text-white ">
          Making society a better place to live in is neither a one-day task nor
          an individual’s job. Well, it is not impossible too but we, Sharva
          Foundation, need all the resources that we can garner to continue our
          constant efforts. The ongoing projects reflect our commitment towards
          the causes that need urgent or intense efforts. Give us a helping hand
          to make a real impact in the real world!
        </div>

        <OwlCarousel
          className="container owl-theme"
          {...options}
          loop
          autoPlay={true}
          margin={55}
        >
          <div className="card bg-transparent">
            <img
              src={donation_card_7}
              className="card-img-top rounded"
              alt="error"
            />
            <div className="card-body">
              <h5 className="card-title text-white">Rupee One Campaign</h5>
              <p className="card-text text-white">
                Have you ever heard of the proverb ”little drops make the mighty
                ocean”? With this campaign, we are trying to pursue just that.
                We believe that if even only one rupee contribution is made by a
                large mass, it can help us to proactively offer help for any
                cause or tragedies due to an uncalled situation.
              </p>
            </div>
            <a className="nav-link  " href="https://rzp.io/l/oQlaIFYe">
              <button
                type="button"
                className="gradient_btn btn btn-sm btn-warning"
              >
                DONATE NOW{" "}
              </button>
            </a>
          </div>
          <div className="card bg-transparent">
            <img
              src={donation_card_2}
              className="card-img-top rounded"
              alt="error"
            />
            <div className="card-body">
              <h5 className="card-title text-white"> Strive With Pride</h5>
              <p className="card-text text-white">
                Our intiatives helps the transgender community with basic
                necessities. Sharva Foundation's aim is not to provide only
                tangible items but to encourage society as a whole to be
                inclusive of transgenders, who are ofter excluded from the
                social landscape
              </p>
            </div>
            <button className="rounded gradient_btn  btn button text-white">
              DONATE NOW
            </button>
          </div>
          {/* <div className="card bg-transparent">
            <img
              src={donation_card_3}
              className="card-img-top rounded"
              alt="error"
            />
            <div className="card-body">
              <h5 className="card-title text-white">
                Sanitary Napkin Distribution Drive
              </h5>
              <p className="card-text text-white">
                Menstruation is a biological process and females, from puberty
                till menopause, have no control over it. With this initiative,
                we provide three months, six months, or a yearly stock of
                sanitary napkins to girls who struggle to maintain menstruation
                hygiene due to financial challenges or less awareness.
              </p>
            </div>
            <a className="nav-link  " href="https://rzp.io/l/oQlaIFYe">
              <button
                type="button"
                className="gradient_btn btn btn-sm btn-warning"
              >
                DONATE NOW{" "}
              </button>
            </a>
          </div> */}
          <div className="card bg-transparent">
            <img
              src={donation_card_4}
              className="card-img-top rounded"
              alt="error"
            />
            <div className="card-body">
              <h5 className="card-title text-white"> Food For Cause</h5>
              <p className="card-text text-white">
                Food is the most basic necessity and still, a large population
                sleeps hungry and wakes up malnutrition. Since the inception of
                this campaign, our volunteers have completed 100+ food drives
                where we served cooked and packed meals to the needy.
              </p>
            </div>
            <a className="nav-link  " href="https://rzp.io/l/oQlaIFYe">
              <button
                type="button"
                className="gradient_btn btn btn-sm btn-warning"
              >
                DONATE NOW{" "}
              </button>
            </a>
          </div>
          <div className="card bg-transparent">
            <img
              src={donation_card_5}
              className="card-img-top rounded"
              alt="error"
            />
            <div className="card-body">
              <h5 className="card-title text-white"> Give her Wings To Fly</h5>
              <p className="card-text text-white">
                Mensturation is a biological process and females , from puberty
                till menopause , have no control over it. With this initiative,
                we provide thress months, six months, or a yearly stock of
                sanitary napkins to girls who struggle to maintain mensturation
                hygiene due to financial challenges or less awareness
              </p>
            </div>
            <a className="nav-link  " href="https://rzp.io/l/oQlaIFYe">
              <button
                type="button"
                className="gradient_btn btn btn-sm btn-warning"
              >
                DONATE NOW{" "}
              </button>
            </a>
          </div>
          <div className="card bg-transparent">
            <img
              src={donation_card_15}
              className="card-img-top rounded"
              alt="error"
            />
            <div className="card-body">
              <h5 className="card-title text-white">Project Ruya</h5>
              <p className="card-text text-white">
                Every exam season, the visually impaired students have yet
                another challenge to tackle besides putting in their best
                efforts. We help them in finding a scribe at the right time and
                being able to successfully complete their exams. Visually
                challenged students completely rely on scribes to write exams
                for them and most often the onus on finding a scribe falls on
                the students themselves.
              </p>
            </div>
            <a className="nav-link  " href="https://rzp.io/l/oQlaIFYe">
              <button
                type="button"
                className="gradient_btn btn btn-sm btn-warning"
              >
                DONATE NOW{" "}
              </button>
            </a>
          </div>
          <div className="card bg-transparent">
            <img
              src={donation_card_6}
              className="card-img-top rounded"
              alt="error"
            />
            <div className="card-body">
              <h5 className="card-title text-white">Voice For Voiceless</h5>
              <p className="card-text text-white">
                A Campaign where we distributed reflective bands to the ones in
                need and the main cause for this drive was to prevent fatal
                accidents. In addition to that, food and good quality shelter
                was provided for stray animals who don't have someone of their
                own. Funds were raised for several NGOs so that the voiceless
                can speak with their emotions.
              </p>
            </div>
            <a className="nav-link  " href="https://rzp.io/l/oQlaIFYe">
              <button
                type="button"
                className="gradient_btn btn btn-sm btn-warning"
              >
                DONATE NOW{" "}
              </button>
            </a>
          </div>
        </OwlCarousel>
        
      </div>
    </div>
  );
};

export default DonationCard;
