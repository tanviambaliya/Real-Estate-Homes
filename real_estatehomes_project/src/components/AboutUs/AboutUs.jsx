import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
  <h3>Your Peace of Mind, Our Priority!</h3>
  <p>At Prestige Retreats, we believe that your relaxation and comfort are paramount. Our dedicated team ensures that every detail of your stay is perfect, from start to finish.</p>
  <p>Each of our luxurious properties is carefully selected and maintained to the highest standards, offering you a serene and worry-free experience. Whether you're lounging by the pool, exploring the local area, or simply unwinding in your villa, we are here to take care of everything.</p>
  <p>Rest assured, our commitment to excellence and attention to detail guarantees that your getaway will be nothing short of extraordinary. Trust us to create a seamless and memorable escape, so you can focus on what truly matters: enjoying your time away.</p>
</div>

      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
