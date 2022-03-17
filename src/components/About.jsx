import React from "react";
import aboutImg from "../images/about/aboutImg.jpg";
import slide1 from "../images/about/slide-img-1.jpg";
import slide2 from "../images/about/slide-img-2.jpg";
import slide3 from "../images/about/slide-img-3.jpg";

function About() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={slide1} class="d-block w-100 about-page-img" alt="..." />
            <div class="carousel-caption d-block">
              <h1 className="about-carousel-title">Fresh</h1>
              <p className="about-carousel-content">
                We use fresh and hand-picked ingredients
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={slide2} class="d-block w-100 about-page-img" alt="..." />
            <div class="carousel-caption d-block">
              <h1 className="about-carousel-title">Homemade & Handmade</h1>
              <p className="about-carousel-content">
                All of our products are handmade professionally
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={slide3} class="d-block w-100 about-page-img" alt="..." />
            <div class="carousel-caption d-block">
              <h1 className="about-carousel-title">Customizable</h1>
              <p className="about-carousel-content">
                You can customize our goods however you want
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="about-page-container">
        <div className="about-image-container">
          <img src={aboutImg} className="about-img" alt="" />
        </div>
        <div className="about-content">
          <h1 className="about-title">About us</h1>
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
