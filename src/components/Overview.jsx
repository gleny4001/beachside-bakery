import React from "react";
import overview1 from "../images/overview-img/overview1.jpg";
import overview2 from "../images/overview-img/overview2.jpg";
import overview3 from "../images/overview-img/overview3.jpg";

function Overview() {
  return (
    <div>
      <div className="overview-container">
        <h1 className="overview-title section-title"> Why choose us </h1>
        <div
          className="overview-item overview-1"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-easing="ease-in"
          data-aos-once="true"
        >
          <div className="overview-pics">
            <img
              src={overview1}
              alt="overview-img"
              className="overview-image ov-img-1"
            />
          </div>
          <div className="overview-content">
            <h2 className="ov-title"> sed do eiusmod tempor incididunt ut</h2>
            <p className="ov-content">
              labore et dolore magna aliqua. Cras ornare arcu dui vivamus arcu
              felis bibendum ut tristique. Enim facilisis gravida neque
              convallis a cras semper auctor.
            </p>
          </div>
        </div>
        <div
          className="overview-item overview-2"
          data-aos="fade-right"
          data-aos-duration="700"
          data-aos-easing="ease-in"
          data-aos-once="true"
        >
          <div className="overview-content oc-2">
            <h2 className="ov-title">
              Suspendisse faucibus interdum posuere lorem
            </h2>
            <p className="ov-content">
              Nibh tortor id aliquet lectus proin nibh nisl condimentum.
              Tristique senectus et netus et malesuada fames ac turpis egestas.
              A iaculis at erat pellentesque.
            </p>
          </div>
          <div className="overview-pics">
            <img
              src={overview2}
              alt="overview-img"
              className="overview-image ov-img-2"
            />
          </div>
        </div>
        <div
          className="overview-item overview-3"
          data-aos="fade-left"
          data-aos-duration="700"
          data-aos-easing="ease-in"
          data-aos-once="true"
        >
          <div className="overview-pics">
            <img
              src={overview3}
              alt="overview-img"
              className="overview-image ov-img-3"
            />
          </div>
          <div className="overview-content">
            <h2 className="ov-title">
              Morbi leo urna molestie at elementum eu facilisis sed.
            </h2>
            <p className="ov-content">
              Lorem ipsum dolor sit amet consectetur. Tincidunt ornare massa
              eget egestas purus viverra accumsan in nisl. Justo nec ultrices
              dui sapien eget. Malesuada fames ac turpis egestas sed tempus urna
              et.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
