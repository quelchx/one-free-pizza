import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import config from "../config/config";
import Spinner from "../components/Spinner";
import Error from "../components/Error";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({ err: null, msg: "Error Loading Page" });

  let navigate = useNavigate();

  // using axios to fetch orders when this route is loading
  useEffect(() => {
    setLoading(true);
    axios
      .get(config.BASE_URL + "/orders", {
        headers: { Authorization: `Basic ${config.AUTH_TOKEN}` },
      })
      .then((res) => {
        let data = res.data;
        setOrders(data);
      })
      .then(() => setLoading(false))
      .catch((err) => {
        setLoading(false);
        setError({ err: err, msg: err.message });
      });
  }, []);

  // remove order handler
  const removeOrder = (id) => {
    console.log(id);
    axios
      .delete(config.BASE_URL + "/orders/" + id, {
        headers: { Authorization: `Basic ${config.AUTH_TOKEN}` },
      })
      .then((res) => {
        if (res.status === 200) {
          navigate(0);
        } else if (res.status === 404) {
          setError({
            err: true,
            msg: "Something went wrong deleting this order",
          });
        }
      })
      .catch((err) => setError({ err: err, msg: err.message }));
  };

  // loading state handler
  if (isLoading) {
    return <Spinner text="Fetching Orders" />;
  }

  // basic error handler
  if (error.err !== null) {
    return <Error error={error} message="Something went wrong" />;
  }

  // if they're no orders
  if (orders.length === 0) {
    return <div>No Orders</div>;
  }

  return (
    <div className="orders">
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold">Orders</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            This is currently all the free pizza orders we have completed.
          </p>
          <p>Haven't ordered your free pizza yet?</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link
              to="/get-your-pizza"
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3 hfx-be-bop"
            >
              Order Free Pizza
            </Link>
          </div>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Pizza</th>
            <th scope="col">Crust</th>
            <th scope="col">Extra Cheese</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {/* iterating orders and displaying them inside a table */}
          {orders.map((el, idx) => {
            return (
              <tr key={idx}>
                <th scope="row">{el.id}</th>
                <td>{el.name}</td>
                <td>{el.address}</td>
                <td>{el.style}</td>
                <td>{el.crust}</td>
                <td>{el.cheese === true ? "Yes" : "No"}</td>
                <td onClick={() => removeOrder(el.id)}>
                  <span className="delete">Delete</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
