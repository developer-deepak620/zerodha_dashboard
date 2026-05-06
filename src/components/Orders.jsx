import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

function Orders() {

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-backend-bt2m.onrender.com/allOrders",{withCredentials: true,}).then((res) => {
      // console.log(res.data);
      setAllOrders(res.data);
    });
  }, []);

  return (
    <div className="orders">
        <h3 className="title">Orders ({allOrders.length})</h3>

        <div className="order-table">
          <table>
            <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Qty.</th>
              <th>Price</th>
            </tr>
            </thead>

            {allOrders.map((stock) => {
             
              return (
                <tbody>
                <tr>
                  <td>{stock._id}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price.toFixed(2)}</td>
                </tr>
                </tbody>
              )

            })}

          </table>
        </div>
      </div>
  )
}

export default Orders