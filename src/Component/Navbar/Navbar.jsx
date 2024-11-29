import React, { useState, useEffect } from "react";
import { Collapse } from "antd";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MdOutlineCancel, MdMenu } from "react-icons/md";
import NavigationBackImage from "./navigation.jpg";
import MSLLogocopy from "/images/MittalLogocopy.png";
import MSLLogo from "/images/MittalLogo.png";
import Navigation1 from "./Navigation2.jpg";
import Navigation2 from "./Navigation2.jpeg";
import Navigation3 from "./Navigation3.avif";
import Navigation4 from "./Navigation4.jpg";
import Navigation5 from "./Navigation5.avif";
import ManufacturingNavigation from "/images/AbmittalBack.jpeg"
import QualityNavigation from "/images/GroupImagesBack.avif"

const NavigationData = [
  { link: "About" },
  { link: "Gallery", path: "/Gallery" },
  { link: "Products", path: "/Products" },
  { link: "Manufacturing", path: "" },
  { link: "Investors", path: "" },
  { link: "Contact", path: "/ContactUs" },
];

const About = [
  {
    link: "Our Legacy",
    path: "/AboutUs",
    imgsrc: Navigation1,
  },
  {
    link: "Our Clients",
    path: "/Clients",
    imgsrc: Navigation5,
  },
];

const Products = [
  {
    link: "Flat Bars",
    path: "/Products/Flat-Bars",
    imgsrc: "https://webtesting-upload.vercel.app/assets/flatbar2-AIX5AiwC.jpg",
  },
  {
    link: "Round Bars",
    path: "/Products/Round-Bars",
    imgsrc: "https://webtesting-upload.vercel.app/assets/RoundBars1-CGZDPqFq.jpeg",
  },
  {
    link: "Channels",
    path: "/Products/Channels",
    imgsrc: "https://webtesting-upload.vercel.app/assets/channels3-CZ3B0n8e.jpg",
  },
  {
    link: "Angles",
    path: "/Products/Angles",
    imgsrc: "https://webtesting-upload.vercel.app/assets/angles5-CWuBRgWS.jpg",
  },
];

const Manufacturing = [
  {
    link: "Infrastructure",
    path: "/Manufacturing",
    imgsrc: ManufacturingNavigation,
  },
  {
    link: "Quality",
    path: "/Quality",
    imgsrc: QualityNavigation,
  },
];
const Investors = [
  {
    link: "Issuer Company",
    path: "/IssuerCompany",
    imgsrc: "https://webtesting-upload.vercel.app/assets/Investor-DWSPNmk7.webp",
  },
  {
    link: "Group Companies",
    path: "/GroupCompanies",
    imgsrc: "https://webtesting-upload.vercel.app/assets/GroupCompanies-BAtcutjD.webp",
  },
]

