import React from 'react'
import { Link ,useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Menu() {

  // const navigate = useNavigate();

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState([]);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";


  useEffect(() => {
    axios.get("https://zerodha-backend-5ncl.onrender.com/check", { withCredentials: true, }).then((res) => {
      // console.log(res.data);
      setUsername(res.data.user);
    });
  }, []);

//   const handleLogout = () => {
//   axios.get("http://localhost:9876/logout", {
//     withCredentials: true,
//   })
//   .then(() => {
//     navigate("http://localhost:5173/signin");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// };


  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}><p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p></Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}><p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p></Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}><p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p></Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}><p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p></Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}><p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p></Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(5)}><p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p></Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{username?.username}</div>
          {/* <button className='logout-btn' onClick={handleLogout}>LogOut</button> */}
          <a href="https://zerodha-backend-5ncl.onrender.com//logout">Logout</a>
        </div>
      </div>
    </div>
  )
}

export default Menu