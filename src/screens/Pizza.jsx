import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import constants from "../constants";
import config from "../config/config";
import guid from "../utils/guid";

import Spinner from "../components/Spinner";
import Error from "../components/Error";
import Meta from "../components/Meta";

export default function Pizza() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [crust, setCrust] = useState("Original");
  const [style, setStyle] = useState("Pepporoni");
  const [extra, setExtra] = useState(false);

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({ err: null, msg: "Page Error" });

  let navigate = useNavigate();

  const submitOrder = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        config.BASE_URL + "/orders",
        {
          id: guid(),
          style: style,
          crust: crust,
          cheese: extra,
          name: name,
          address: address,
        },
        {
          headers: {
            Authorization: `Basic ${config.AUTH_TOKEN}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .then(() => {
        navigate("/orders");
      })
      .catch((err) => {
        setError({ err, msg: "Something is currently wrong with the server" });
        setLoading(false);
      });
  };

  // loading state handler
  if (isLoading) {
    return <Spinner text="Proccessing Order" />;
  }

  // simple error state handler
  if (error.err !== null) {
    return <Error error={error} message="Something went wrong" />;
  }

  return (
    <Meta title='Pizza Order' description='Order your free Pizza'>
      <div className="pizza-order">
        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="display-4 fw-bold">Order Now</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Fill out this form and get your free Pizza.
            </p>
          </div>
          <div className="overflow-hidden" style={{ maxHeight: "30vh" }}>
            <div className="container px-5">
              <img
                src="https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"
                className="img-fluid border rounded-3 shadow-lg mb-4"
                alt="Example image"
                loading="lazy"
                width="700"
                height="500"
              />
            </div>
          </div>
        </div>

        <h2>Please Fill Out This Form</h2>
        <p className="lead">
          Before we send you a free pizza we need some basic information please
        </p>

        {/* form handler */}
        <form onSubmit={submitOrder} className="pt-2">
          <div className="row my-2">
            <div className="col-6">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="col-6">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                required
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
              />
            </div>
          </div>
          <div className="row my-2">
            <div className="col-6">
              <label htmlFor="crusts" className="form-label">
                Choose Style
              </label>
              <select
                onChange={(e) => setStyle(e.target.value)}
                className="form-select"
                aria-label="Pizza Style Selection"
              >
                {/* using data from constants import to render options */}
                {constants.styles.map((el, idx) => {
                  return (
                    <option key={idx} value={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-6">
              <label htmlFor="style" className="form-label">
                Choose Crust
              </label>
              <select
                onChange={(e) => setCrust(e.target.value)}
                className="form-select"
                aria-label="Crust Selection"
              >
                {/* using data from constants import to render options */}
                {constants.crusts.map((el, idx) => {
                  return (
                    <option key={idx} value={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="my-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={extra}
                  onChange={(e) => {
                    setExtra(e.target.checked);
                  }}
                />
                <label className="form-check-label" htmlFor="flexCheckChecked">
                  Extra Cheese
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="hfx-shimmy btn btn-secondary submit">
            Submit Order
          </button>
        </form>
      </div>
    </Meta>
  );
}
