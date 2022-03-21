import React from "react";
import Meta from "./Meta";

export default function Spinner({ text }) {
  return (
    <Meta title="Loading" description="Loading Page">
      <div className="loader">
        <div className="d-flex justify-content-center">
          <p>{text}</p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status"></div>
        </div>
      </div>
    </Meta>
  );
}
