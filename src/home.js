import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { FaArrowRightLong, FaCircleDollarToSlot } from "react-icons/fa6";
import { FaTruck, FaHeadphones, FaRegEye, FaRegHeart } from "react-icons/fa";
import { RiWaterPercentFill } from "react-icons/ri";
import { IoMdCloseCircleOutline } from "react-icons/io";
import axios from 'axios';
import "./home.css";
const Home = ({  view, close, setClose, addtocart }) => {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/product');
        setProductList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])
  return (
    <>
      {close ? (
        <div className="product_detail">
          <div className="container">
            <button onClick={() => setClose(false)} className="closebtn">
              <IoMdCloseCircleOutline />
            </button>
            {productList.map((curElm, index) => {
              return (
                <div key={index} className="productbox">
                  <div className="img-box">
                    <img src={curElm.Img} alt={curElm.Title} />
                  </div>
                  <div className="detail">
                    <h4>{curElm.Cat}</h4>
                    <h2>{curElm.Title}</h2>
                    <p>
                      A Screen Everyone Will Love: Whether your family is
                      streaming or video chatting with friends tablet A8...
                    </p>
                    <h3>{curElm.Price}</h3>
                    <button onClick={() => addtocart(curElm)}>Add To Cart</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      <div className="top_banner">
        <div className="container">
          <div className="detail">
            <h2>The Best Note Book Collection 2023</h2>
            <Link to="/product" className="link">
              Shop Now <FaArrowRightLong />
            </Link>
          </div>
          <div className="img_box">
            <img src="./img/slider-img.png" alt="sliderimg" />
          </div>
        </div>
      </div>
      <div className="product_type">
        <div className="container">
          <div className="box">
            <div className="img_box">
              <img src="./img/Mobile Phone.png" alt="mobile" />
            </div>
            <div className="detail">
              <p>23 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="./img/headphone.png" alt="headphone" />
            </div>
            <div className="detail">
              <p>52 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="./img/cpu heat.png" alt="cpu" />
            </div>
            <div className="detail">
              <p>63 products</p>
            </div>
          </div>
          <div className="box">
            <div className="img_box">
              <img src="./img/smart watch.png" alt="watch" />
            </div>
            <div className="detail">
              <p>18 products</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="box">
            <div className="icon">
              <FaTruck />
            </div>
            <div className="detail">
              <h3>Free Shipping</h3>
              <p>Order above $1000</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaCircleDollarToSlot />
            </div>
            <div className="detail">
              <h3>Return & Refund</h3>
              <p>Money Back Gaurenty</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <RiWaterPercentFill />
            </div>
            <div className="detail">
              <h3>Member Discount</h3>
              <p>On Every Orders</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FaHeadphones />
            </div>
            <div className="detail">
              <h3>Customer Support</h3>
              <p>Every Time Call Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="product">
        <h2>Top Products</h2>
        <div className="container">
          {productList.map((curElm,index) => (
              <div className="box" key={index}>
                <div className="img_box">
                  <img src={curElm.Img} alt={curElm.Title} />
                  <div className="icon">
                    <li onClick={() => addtocart(curElm)}>
                      <IoCartOutline />
                    </li>
                    <li onClick={() => view(curElm)}>
                      <FaRegEye />
                    </li>
                    <li>
                      <FaRegHeart />
                    </li>
                  </div>
                </div>
                <div className="detail">
                  <p>{curElm.Cat}</p>
                  <h3>{curElm.Title}</h3>
                  <h4>${curElm.Price}</h4>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="banner">
        <div className="container">
          <div className="detail">
            <h4>LASTEST TENCHNOLOGY ADDED</h4>
            <h3>Apple iPad 10.2 9th Gen - 2021</h3>
            <p>$ 986</p>
            <Link to="/product" className="link">
              Shop Now
              <FaArrowRightLong />
            </Link>
          </div>
          <div className="img_box">
            <img
              src="./img/slider2-img.png"
              alt="sliderimg"
              style={{ marginRight: "90px", marginTop: "60px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
