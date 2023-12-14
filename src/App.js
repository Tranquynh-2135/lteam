import React from "react";
import Nav from "./nav";
import Rout from "./rout";
import { BrowserRouter } from "react-router-dom";
import Footer from "./footer";
import { useState, useEffect } from "react";
import axios from 'axios';
const App = () => {
  //get data product
  const [cart, setCart] = useState([]);
  //product Detail
  const [close, setClose] = useState(false);
  const [detail, setDetail] = useState([]);
  //filter product
  const [product, setProduct] = useState([]);

  const fetchData = async (valueSearch) => {
    try {
      const response = await axios.get('http://localhost:3000/product');
      if(valueSearch){
        const change = response.data.filter((x) => {
          return x.Cat === valueSearch;
        });
        console.log(change)
        setProduct(change);
      }else
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [])
  
  //add to cart
  
  const searchbtn = (valueSearch) => {
    fetchData(valueSearch)
  };
  //product detail
  const view = (product) => {
    setDetail([{ ...product }]);
    setClose(true);
  };
  //add to cart
  const addtocart = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist) {
      alert("This Product is already added to cart");
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
      alert("Product is added to cart");
    }
  };
  return (
    <>
      <BrowserRouter>
        <Nav searchbtn={searchbtn} />
        <Rout
          product={product}
          setProduct={setProduct}
          detail={detail}
          view={view}
          close={close}
          setClose={setClose}
          cart={cart}
          setCart={setCart}
          addtocart={addtocart}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;