import React, { useEffect } from "react";
import { Row, Col, Image } from "antd";
import "./Mittalgallery.css"


const MSLGallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const MSLGalleryImages = [
        { image: "https://webtesting-upload.vercel.app/assets/1-min-BnI64RRP.jpg", alt: "Mild steel construction for an industrial manufacturing unit in Ahmedabad" },
        { image: "https://webtesting-upload.vercel.app/assets/2-min-atdJh0He.jpg", alt: "Channels made up of mild steel" },
        { image: "https://webtesting-upload.vercel.app/assets/3-min-W58ErKyY.jpg", alt: "worker making channels for imdustry" },
        { image: "https://webtesting-upload.vercel.app/assets/4-min-D1d6kzRc.jpg", alt: "hot mild steel" },
        { image: "https://webtesting-upload.vercel.app/assets/5-min-BZ_xFyxz.jpg", alt: "workers using machine" },
        { image: "https://webtesting-upload.vercel.app/assets/6-min-D_Ln80Mu.jpg", alt: "heavy steels in furnace" },
        { image: "https://webtesting-upload.vercel.app/assets/7-min-DJ9opQ1x.jpg", alt: "worker using furnace" },
        { image: "https://webtesting-upload.vercel.app/assets/8-min-Dr55OPyP.jpg", alt: "heavy round iron rods" },
        { image: "https://webtesting-upload.vercel.app/assets/9-min-fS8fdPON.jpg", alt: "square steel bars lifting up by machine" },
        { image: "https://webtesting-upload.vercel.app/assets/10-min-CIvOlPVC.jpg", alt: "using grinder to cut the mild steel" },
        { image: "https://webtesting-upload.vercel.app/assets/11-min-BcsCWEI0.jpg", alt: "worker using solding iron" },
        { image: "https://webtesting-upload.vercel.app/assets/G1-CjhU0Zn4.png", alt: "hot steel square bar" },
        { image: "https://webtesting-upload.vercel.app/assets/G2-C6JSAg8A.png", alt: "workers making round bars near fan" },
        { image: "https://webtesting-upload.vercel.app/assets/G4-COAkdo_n.png", alt: "loading flat bars in vehicle" },
        { image: "https://webtesting-upload.vercel.app/assets/G5-CVQi2jhQ.png", alt: "making of angles" },
        { image: "https://webtesting-upload.vercel.app/assets/G6-Bodf-Txg.png", alt: "making of long flat bars" },
        { image: "https://webtesting-upload.vercel.app/assets/G7-BqVS2rfA.png", alt: "many workers near many furnace" },
        {
            image: "https://webtesting-upload.vercel.app/assets/GalleryImage-BQwKSS_U.webp", alt: "Welding"
        },
        // {
        //     image: '/images/gallery5.jpg',
        // },
        // {
        //     image: '/images/gallery6.jpg',
        // },

        {
            image: '/images/gallery8.jpg',
        },

        {
            image: '/images/gallery10.jpg',
        },
        {
            image: '/images/gallery12.jpg',
        },

        {
            image: '/images/gallery14.jpg',
        },
        // {
        //     image: '/images/gallery15.jpg',
        // },
        // {
        //     image: '/images/gallery16.jpg',
        // },
        {
            image: '/images/gallery17.jpg',
        },
        {
            image: '/images/gallery18.jpg',
        },
        {
            image: '/images/gallery19.jpg',
        },
        // {
        //     image: '/images/gallery20.jpg',
        // },
        // {
        //     image: '/images/gallery21.jpg',
        // },
        // {
        //     image: '/images/gallery22.jpg',
        // },
        // {
        //     image: '/images/gallery23.jpg',
        // },

        {
            video: "https://webtesting-upload.vercel.app/assets/Gallery%201-DrfFseMw.mp4", alt: "Manufacturing Video", poster: "https://webtesting-upload.vercel.app/assets/VideoThumbnail1-B2eEjmFQ.webp",
        },
        {
            video: "https://webtesting-upload.vercel.app/assets/Gallery%202-DV1crFOn.mp4", alt: "Manufacturing Video", poster: "https://webtesting-upload.vercel.app/assets/VideoThumbnail2-B13RYnoh.webp",
        },
        {
            video: "https://webtesting-upload.vercel.app/assets/Gallery%203-BC7D-lcN.mp4", alt: "Manufacturing Video", poster: "https://webtesting-upload.vercel.app/assets/VideoThumbnail3-BD_B9H0D.webp",
        },

    ]
    return (
        <>
            <section id="MSLGalleryContainer">

                <div className="HeadingContainer">
                    <h2 data-aos="fade-up" data-aos-duration="1000">Our Gallery</h2>
                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">Crafting Strength Through Steel Excellence</p>
                </div>

                <br />
                <Row gutter={[10, 10]}>
                    {MSLGalleryImages.map((item, index) => (
                        <Col key={index} xs={12} sm={24} md={12} lg={8}>
                            <div>
                                {item.video ? (
                                    <video
                                        controls
                                        className="MSL-gallery-image"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        loading="lazy"
                                        poster={item.poster}
                                        preload="none"
                                    >
                                        <source src={item.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <Image
                                        src={item.image}
                                        alt={item.alt}
                                        className="MSL-gallery-image"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                )}
                            </div>
                        </Col>
                    ))}
                </Row>
            </section>
        </>
    );
};

export default MSLGallery;
