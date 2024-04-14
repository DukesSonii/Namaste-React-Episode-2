import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  //   let btnName = 'Login';
  const [btnname, setbtnname] = useState("login");
  const onlineStatus = useOnlineStatus();

  console.log("header render");

  //useState
  //always called inside functional components and always call them on the top bc JS is single threaded language so it will run line by line
  //never use usestate in if-else which create inconsisties in code

  //useEffect
  //if no dependency then it will be called on every render
  //if empty dependency array is there -> useEffect will be called on initial render
  //if dependency array is {btnname} => useffect is called when btnanme is updated
  useEffect(() => {
    console.log("Use Effect called");
  }, [btnname]);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="App Logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online status: {onlineStatus ? "✔️" : "❌"}</li>
          <li>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/about"
              style={{ color: "black", textDecoration: "none" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ color: "black", textDecoration: "none" }}
            >
              Contact
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="loginBtn"
            onClick={() => {
              btnname == "login" ? setbtnname("logout") : setbtnname("login");
            }}
          >
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
