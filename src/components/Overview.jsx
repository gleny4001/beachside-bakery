import React from "react";
import overview1 from "../images/overview-img/overview1.jpg";
import overview2 from "../images/overview-img/overview2.jpg";
import overview3 from "../images/overview-img/overview3.jpg";

function Overview() {
  return (
    <div>
      <div className="overview-container">
        <h1 className="overview-title section-title"> What We Do </h1>
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
            <h2 className="ov-title">
              {" "}
              Treats and desserts perfect for parties and events
            </h2>
            <p className="ov-content">
              We offer a variety of baked goods such as cakes,cupcakes,cakepops,
              cookies and brownies that are great additons to birthday parties,
              holiday parties and more, All treats can be customized match your
              theme or favorite colors. They make great gifts too!
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
            <h2 className="ov-title">Pop-Up Shops</h2>
            <p className="ov-content">
              Come see us and our selection of treats at local pop-up shops.
              Common pop-up locations across Orange County, including Local
              Growth Night at 2nd Floor Bar and Restaurant in Downtown
              Hungtington Beach.
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
            <h2 className="ov-title">Shipping available to all 50 states</h2>
            <p className="ov-content">
              Select item(pretzels, cake pops, brownies, muffins and cookies)
              can be shipped to anywhere in the United States for a small
              shipping fee. Shipping takes about 2 days to arrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
