import React, { useState, useEffect } from "react";
import { Button } from "antd";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MdOutlineCancel, MdMenu } from "react-icons/md";
import NavigationBackImage from "./navigation.jpg";
import MittalLogocopy from "/images/MittalLogocopy.png";
import MittalLogo from "/images/MittalLogo.png";
import Navigation1 from "./Navigation2.jpg";
import Navigation2 from "./Navigation2.jpeg";
import Navigation3 from "./Navigation3.avif";
import Navigation4 from "./Navigation4.jpg";
import Navigation5 from "./Navigation5.avif";

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredAboutSublink, setHoveredAboutSublink] = useState(null);
  const [hoveredProductsSublink, setHoveredProductsSublink] = useState(null);
  const [hoveredInfrastructureSublink, setHoveredInfrastructureLink] = useState(null);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const hideNav = () => {
    setIsNavVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavigationLinks = [
    { link: "About" },
    { link: "Gallery", path: "/Gallery" },
    // { link: "Products", path: "/Products" },
    {link:"Products"},
    { link: "Infrastructure" },
    // { link: "Manufacturing", path: "/Manufacturing" },
    // { link: "Quality", path: "/Quality" },
    // { link: "Clients", path: "/Clients" },
    { link: "Contact", path: "/ContactUs" },
  ];

  return (
    <>
      <section className={`MittalNavigationContainer ${isScrolled ? "redBackground" : "transparent"}`}>
        <div style={{ width: "95%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="logoContainer">
            <Link to="/" onClick={() => {
              
              hideNav();
            }}>
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
                className={item.link.trim() === "About" || item.link.trim() === "Products" || item.link.trim() === "Infrastructure" ? "aboutLinkWrapper" : ""}
                style={{
                  margin: "20px 0px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="MittalShape"></div>
                <div>
                  {item.path ? (
                    <Link
                      to={item.path}
                      onClick={() => {
                        // if (item.link.trim() !== "About" && item.link.trim() !== "Products") hideNav();
                        hideNav();
                      }}

                      className={item.link.trim() === "About" || item.link.trim() === "Products" || item.link.trim() === "Infrastructure" ? "aboutLink" : ""}
                    >
                      {item.link}
                    </Link>
                  ) : (
                    <Link className="nonClickable">{item.link}</Link>
                  )}
                  <hr />
                  {item.link.trim() === "About" && (
                    <div className="DropdownComponent about">
                      <div className="subLinkContainer">
                        <ul>
                          <li onMouseEnter={() => setHoveredAboutSublink("Our Legacy")} onMouseLeave={() => setHoveredAboutSublink(null)}>
                            <Link to="/AboutUs" onClick={hideNav}>Our Legacy</Link>
                          </li>
                          <li onMouseEnter={() => setHoveredAboutSublink("Group Companies")} onMouseLeave={() => setHoveredAboutSublink(null)}>
                            <Link to="/Group" onClick={hideNav}>Group Companies</Link>
                          </li>
                          <li onMouseEnter={() => setHoveredAboutSublink("Our Clients")} onMouseLeave={() => setHoveredAboutSublink(null)}>
                            <Link to="/Clients" onClick={hideNav}>Our Clients</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="ImageContainer">
                        {hoveredAboutSublink === "Our Legacy" && <img src={Navigation1} alt="Our Legacy" />}
                        {hoveredAboutSublink === "Group Companies" && <img src={Navigation4} alt="Group Companies" />}
                        {hoveredAboutSublink === "Our Clients" && <img src={Navigation5} alt="Our Clients" />}
                        {!hoveredAboutSublink && <img src={Navigation1} alt="Default" />}
                      </div>
                    </div>
                  )}
                  {item.link.trim() === "Products" && (
                    <div className="DropdownComponent product">
                      <div className="subLinkContainer">
                        <ul>
                          <li onMouseEnter={() => setHoveredProductsSublink("Flat-Bars")} onMouseLeave={() => setHoveredProductsSublink(null)}>
                            <Link to="/Products/Flat-Bars" onClick={hideNav}>Flat-Bars</Link>
                          </li>
                          <li onMouseEnter={() => setHoveredProductsSublink("Round-Bars")} onMouseLeave={() => setHoveredProductsSublink(null)}>
                            <Link to="/Products/Round-Bars" onClick={hideNav}>Round-Bars</Link>
                          </li>
                          <li onMouseEnter={() => setHoveredProductsSublink("Channels")} onMouseLeave={() => setHoveredProductsSublink(null)}>
                            <Link to="/Products/Channels" onClick={hideNav}>Channels</Link>
                          </li>
                          <li onMouseEnter={() => setHoveredProductsSublink("Angles")} onMouseLeave={() => setHoveredProductsSublink(null)}>
                            <Link to="/Products/Angles" onClick={hideNav}>Angles</Link>
                          </li>
                          <li onMouseEnter={() => setHoveredProductsSublink("Angles")} onMouseLeave={() => setHoveredProductsSublink(null)}>
                            <Link to="/Applications" onClick={hideNav}>Product Applications</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="ImageContainer">
                        {hoveredProductsSublink === "Flat-Bars" && <img src="https://webtesting-upload.vercel.app/assets/flatbar2-AIX5AiwC.jpg" alt="Flat-Bars" />}
                        {hoveredProductsSublink === "Round-Bars" && <img src="https://webtesting-upload.vercel.app/assets/RoundBars1-CGZDPqFq.jpeg" alt="Round-Bars" />}
                        {hoveredProductsSublink === "Channels" && <img src="https://webtesting-upload.vercel.app/assets/channels3-CZ3B0n8e.jpg" alt="Channels" />}
                        {hoveredProductsSublink === "Angles" && <img src="https://webtesting-upload.vercel.app/assets/angles5-CWuBRgWS.jpg" alt="Angles" />}
                        {hoveredProductsSublink === "Applications" && <img src="" alt="Applications"/>}
                        {!hoveredProductsSublink && <img src="https://webtesting-upload.vercel.app/assets/flatbar2-AIX5AiwC.jpg" alt="Default" />}
                      </div>
                    </div>
                  )}
                  {item.link.trim() === "Infrastructure" && (
                    <div className="DropdownComponent infra">
                      <div className="subLinkContainer">
                        <ul>
                          <li onMouseEnter={() => setHoveredInfrastructureLink("Manufacturing")} onMouseLeave={() => setHoveredInfrastructureLink(null)}>
                            <Link to="/Manufacturing" onClick={hideNav}>Manufacturing</Link>
                          </li>
                          <li onMouseEnter={() => setHoveredInfrastructureLink("Quality")} onMouseLeave={() => setHoveredInfrastructureLink(null)}>
                            <Link to="/Quality" onClick={hideNav}>Quality</Link>
                          </li>

                        </ul>
                      </div>
                      <div className="ImageContainer">
                        {hoveredInfrastructureSublink === "Manufacturing" && <img src='/images/AbmittalBack.jpeg' alt="Manufacturing" />}
                        {hoveredInfrastructureSublink === "Quality" && <img src='/images/GroupImagesBack.avif' alt="Quality" />}
                        {!hoveredInfrastructureSublink && <img src='/images/AbmittalBack.jpeg' alt="Default" />}
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
