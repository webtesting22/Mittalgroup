import React from "react";
import { Row, Col,Image } from "antd";
import "./Mittalgallery.css"


const MittalGallery = () => {

    const MittalGalleryImages = [
        { image: "https://webtesting-upload.vercel.app/assets/1-min-BnI64RRP.jpg" },
        { image: "https://webtesting-upload.vercel.app/assets/2-min-atdJh0He.jpg" },
        { image: "https://webtesting-upload.vercel.app/assets/3-min-W58ErKyY.jpg" },
        { image: "https://webtesting-upload.vercel.app/assets/4-min-D1d6kzRc.jpg" },
        { image: "https://webtesting-upload.vercel.app/assets/5-min-BZ_xFyxz.jpg" },
        { image: "https://webtesting-upload.vercel.app/assets/6-min-D_Ln80Mu.jpg" },
        { image: "https://webtesting-upload.vercel.app/assets/7-min-DJ9opQ1x.jpg" },
        { image: "https://webtesting-upload.vercel.app/assets/8-min-Dr55OPyP.jpg" },
        { image: "https://webtesting-upload.vercel.app/assets/9-min-fS8fdPON.jpg" },
        { image: "https://webtesting-upload.vercel.app/assets/10-min-CIvOlPVC.jpg" },
        { image: "https://webtesting-upload.vercel.app/assets/11-min-BcsCWEI0.jpg" },

    ]
    return (
        <>
            <section id="MittalGalleryContainer">

                <div className="HeadingContainer">
                    <h2 data-aos="fade-up" data-aos-duration="1000">Our Gallery</h2>
                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Crafting Strength Through Steel Excellence</p>
                </div>

                <br />
                <Row gutter={[16, 16]}>
                    {MittalGalleryImages.map((item, index) => (
                        <Col key={index} xs={24} sm={24} md={12} lg={8}>
                            <div>
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

export default MittalGallery;
