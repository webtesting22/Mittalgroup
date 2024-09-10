import React, { useState } from "react";
import { Button } from "antd";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MdOutlineCancel, MdMenu } from "react-icons/md";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  const hideNav = () => {
    setIsNavVisible(false);
  };

  const NavigationLinks = [
    { link: "About Us", path: "/AboutUs" },
    { link: "Group Companies" },
    { link: "Gallery" },
    { link: "Contact Us" }
  ];

  return (
    <>
      <section className="MittalNavigationContainer">
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <button onClick={toggleNav}>
            {isNavVisible ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                Close&nbsp;<MdOutlineCancel />
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                Menu&nbsp;<MdMenu />
              </div>
            )}
          </button>
        </div>
        <div className={`navigationPanel ${isNavVisible ? "show" : "hide"}`}>
          <ul>
            {NavigationLinks.map((item, index) => (
              <div key={index} style={{ margin: "20px 0px" }}>
                <Link to={item.path} onClick={hideNav}>{item.link}</Link>
                <hr />
              </div>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
