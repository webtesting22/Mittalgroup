import React,{useEffect} from "react";
import { Row, Col,Image } from "antd";
import "./Mittalgallery.css"


const MSLGallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const MSLGalleryImages = [
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
        { image: "https://webtesting-upload.vercel.app/assets/G1-CjhU0Zn4.png" },
        { image: "https://webtesting-upload.vercel.app/assets/G2-C6JSAg8A.png" },
        { image: "https://webtesting-upload.vercel.app/assets/G4-COAkdo_n.png" },
        { image: "https://webtesting-upload.vercel.app/assets/G5-CVQi2jhQ.png" },
        { image: "https://webtesting-upload.vercel.app/assets/G6-Bodf-Txg.png" },
        { image: "https://webtesting-upload.vercel.app/assets/G7-BqVS2rfA.png" },

    ]
    return (
        <>
            <section id="MSLGalleryContainer">

                <div className="HeadingContainer">
                    <h2 data-aos="fade-up" data-aos-duration="1000">Our Gallery</h2>
                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Crafting Strength Through Steel Excellence</p>
                </div>

                <br />
                <Row gutter={[16, 16]}>
                    {MSLGalleryImages.map((item, index) => (
                        <Col key={index} xs={12} sm={24} md={12} lg={8}>
                            <div>
                                <Image
                                    src={item.image}
                                    alt={`MSL Gallery Image ${index + 1}`}
                                    className="MSL-gallery-image"
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
            </section>
        </>
    );
};

export default MSLGallery;
