import React from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import globe from "../assets/globe.svg";
import persons from "../assets/persons.svg";
import profile1 from "../assets/profile1.jpeg";
import profile2 from "../assets/profile2.jpeg";
import screenshot1 from "../assets/screenshot1.jpg";
import screenshot2 from "../assets/screenshot2.jpg";
import smiley from "../assets/smiley.svg";
import ClientFeedback from "./ClientFeedback";
import Footer from "./Footer";
import "./Home.css";
import Navbar from "./Navbar";
import Newsletter from "./Newsletter";

function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-nav">
          <Navbar />
        </div>

        <div className="banner-container">
          <div className="banner"></div>
          <img src={banner1} alt="banner1" className="banner1" />
          <img src={banner2} alt="banner2" className="banner2" />
        </div>

        {/* <div className="banner2"></div> */}
        {/* <img src={banner2} alt="" srcset=""/> */}
        <div className="home-info">
          <div>Essential Mobile App Landing for Workspaces</div>
          <p>
            A mobile app landing page is important and essential for right
            amount of information about your product. Start increasing your user
            base upon the launch of your product
          </p>
          <a className="home-btn" href="#">
            Explore Demos
          </a>
        </div>
        {/* <img src={banner} className="banner" alt="banner" /> */}

        <div className="section-container">
          <div className="section-info">
            <div className="section-info-title">Explore our demos</div>
            <p>
              Explore our landing Page demos on different kind of topics. More
              Demos are coming soon.
            </p>
          </div>
          <div className="section" id="explore-demo-section">
            <div className="screenshot-container">
              <img
                src={screenshot1}
                alt="screenshot1"
                className="screenshot1"
              />
              <p>Website Landing</p>
            </div>
            <div className="screenshot-container">
              <img
                src={screenshot2}
                alt="screenshot2"
                className="screenshot2"
              />
              <p>App Modern Landing</p>
            </div>
          </div>
        </div>
        <div className="section-container">
          <div className="section-info">
            <div className="section-info-title">
              Start your business journey with Soprano
            </div>
            <p>
              Try Shopify for free, and explore all the tools and services you
              need to start, run, and grow your business.
            </p>
          </div>
          <div className="section">
            <div className="svg-container">
              <img src={globe} alt="" srcset="" />
              <p className="svg-title">Move Your Business Online</p>
              <p className="svg-info">
                Create a business, whether you’ve got a fresh idea or are
                looking for a new way to make money.
              </p>
            </div>
            <div className="svg-container">
              <img src={persons} alt="" srcset="" />
              <p className="svg-title">Switch to Soprano</p>
              <p className="svg-info">
                Bring your business to Soprano, no matter which ecommerce
                platform you’re currently using.
              </p>
            </div>
            <div className="svg-container">
              <img src={smiley} alt="" srcset="" />
              <p className="svg-title">Enjoy ur benefits</p>
              <p className="svg-info">
                Get set up with the help of a trusted freelancer or agency from
                the Shopify Experts Marketplace.
              </p>
            </div>
          </div>
          <div className="section-btn">
            <a href="#heloS">Start Free Trail</a>
          </div>
        </div>
        <div className="section-container">
          <div className="section-info">
            <div className="section-info-title">
              What Clients say about our product
            </div>
          </div>
          <div className="feedback-container">
            <ClientFeedback
              name="Allen Jones"
              img={profile1}
              feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur."
            />
            <ClientFeedback
              name="Allen Jones"
              img={profile2}
              feedback="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features that Lorem ipsum dolor sit amet consectetur."
            />
          </div>
        </div>
        <Newsletter/>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
