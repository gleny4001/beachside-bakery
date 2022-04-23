import React from "react";
import beach from "../images/about/beach.jpg";

function About() {
  return (
    <>
      <div className="about-heading">
        {/* <img src={beach} alt="Huntington Beach" className="about-beach" /> */}
        <h1 className="about-us">ABOUT US</h1>
      </div>
      <div className="about-page-container">
        <div className="about-content">
          <h1 className="about-title">True homemade bakes</h1>
          <p className="about-excerpt">
            Beachside Goods is a local owned bakery in Huntington Beach, CA.
            Started in 2021 during the COVID-19 pandemic, we try to use
            homegrown fruits and vegetables from the baker’s garden in any
            recipe we can. We take online orders for events, birthday parties,
            office parties, or everyday treats. We offer local delivery or
            pickup, as well as shipping items such as cookies, brownies, breads,
            pretzels, and other treats. All treats can be customized for flavor,
            color, and theme and we work to fit all dietary restrictions,
            including gluten free and vegan options. We are ever expanding to
            include more options.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
