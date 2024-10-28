import React, { useState } from "react";
import { Row, Col } from "antd";
import "./MittalCommon.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const AnimatedStackCards = () => {
    const [backgroundImage, setBackgroundImage] = useState("https://webtesting-upload.vercel.app/assets/FlatBars1-DOa6N3xA.jpeg"); // No default image

    const handleMouseEnter = (image) => {
        setBackgroundImage(image);
    };

    return (
        <>
            <section
                className="AnimatedStackCards"
                style={{
                    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "background-image 0.5s ease",
                }}
            >
                <div className="Overlayback">

                </div>
                <Row>
                    <Col lg={12} md={24}>
                        <div className="LeftSideContainer">
                            <div className="HeadingContainer">
                                <h1>
                                    Precision Steel Solutions for Every Need
                                </h1>
                                <p>
                                    We offer a wide range of premium steel products, including flat bars, round bars, and pipes, engineered for strength, durability, and versatility in various industrial applications.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} md={24} className="AdjustColumn">
                        <div className="AnimatedHoverImageChanges">
                            <div className="RightSideHoverLinks">
                                <ul>
                                    <li
                                        onMouseEnter={() => handleMouseEnter("https://webtesting-upload.vercel.app/assets/FlatBars1-DOa6N3xA.jpeg")}
                                    >
                                        <Link to="/MittalProduct/Flat-Bars"><h2 >Flat Bars</h2></Link>
                                        <FaArrowRightLong />
                                    </li>
                                    <li
                                        onMouseEnter={() => handleMouseEnter("https://webtesting-upload.vercel.app/assets/RoundBars1-CGZDPqFq.jpeg")}
                                    >
                                        <h2>Round Bars</h2>
                                        <FaArrowRightLong />
                                    </li>
                                    <li
                                        onMouseEnter={() => handleMouseEnter("https://webtesting-upload.vercel.app/assets/channels3-CZ3B0n8e.jpg")}
                                    >
                                        <h2>Channels</h2>
                                        <FaArrowRightLong />
                                    </li>
                                    <li
                                        onMouseEnter={() => handleMouseEnter("https://webtesting-upload.vercel.app/assets/Angles1-B8UcZCAq.jpeg")}
                                    >
                                        <h2>Angles</h2>
                                        <FaArrowRightLong />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    );
};

export default AnimatedStackCards;
