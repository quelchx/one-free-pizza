import React from "react";

export default function Spinner({ text }) {
  return (
    <div className="loader">
      <div className="d-flex justify-content-center">
        <p>{text}</p>
      </div>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status"></div>
      </div>
    </div>
  );
}
