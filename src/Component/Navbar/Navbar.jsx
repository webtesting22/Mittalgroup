import React, { useState, useEffect } from "react";
import { Button } from "antd";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MdOutlineCancel, MdMenu } from "react-icons/md";
import NavigationBackImage from "./navigation.jpg";
import MittalLogo from "/images/MittalLogo.png";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const hideNav = () => {
    setIsNavVisible(false);
  };

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavigationLinks = [
    { link: "Home", path: "/" },
    { link: "About Us", path: "/AboutUs" },
    { link: "Gallery", path: "/Gallery" },
    { link: "Products", path: "/Products" },
    { link: "Clients", path: "/Clients" },
    { link: "Contact Us", path: "/ContactUs" },
  ];

  return (
    <>
      <section className={`MittalNavigationContainer ${isScrolled ? "redBackground" : "transparent"}`}>
        <div style={{ width: "95%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="logoContainer">
            <Link to="/"><img src={MittalLogo} alt="Mittal Logo" /></Link>
          </div>
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
          <div className="overlayBackImage">
            <img src={NavigationBackImage} alt="Navigation Background" />
          </div>
          <ul>
            {NavigationLinks.map((item, index) => (
              <div
                key={index}
                style={{
                  margin: "20px 0px",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="MittalShape"></div>
                <div>
                  <Link to={item.path} onClick={hideNav}>
                    {item.link}
                  </Link>
                  <hr />
                </div>
              </div>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
