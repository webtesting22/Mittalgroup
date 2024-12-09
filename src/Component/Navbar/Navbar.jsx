import React, { useState, useEffect, } from "react";
import { Collapse } from "antd";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MdOutlineCancel, MdMenu } from "react-icons/md";
import Navigation1 from "./Navigation2.jpg";
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
  const [activeKey, setActiveKey] = useState([]); // Active panel key for collapsing
  const handlePanelChange = (key) => {
    setActiveKey(prevKey => (prevKey.includes(key) ? [] : [key])); // Collapse if key is already active
  };
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

          <Link to={item.path} onClick={() => { toggleNav(); }}>
            {item.link}
          </Link>
        </div>
      ));
    } else {
      const navItem = NavigationData.find((item) => item.link === section);
      const path = navItem?.path || "#";

      return (
        <div className="accordionItem">
          <Link to={path} onClick={() => { toggleNav(); }}>
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
              <img src={isScrolled ? "/images/MittalLogoNew.png" : "/images/MittalLogocopy.png"} alt="Logo" />
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
            <Collapse accordion expandIconPosition="end" activeKey={activeKey} // Pass activeKey to Collapse
              onChange={handlePanelChange} // Handle panel change
            >
              {NavigationData.map((navItem, index) => {
                const hasSubLinks = ["About", "Products", "Manufacturing", "Investors"].includes(navItem.link);
                if (hasSubLinks) {
                  return (<>
                    <Collapse.Panel header={<><Link><span>{navItem.link}</span></Link></>} key={navItem.link} showArrow={true} >
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

      </section>
    </>
  );
};

export default Navbar;
