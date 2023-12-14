import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoMdCloseCircleOutline } from "react-icons/io";
import "./product.css";
import axios from "axios";
const Product = ({
  product,
  view,
  close,
  setClose,
  addtocart,
}) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [productList, setProductList] = useState([]);

  const fetchData = async (product) => {
    try {
      const response = await axios.get("http://localhost:3000/product");

      if (product) {
        const update = response.data?.filter((x) => {
          return x.Cat === product;
        });
        setProductList(update);
      } else setProductList(response.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(()=>{
    setProductList(product||[]);
  },[product])

  const filtterproduct = (product) => {
    console.log(product);
    fetchData(product);
  };
  const AllProducts = () => {
    fetchData();
  };
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
                    <button>Add To Cart</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="products">
        <h2># Products</h2>
        <p>Home . products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>categories</h3>
              <ul>
                <li onClick={() => AllProducts()}>All Products</li>
                <li onClick={() => filtterproduct("Tablet")}>Tablet</li>
                <li onClick={() => filtterproduct("Smart Watch")}>
                  Smart Watch
                </li>
                <li onClick={() => filtterproduct("Heat pipe")}>Heat pipe</li>
                <li onClick={() => filtterproduct("Gaming")}>Gaming</li>
                <li onClick={() => filtterproduct("Powerbank")}>Powerbank</li>
                <li onClick={() => filtterproduct("Headphone")}>Headphone</li>
                <li onClick={() => filtterproduct("Camera")}>Camera</li>
                <li onClick={() => filtterproduct("Electronics")}>
                  Electronics
                </li>
              </ul>
            </div>
          </div>
          <div className="productbox">
            <div className="contant">
              {productList.map((curElm, index) => 
                    <div className="box" key={index}>
                      <div className="img_box">
                        <img src={curElm.Img} alt={curElm.Title} />
                        <div className="icon">
                          {isAuthenticated ? (
                            <li onClick={() => addtocart(curElm)}>
                              <IoCartOutline />
                            </li>
                          ) : (
                            <li onClick={() => loginWithRedirect()}>
                              <IoCartOutline />
                            </li>
                          )}

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
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
