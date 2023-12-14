import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import "./cart.css";
const Cart = ({ cart, setCart }) => {
  //increase qty
  const incqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty + 1 }
          : curElm;
      })
    );
  };

  //Dec qty
  const decqty = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    setCart(
      cart.map((curElm) => {
        return curElm.id === product.id
          ? { ...exist, qty: exist.qty - 1 }
          : curElm;
      })
    );
  };

  //remove product
  const removeproduct = (product) => {
    const exist = cart.find((x) => {
      return x.id === product.id;
    });
    if (exist.qty > 0) {
      setCart(
        cart.filter((x) => {
          return x.id !== product.id;
        })
      );
    }
  };

  //total price
  const Totalprice = cart.reduce(
    (price, item) => price + item.qty * item.Price,
    0
  );
  return (
    <>
      <div className="cartcontainer">
        {cart.length === 0 && (
          <div className="emptycart">
            <h2 className="empty">Cart is Empty</h2>
            <Link to="/product" className="emptycartbtn">
              Shop now
            </Link>
          </div>
        )}
        <div className="contant">
          {cart.map((curElm) => {
            return (
              <div className="cart_item">
                <div className="img_box">
                  <img src={curElm.Img} alt={curElm.Title} />
                </div>
                <div className="detail">
                  <div className="info">
                    {" "}
                    <h4>{curElm.Cat}</h4>
                    <h3>{curElm.Title}</h3>
                    <p>Price: ${curElm.Price}</p>
                    <div className="qty">
                      <button className="incqty" onClick={() => incqty(curElm)}>
                        +
                      </button>
                      <input type="text" value={curElm.qty} />
                      <button className="decqty" onClick={() => decqty(curElm)}>
                        -
                      </button>
                    </div>
                    <h4 className="subtotal">
                      sub total: ${curElm.Price * curElm.qty}
                    </h4>
                  </div>
                  <div className="close">
                    <button onClick={() => removeproduct(curElm)}>
                      <IoMdCloseCircleOutline />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {cart.length > 0 && (
          <>
            <h2 className="totalprice">Total: $ {Totalprice}</h2>
            <button className="checkout" >Checkout</button>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
