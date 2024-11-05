import React, { useState, useEffect } from "react";
import { Button } from "antd";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MdOutlineCancel, MdMenu } from "react-icons/md";
import NavigationBackImage from "./navigation.jpg";
import MittalLogocopy from "/images/MittalLogocopy.png";
import MittalLogo from "/images/MittalLogo.png";
import Navigation2 from "./Navigation2.jpeg";
const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredSublink, setHoveredSublink] = useState("Our Legacy");

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const hideNav = () => {
    setIsNavVisible(false);
  };

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
    { link: "About", path: "/AboutUs" },
    { link: "Gallery", path: "/Gallery" },
    { link: "Products", path: "/Products" },
    { link: "Manufacturing", path: "/Manufacturing" },
    { link: "Quality", path: "/Quality" },
    { link: "Clients", path: "/Clients" },
    { link: "Contact", path: "/ContactUs" },
  ];

  return (
    <>
      <section className={`MittalNavigationContainer ${isScrolled ? "redBackground" : "transparent"}`}>
        <div style={{ width: "95%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="logoContainer">
            <Link to="/">
              <img src={isScrolled ? "/images/MittalLogo.png" : "/images/MittalLogocopy.png"} alt="Logo" />
            </Link>
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
                className={item.link.trim() === "About" || item.link.trim() === "Products" ? "aboutLinkWrapper" : ""}
                style={{
                  margin: "20px 0px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="MittalShape"></div>
                <div>
                  <Link
                    to={item.path}
                    onClick={() => {
                      if (item.link.trim() !== "About" && item.link.trim() !== "Products") hideNav();
                    }}
                    className={item.link.trim() === "About" || item.link.trim() === "Products" ? "aboutLink" : ""}
                  >
                    {item.link}
                  </Link>
                  <hr />
                  {(item.link.trim() === "About" || item.link.trim() === "Products") && (
                    <div className="DropdownComponent">
                      <div className="subLinkContainer">
                        <ul>
                          {item.link.trim() === "About" && (
                            <>
                              <li onMouseEnter={() => setHoveredSublink("Our Legacy")} onMouseLeave={() => setHoveredSublink(null)}>
                                <Link to="/" onClick={hideNav}>Our Legacy</Link>
                              </li>
                              <li onMouseEnter={() => setHoveredSublink("Group Companies")} onMouseLeave={() => setHoveredSublink(null)}>
                                <Link to="" onClick={hideNav}>Group Companies</Link>
                              </li>
                              <li onMouseEnter={() => setHoveredSublink("Our Clients")} onMouseLeave={() => setHoveredSublink(null)}>
                                <Link to="/Clients" onClick={hideNav}>Our Clients</Link>
                              </li>
                            </>
                          )}
                          {item.link.trim() === "Products" && (
                            <>
                              <li onMouseEnter={() => setHoveredSublink("Product A")} onMouseLeave={() => setHoveredSublink(null)}>
                                <Link to="/Products/A" onClick={hideNav}>Product A</Link>
                              </li>
                              <li onMouseEnter={() => setHoveredSublink("Product B")} onMouseLeave={() => setHoveredSublink(null)}>
                                <Link to="/Products/B" onClick={hideNav}>Product B</Link>
                              </li>
                              <li onMouseEnter={() => setHoveredSublink("Product C")} onMouseLeave={() => setHoveredSublink(null)}>
                                <Link to="/Products/C" onClick={hideNav}>Product C</Link>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                      <div className="ImageContainer">
                        {hoveredSublink === "Our Legacy" && <img src={Navigation2} alt="Our Legacy" />}
                        {hoveredSublink === "Group Companies" && <img src={Navigation2} alt="Group Companies" />}
                        {hoveredSublink === "Our Clients" && <img src={Navigation2} alt="Our Clients" />}
                        {hoveredSublink === "Product A" && <img src={Navigation2} alt="Product A" />}
                        {hoveredSublink === "Product B" && <img src={Navigation2} alt="Product B" />}
                        {hoveredSublink === "Product C" && <img src={Navigation2} alt="Product C" />}
                        {!hoveredSublink && <img src={Navigation2} alt="Default" />} {/* Default image */}
                      </div>
                    </div>
                  )}
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
