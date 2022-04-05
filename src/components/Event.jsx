import React from "react";

function Event() {
  return (
    <div className="event-container">
      <h1 className="event-title section-title"> Upcoming Events</h1>

      <div className="event-item">
        {/* ---------------------------------------------------------- */}
        <div className="event-content">
          <div className="cal">
            <div className="month">April</div>
            <div className="date">9</div>
          </div>
          <h2 className="event-subject">Popup Shop</h2>
          <p>10:00 am - 3:00pm</p>
          <p>@18527 San Antonio St, Fountain Valley</p>
        </div>
        {/* ---------------------------------------------------------- */}
        <div className="event-content">
          <div className="cal">
            <div className="month">April</div>
            <div className="date">14</div>
          </div>
          <h2 className="event-subject">Local Growth Night</h2>
          <p>6:30 pm - 9:03pm</p>
          <p>@2nd Floor Bar, Grill & Gallery</p>
        </div>
        {/* ---------------------------------------------------------- */}
      </div>
    </div>
  );
}

export default Event;
