import React from "react";

function Event() {
  return (
    <div className="event-container">
      <h1 className="event-title section-title"> Upcoming Events</h1>
      <div className="event-item">
        <div className="event-content">
          <div className="cal">
            <div className="month">Jan</div>
            <div className="date">14</div>
          </div>
          <h2 className="event-subject">Popup shop</h2>
          <p>7:00 pm - 9:00pm</p>
          <p>@Mainstreet</p>
        </div>
        <div className="event-content">
          <div className="cal">
            <div className="month">Feb</div>
            <div className="date">17</div>
          </div>
          <h2 className="event-subject">Popup shop</h2>
          <p>7:00 pm - 9:00pm</p>
          <p>@Mainstreet</p>
        </div>
        <div className="event-content">
          <div className="cal">
            <div className="month">Mar</div>
            <div className="date">4</div>
          </div>
          <h2 className="event-subject">Popup shop</h2>
          <p>7:00 pm - 9:00pm</p>
          <p>@Mainstreet</p>
        </div>
        <div className="event-content">
          <div className="cal">
            <div className="month">Apr</div>
            <div className="date">1</div>
          </div>
          <h2 className="event-subject">Popup shop</h2>

          <p>7:00 pm - 9:00pm</p>
          <p>@Mainstreet</p>
        </div>
        <div className="event-content">
          <div className="cal">
            <div className="month">Apr</div>
            <div className="date">17</div>
          </div>
          <h2 className="event-subject">Popup shop</h2>

          <p>7:00 pm - 9:00pm</p>
          <p>@Mainstreet</p>
        </div>
      </div>
    </div>
  );
}

export default Event;
