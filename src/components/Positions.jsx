import React from 'react';
// import { positions } from "../data/data";
import axios from 'axios';
import { useState, useEffect } from 'react';

function Positions() {

  const [allPositions, setAllPositions] = useState([]);

  useEffect(()=>{
    axios.get("https://zerodha-backend-bt2m.onrender.com/allPositions",{withCredentials: true,}).then((res)=>{
      setAllPositions(res.data);
    });
  },[]);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>
          </thead>

          {allPositions.map((stock, index)=>{
            const currValue = stock.price * stock.qty;
            const isProfit = currValue - stock.avg * stock.qty >= 0.0;
            const profitClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return(
              <tbody>
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profitClass}>{(currValue - stock.avg * stock.qty).toFixed(2)}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
              </tbody>
            )

          })}

        </table>
      </div>
    </>
  )
}

export default Positions