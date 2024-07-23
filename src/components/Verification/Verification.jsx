import React from "react";
import { Link } from "react-router-dom";
import "./verification.css";

function Authorization() {
  return (
    <div className="verification__wrapper">
      <img
        className="eyes-img"
        src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3VzdXVwdnJqYTVoY29kbjZ3NWRkOXlkbmtmeXRjMjNlYTk1d3BjZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/FkdU6Or6txxpPdOsL8/giphy.gif"
        alt="eyes looking around"
      />
      <p>Are you my mom?</p>
      <div className="links__wrapper">
        <div className="button button__yes">
          <Link className="link" to="/happy-birthday">
            Yes
          </Link>
        </div>
        <div className="button button__no">
          <Link className="link" to="/access-not-allowed">
            No
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Authorization;
