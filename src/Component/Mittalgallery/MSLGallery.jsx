import React,{useEffect} from "react";
import { Row, Col,Image } from "antd";
import "./Mittalgallery.css"


const MSLGallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const MSLGalleryImages = [
        { image: "https://webtesting-upload.vercel.app/assets/1-min-BnI64RRP.jpg", alt:"Mild steel construction for an industrial manufacturing unit in Ahmedabad" },
        { image: "https://webtesting-upload.vercel.app/assets/2-min-atdJh0He.jpg", alt:"Channels made up of mild steel" },
        { image: "https://webtesting-upload.vercel.app/assets/3-min-W58ErKyY.jpg", alt:"worker making channels for imdustry" },
        { image: "https://webtesting-upload.vercel.app/assets/4-min-D1d6kzRc.jpg", alt:"hot mild steel" },
        { image: "https://webtesting-upload.vercel.app/assets/5-min-BZ_xFyxz.jpg", alt:"workers using machine" },
        { image: "https://webtesting-upload.vercel.app/assets/6-min-D_Ln80Mu.jpg", alt:"heavy steels in furnace" },
        { image: "https://webtesting-upload.vercel.app/assets/7-min-DJ9opQ1x.jpg", alt:"worker using furnace" },
        { image: "https://webtesting-upload.vercel.app/assets/8-min-Dr55OPyP.jpg", alt:"heavy round iron rods" },
        { image: "https://webtesting-upload.vercel.app/assets/9-min-fS8fdPON.jpg", alt:"square steel bars lifting up by machine" },
        { image: "https://webtesting-upload.vercel.app/assets/10-min-CIvOlPVC.jpg", alt:"using grinder to cut the mild steel" },
        { image: "https://webtesting-upload.vercel.app/assets/11-min-BcsCWEI0.jpg", alt:"worker using solding iron" },
        { image: "https://webtesting-upload.vercel.app/assets/G1-CjhU0Zn4.png", alt:"hot steel square bar" },
        { image: "https://webtesting-upload.vercel.app/assets/G2-C6JSAg8A.png", alt:"workers making round bars near fan" },
        { image: "https://webtesting-upload.vercel.app/assets/G4-COAkdo_n.png", alt:"loading flat bars in vehicle" },
        { image: "https://webtesting-upload.vercel.app/assets/G5-CVQi2jhQ.png", alt:"making of angles" },
        { image: "https://webtesting-upload.vercel.app/assets/G6-Bodf-Txg.png", alt:"making of long flat bars" },
        { image: "https://webtesting-upload.vercel.app/assets/G7-BqVS2rfA.png", alt:"many workers near many furnace" },

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
                                    alt={item.alt}
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