const Navbar = () => {
  const [hoveredSubLink, setHoveredSubLink] = useState({});
  const renderDropdownContent = (section) => {
    let data = [];
    switch (section) {
      case "About":
        data = About;
        break;
      case "Products":
        data = Products;
        break;
      case "Manufacturing":
        data = Manufacturing;
        break;
      case "Investors":
        data = Investors;
        break;
      default:
        data = [];
    }

    if (data.length > 0) {
      const hoveredIndex = hoveredSubLink[section] !== undefined ? hoveredSubLink[section] : 0;
      const hoveredItem = data[hoveredIndex];

      return (
        <div className="dropdownContainer">
          <div className="subLinks">
            {data.map((item, index) => (
              <div
                key={index}
                className="subLinkItem"
                onMouseEnter={() => setHoveredSubLink({ ...hoveredSubLink, [section]: index })}
                onMouseLeave={() => setHoveredSubLink({ ...hoveredSubLink, [section]: 0 })}
              >
                <Link to={item.path} onClick={toggleNav}>
                  {item.link}
                </Link>
              </div>
            ))}
          </div>
          <div className="dropdownImageContainer">
            <img src={hoveredItem.imgsrc} alt={hoveredItem.link} />
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  const renderAccordionContent = (section) => {
    let data = [];
    switch (section) {
      case "About":
        data = About;
        break;
      case "Products":
        data = Products;
        break;
      case "Manufacturing":
        data = Manufacturing;
        break;
      case "Investors":
        data = Investors;
        break;
      default:
        data = [];
    }

    if (data.length > 0) {

      return data.map((item, index) => (
        <div key={index} className="accordionItem">

          <Link to={item.path} onClick={toggleNav}>
            {item.link}
          </Link>
        </div>
      ));
    } else {
      const navItem = NavigationData.find((item) => item.link === section);
      const path = navItem?.path || "#";

      return (
        <div className="accordionItem">
          <Link to={path} onClick={toggleNav}>
            {section}
          </Link>
        </div>
      );
    }
  };

  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 769);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 769);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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


  return (
    <>
      <section className={`MSLNavigationContainer ${isScrolled ? "redBackground" : "transparent"}`}>
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
          {isMobile ? (
            <Collapse accordion expandIconPosition="end" >
              {NavigationData.map((navItem, index) => {
                const hasSubLinks = ["About", "Products", "Manufacturing", "Investors"].includes(navItem.link);
                if (hasSubLinks) {
                  return (<>
                    <Collapse.Panel header={<><Link><span>{navItem.link}</span></Link></>} key={index} showArrow={true} >
                      {renderAccordionContent(navItem.link)}
                    </Collapse.Panel>
                  </>
                  );
                } else {
                  return (

                    <Collapse.Panel
                      header={
                        <>

                          <Link to={navItem.path || "#"} onClick={toggleNav} style={{ display: 'block' }}>
                            <span>{navItem.link}</span>
                          </Link>
                        </>
                      }
                      key={index}
                      showArrow={false}
                      collapsible="disabled"
                    >
                    </Collapse.Panel>
                  );
                }
              })}
            </Collapse>
          ) : (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {NavigationData.map((navItem, index) => (
                <li key={index}>
                  <div className="dropdown">
                    <Link to={navItem.path || "#"} className="dropbtn" onClick={toggleNav}>
                      {navItem.link}
                    </Link>
                    <div className="dropdown-content">
                      {renderDropdownContent(navItem.link)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* <ul>
            {NavigationLinks.map((item, index) => (
              <div
                key={index}
                className={item.link.trim() === "About" || item.link.trim() === "Products" || item.link.trim() === "Manufacturing" ? "aboutLinkWrapper" : ""}
                style={{
                  margin: "20px 0px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="MSLShape"></div>
                <div>
                  {item.path ? (
                    <Link
                      aria-label="link to navbar item"
                      to={item.path}
                      onClick={() => {
                        hideNav();
                      }}

                      className={item.link.trim() === "About" || item.link.trim() === "Products" || item.link.trim() === "Manufacturing" ? "aboutLink" : ""}
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
                            <Link aria-label="go to about us page" to="/AboutUs" onClick={hideNav}>Our Legacy</Link>
                          </li>

                          <li onMouseEnter={() => setHoveredAboutSublink("Our Clients")} onMouseLeave={() => setHoveredAboutSublink(null)}>
                            <Link aria-label="redirect to client page" to="/Clients" onClick={hideNav}>Our Clients</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="ImageContainer">
                        {hoveredAboutSublink === "Our Legacy" && <img src={Navigation1} alt="Our Legacy of mild steel company" />}
                        {hoveredAboutSublink === "Group Companies" && <img src={Navigation4} alt="Group Companies " />}
                        {hoveredAboutSublink === "Our Clients" && <img src={Navigation5} alt="Our Clients" />}
                        {!hoveredAboutSublink && <img src={Navigation1} alt="Default" />}
                      </div>
                    </div>
                  )}
                  {item.link.trim() === "Products" && (
                    <div className="DropdownComponent product">
                      <div className="subLinkContainer">
                        <ul>
                          <li onMouseEnter={() => setHoveredProductsSublink("Angles")} onMouseLeave={() => setHoveredProductsSublink(null)}>
                            <Link aria-label="redirect to product applications" to="/Applications" onClick={hideNav}>Products</Link>
                          </li>
                          <li onMouseEnter={() => setHoveredProductsSublink("Flat-Bars")} onMouseLeave={() => setHoveredProductsSublink(null)}>
                            <Link aria-label="redirect to product name flat bars" to="/Products/Flat-Bars" onClick={hideNav}>Flat-Bars</Link>
                          </li>
                          <li onMouseEnter={() => setHoveredProductsSublink("Round-Bars")} onMouseLeave={() => setHoveredProductsSublink(null)}>
                            <Link aria-label="redirect to round bar products" to="/Products/Round-Bars" onClick={hideNav}>Round-Bars</Link>
                          </li>
                          <li onMouseEnter={() => setHoveredProductsSublink("Channels")} onMouseLeave={() => setHoveredProductsSublink(null)}>
                            <Link aria-label="redirect to channels products made by mild steel" to="/Products/Channels" onClick={hideNav}>Channels</Link>
                          </li>
                          <li onMouseEnter={() => setHoveredProductsSublink("Angles")} onMouseLeave={() => setHoveredProductsSublink(null)}>
                            <Link aria-label="redirect to angles page" to="/Products/Angles" onClick={hideNav}>Angles</Link>
                          </li>

                        </ul>
                      </div>
                      <div className="ImageContainer">
                        {hoveredProductsSublink === "Flat-Bars" && <img src="https://webtesting-upload.vercel.app/assets/flatbar2-AIX5AiwC.jpg" alt="image of product name Flat-Bars" />}
                        {hoveredProductsSublink === "Round-Bars" && <img src="https://webtesting-upload.vercel.app/assets/RoundBars1-CGZDPqFq.jpeg" alt="Round-Bars made up of mild steel" />}
                        {hoveredProductsSublink === "Channels" && <img src="https://webtesting-upload.vercel.app/assets/channels3-CZ3B0n8e.jpg" alt=" mild steel Channels used in industry" />}
                        {hoveredProductsSublink === "Angles" && <img src="https://webtesting-upload.vercel.app/assets/angles5-CWuBRgWS.jpg" alt=" image of Angles made up of mild steel" />}
                        {hoveredProductsSublink === "Applications" && <img src="" alt="Applications" />}
                        {!hoveredProductsSublink && <img src="https://webtesting-upload.vercel.app/assets/flatbar2-AIX5AiwC.jpg" alt="Default" />}
                      </div>
                    </div>
                  )}
                  {item.link.trim() === "Manufacturing" && (
                    <div className="DropdownComponent infra">
                      <div className="subLinkContainer">
                        <ul>
                          <li onMouseEnter={() => setHoveredInfrastructureLink("Manufacturing")} onMouseLeave={() => setHoveredInfrastructureLink(null)}>
                            <Link aria-label="redirect to manufacturing page" to="/Manufacturing" onClick={hideNav}>Infrastructure</Link>
                          </li>
                          <li onMouseEnter={() => setHoveredInfrastructureLink("Quality")} onMouseLeave={() => setHoveredInfrastructureLink(null)}>
                            <Link aria-label="redirect to quality page" to="/Quality" onClick={hideNav}>Quality</Link>
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
          </ul> */}
      </section>
    </>
  );
};

export default Navbar;
