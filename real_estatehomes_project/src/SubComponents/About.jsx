import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
          <h1>About us</h1>
          <p>
          Prestige Retreats is committed to offering exceptional luxury accommodations in premier locations. Our goal is to provide you with a home that combines comfort, elegance, and unparalleled service for a truly unforgettable experience.
          </p>
          <p>
          We are dedicated to ensuring your stay is flawless, with a focus on high-quality service and attention to detail. Discover your perfect escape with Prestige Retreats.
          </p>

          </div>
          <button>We strive to offer you best possible homes to stay!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
