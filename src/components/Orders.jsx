import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';

function Orders() {

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-backend-bt2m.onrender.com/allOrders").then((res) => {
      setAllOrders(res.data);
    });
  }, []);

  return (
    <div className="orders">
        <h3 className="title">Orders ({allOrders.length})</h3>

        <div className="order-table">
          <table>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Qty.</th>
              <th>Price</th>
            </tr>

            {allOrders.map((stock) => {
             
              return (
                <tr>
                  <td>{stock._id}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price.toFixed(2)}</td>
                </tr>
              )

            })}

          </table>
        </div>
      </div>
  )
}

export default Orders