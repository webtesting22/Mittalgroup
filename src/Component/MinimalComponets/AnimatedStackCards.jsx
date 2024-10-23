import React, { useState } from "react";
import { Row, Col } from "antd";
import "./MittalCommon.css";
import FlatbarsImage from "/images/Product Images/FlatBar1.jpeg";
import Roundbars from "/images/Product Images/RoundBar1.jpeg";
import Channelsbars from "/images/Product Images/Channel3.jpeg";
import AnglesBars from "/images/Product Images/Angle10.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
const AnimatedStackCards = () => {
    const [backgroundImage, setBackgroundImage] = useState(FlatbarsImage); // No default image

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
                    <Col lg={12}>
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
                    <Col lg={12}>
                        <div className="AnimatedHoverImageChanges">
                            <div className="RightSideHoverLinks">
                                <ul>
                                    <li
                                        onMouseEnter={() => handleMouseEnter(FlatbarsImage)}
                                    >
                                        <h2>Flat Bars</h2>
                                        <FaArrowRightLong />
                                    </li>
                                    <li
                                        onMouseEnter={() => handleMouseEnter(Roundbars)}
                                    >
                                        <h2>Round Bars</h2>
                                        <FaArrowRightLong />
                                    </li>
                                    <li
                                        onMouseEnter={() => handleMouseEnter(Channelsbars)}
                                    >
                                        <h2>Channels</h2>
                                        <FaArrowRightLong />
                                    </li>
                                    <li
                                        onMouseEnter={() => handleMouseEnter(AnglesBars)}
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
