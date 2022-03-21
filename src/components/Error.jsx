import React from "react";

export default function Error({ error, message }) {
  return (
    <div className="error">
      <div className="warning">
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">{message}</h4>
          <p>{error.msg}</p>
          <hr />
          <p className="mb-0">Sorry please try again later</p>
        </div>
      </div>
    </div>
  );
}
