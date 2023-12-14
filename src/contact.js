import React, { useState } from "react";
import "./contact.css";
import { useAuth0 } from "@auth0/auth0-react";
const Contact = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [users, setUser] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  let name, value;
  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...users, [name]: value });
  };
  const senddata = async (e) => {
    const { Name, Email, Subject, Message } = user;
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name, Email, Subject, Message }),
    };
    const res = await fetch(
      "https://electronics-shop-7f451-default-rtdb.firebaseio.com/Message.json",
      options
    );
    console.log(res);
    if (res) {
      alert("Your Message sent");
    } else {
      alert("An error occured");
    }
  };
  return (
    <>
      <div className="contact_container">
        <div className="contant">
          <div className="form">
            <h2># CONTACT US</h2>
            <form method="POST">
              <input
                type="text"
                name="Name"
                value={users.Name}
                placeholder="Enter Your Full Name"
                required
                autoComplete="off"
                onChange={data}
              />
              <input
                type="email"
                name="Email"
                value={users.Email}
                placeholder="Enter Your E-mail"
                required
                autoComplete="off"
                onChange={data}
              />
              <input
                type="text"
                name="Subject"
                value={users.Subject}
                placeholder="Enter Your Subject"
                required
                autoComplete="off"
                onChange={data}
              />
              <textarea
                name="Message"
                placeholder="Your Message"
                value={users.Message}
                required
                autoComplete="off"
                onChange={data}
              ></textarea>
              {isAuthenticated ? (
                <button type="submit" onClick={senddata}>
                  send
                </button>
              ) : (
                <button type="submit" onClick={() => loginWithRedirect()}>
                  login To Send
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
