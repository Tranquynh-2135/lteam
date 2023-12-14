import React, { useState } from "react";
import { FaTruckFast } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdLogIn, IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./nav.css";
const Nav = ({ searchbtn }) => {
  const [search, setSearch] = useState();
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
      <div className="free">
        <div className="icon">
          <FaTruckFast />
        </div>
        <p>FREE shipping when shopping upto $1000</p>
      </div>
      <div className="main_header">
        <div className="container">
          <div className="logo">
            <img src="./img/Logo.png" alt="" style={{ width: "150px" }} />
          </div>
          <div className="search_box">
            <input
              type="text"
              value={search}
              placeholder="Enter The Product Name"
              autoComplete="off"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => searchbtn(search)}>Search</button>
          </div>
          <div className="icon">
            {isAuthenticated && (
              <div className="account">
                <div className="user_icon">
                  <FaRegUserCircle />
                </div>
                <p>Hello, {user.name}</p>
              </div>
            )}
            <div className="second_icon">
              <Link to="/" className="link">
                <FaRegHeart />
              </Link>
              <Link to="/cart" className="link">
                <IoBagCheckOutline />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/product" className="link">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="auth">
            {isAuthenticated ? (
              <button>
                <IoMdLogOut
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                />
              </button>
            ) : (
              <button>
                <IoMdLogIn onClick={() => loginWithRedirect()} />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
