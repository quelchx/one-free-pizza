import React from "react";
import { Link } from "react-router-dom";
import Meta from "../components/Meta";

import constants from "../constants";

export default function Home() {
  return (
    <Meta description='One Free Pizza'>
      <main className="main-page">
        <div className="row">
          <div className="col-md-7">
            <h2>
              View Our Selection Of Delicious Pizza.{" "}
              <span className="text-muted">It's Amazing.</span>
            </h2>
            <p className="lead fs-5 col-md-8">
              If you like Pizza and don't want to spend a dime then this is the
              right place for you.
            </p>
            <div className="mb-5">
              <Link
                to="/get-your-pizza"
                className="hfx-bounce btn btn-primary btn-lg px-4"
              >
                Start Ordering
              </Link>
            </div>
          </div>
          <div className="col-md-5">
            <img
              className="img-fluid rounded"
              src="https://rusticslice.ca/wp-content/uploads/2015/08/placeholder-pizza.jpg"
              alt="pizza"
            />
          </div>
        </div>

        <hr className="col-3 col-md-2 mb-5" />

        <h1>What is One Free Pizza?</h1>
        <p className="fs-5 col-md-12">
          We love pizza but do you love pizza too?
        </p>
        <p className="fs-5 col-md-10">
          How it works is simple -- order one pizza for yourself and it's free
          on us. That's right it's absolutely free!
        </p>

        <div className="mt-2 row g-5">
          <div className="col-md-6">
            <h2>Pizza's We Offer</h2>
            <p>
              We offer a variety of different types of Pizza's with more to
              come.
            </p>
            <ul className="icon-list">
              {constants.styles.map((el, idx) => {
                return <li key={idx}>{el}</li>;
              })}
            </ul>
          </div>

          <div className="col-md-6">
            <h2>Types Of Crusts</h2>
            <p>We also offer a small variety of different styles of crusts.</p>
            <ul className="icon-list">
              {constants.crusts.map((el, idx) => {
                return <li key={idx}>{el}</li>;
              })}
            </ul>
          </div>
        </div>
      </main>
    </Meta>
  );
}
