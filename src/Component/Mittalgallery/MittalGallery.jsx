import React, { useEffect } from "react";
import { Row, Col, Image } from "antd";
import mittalImage1 from "./1-min.jpg";
import mittalImage2 from "./2-min.jpg";
import mittalImage3 from "./3-min.jpg";
import mittalImage4 from "./4-min.jpg";
import mittalImage5 from "./5-min.jpg";
import mittalImage6 from "./6-min.jpg";
import mittalImage7 from "./7-min.jpg";
import mittalImage8 from "./8-min.jpg";
import mittalImage9 from "./9-min.jpg";
import mittalImage10 from "./10-min.jpg";
import mittalImage11 from "./11-min.jpg";
import "./Mittalgallery.css"
const MittalGallllery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const MittalGalleryImages = [
        { image: mittalImage1 },
        { image: mittalImage2 },
        { image: mittalImage3 },
        { image: mittalImage4 },
        { image: mittalImage5 },
        { image: mittalImage6 },
        { image: mittalImage7 },
        { image: mittalImage8 },
        { image: mittalImage9 },
        { image: mittalImage10 },
        { image: mittalImage11 }
    ];

    return (
        <>
            <section id="MittalGalleryContainer">
                {/* <div className="productTitle">
                    <h2>Our Gallery</h2>
                </div> */}
                <div className="HeadingContainer">
                    <h2>Our Gallery</h2>
                    <p>Crafting Strength Through Steel Excellence</p>
                </div>

                <br />
                <Row gutter={[16, 16]}>
                    {MittalGalleryImages.map((item, index) => (
                        <Col key={index} xs={24} sm={24} md={12} lg={8}>
                            <div className="gallery-image-container">
                                <Image
                                    src={item.image}
                                    alt={`Mittal Gallery Image ${index + 1}`}
                                    className="Mittal-gallery-image"
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
            </section>
        </>
    );
};

export default MittalGallllery;
