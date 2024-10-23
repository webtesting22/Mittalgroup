import React from "react";
import { Row, Col, Image, Button } from "antd";
import "./MittalSectionHomePageContainer.css"
import FlatBars1 from "./FlatBars1.jpeg"
import RoundBars1 from "./RoundBars1.jpeg"
import ChannelsBar1 from "./ChannelsBar1.jpeg"
import Angles1 from "./Angles1.jpeg"
import { Link } from "react-router-dom";
const MittalHomePage = () => {

    const CardsContent = [
        {
            cardTitle: "Flat Bars",
            topheading: "Strength and Versatility in Steel",
            cardDescription: "Steel flat bars are durable, rectangular-shaped metal bars used in construction and fabrication. They offer strength and versatility for structural supports and custom projects.",
            CardImages: [
                {
                    img: FlatBars1
                },

            ]
        },
        {
            cardTitle: "Round Bars",
            topheading: "Precision and Strength in Every Rod",
            cardDescription: "Steel round bars are strong, cylindrical rods commonly used in construction, machining, and industrial applications. They provide excellent durability and precision for shafts, supports, and custom metalwork.",
            CardImages: [
                {
                    img: RoundBars1
                },

            ]
        },
        {
            cardTitle: "Channels",
            topheading: "Stability and Support in Steel",
            cardDescription: "Steel channels are U-shaped metal profiles widely used in construction, framing, and structural support. They offer strength and stability for load-bearing applications and custom fabrication projects.",
            CardImages: [
                {
                    img: ChannelsBar1
                },

            ]
        },
        {
            cardTitle: "Angles",
            topheading: "Strength and Stability from Every Angle",
            cardDescription: "Steel angles are L-shaped metal bars used for structural reinforcement and framing in construction and engineering projects. They provide strength, stability, and versatility for various applications.",
            CardImages: [
                {
                    img: Angles1
                },

            ]
        },

    ]
    return (
        <>
            <section className="MittalSectionHomePageContainer">

                <div className="HeadingContainer">
                    <h1>We Build Innovative Strength</h1>
                </div>
                <div className="MittalProductsCards">
                    {CardsContent.map((item, index) => (
                        <div className="RowAdjust" key={index} data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}>
                            <Row >
                                <Col lg={12} md={24}>
                                    <div className="ContentContainerHome">
                                        <div>
                                            <h4>{item.topheading}</h4>
                                            <h2>{item.cardTitle}</h2>
                                            <p>{item.cardDescription}</p>
                                            <Link to="/Products"><button>Read More</button></Link>
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} md={24}>
                                    <div className="ImageContainer">
                                        {item.CardImages[0].img ? (
                                            <div className="ImageHeightContainer">
                                                <Image src={item.CardImages[0].img} alt={item.cardTitle} />
                                            </div>
                                        ) : (
                                            <div>No Image Available</div> // Placeholder if no image is available
                                        )}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))}

                </div>
            </section>
        </>
    )
}
export default MittalHomePage