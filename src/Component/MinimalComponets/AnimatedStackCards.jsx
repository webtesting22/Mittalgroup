import React from "react";
import { Row, Col } from "antd";
import "./MittalCommon.css";
import FlatbarsImage from "./FlatsBars.jpg"
import Roundbars from "./Roundbars.jpg"
import Channelsbars from "./Channelsbars.webp"
import AnglesBars from "./AnglesBars.jpg"
const AnimatedStackCards = () => {

    const StackCardContent = [
        {
            image: FlatbarsImage,
            Title: "Flat Bars",
            Description: "Description for card 1",
        },
        {
            image: Roundbars
            ,
            Title: "Round Bars",
            Description: "Description for card 2",
        },
        {
            image: Channelsbars,
            Title: "Channels",
            Description: "Description for card 3",
        },
        {
            image: AnglesBars,
            Title: "Angles",
            Description: "Description for card 4",
        },
    ];

    return (
        <>
            <section className="AnimatedStackCards">
                <Row>
                    <Col lg={12} md={12}>
                        <div className="StackContainer">
                           <div>
                           <h2>Our Products</h2>
                           <br />
                            <p>Mittal Sections Limited specialises in the manufacturing and hot re-rolling of a complete
                                range of Mild Steel Sections, including:</p>
                           </div>
                        </div>
                    </Col>
                    <Col lg={12} md={12}>
                        <div className="StackedCardsContainer">
                            {StackCardContent.map((item, index) => {
                                const isLastCard = index === StackCardContent.length - 1; // Check if it's the last card

                                return (
                                    <div
                                        className="AnimatedStackCard"
                                        style={{
                                            position: isLastCard ? 'relative' : 'sticky', // Use relative for the last card
                                            top: isLastCard ? 'auto' : `${20 + index * 5}%`, // No top positioning for the last card
                                            // Decrease width by 10% for each subsequent card
                                            margin: isLastCard ? '20px auto' : '10px auto', // Add margin for the last card
                                        }}
                                        key={index}
                                    >
                                        <img src={item.image} alt={item.Title} />
                                       <div className="ContentContainerCard">
                                       <h3>{item.Title}</h3>
                                       <p>{item.Description}</p>
                                       </div>
                                    </div>
                                );
                            })}
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    );
};

export default AnimatedStackCards;
