import React from "react";
import "./ClientFeedback.css";

function ClientFeedback({ name, feedback, img }) {
  return (
    <div className="clientfeedback-container">
      <div className="sec-1">
        <div className="image-cropper">
          <img src={img} alt="" srcset="" />
        </div>
        <p>{name}</p>
      </div>
      <div className="sec-2">
        <p>{feedback}</p>
      </div>
    </div>
  );
}

export default ClientFeedback;
