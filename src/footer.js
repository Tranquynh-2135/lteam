import React from "react";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="about">
            <div className="logo">
              <img src="./img/logo.png" alt="" style={{ width: "150px" }} />
            </div>
            <div className="detail">
              <p>
                We are a team of designers and developers that create high
                quality WordPress{" "}
              </p>
              <div className="icon">
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaXTwitter />
                </li>
                <li>
                  <FaYoutube />
                </li>
              </div>
            </div>
          </div>
          <div className="account">
            <h3>My account</h3>
            <ul>
              <li>Account</li>
              <li>Order</li>
              <li>Cart</li>
              <li>Shipping</li>
              <li>Return</li>
            </ul>
          </div>
          <div className="page">
            <h3>Pages</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
