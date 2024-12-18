import React, { useEffect } from "react";
import "./Quality.css";
import { Row, Col } from 'antd';
const QualityData = [
    {
        title: "In-House Fully Equipped Testing Laboratory",
        para: "Our in-house fully equipped testing laboratory ensures that every steel product undergoes rigorous quality assessments, maintaining the highest standards of strength and durability. This commitment to excellence allows us to deliver reliable solutions tailored to meet our clients' needs.",
        subpoints: [
            {
                imgpath: "https://webtesting-upload.vercel.app/assets/Location-cFD7QPDP.jpg",
                title: "Location",
                description: "Each of our manufacturing units features a dedicated laboratory outfitted with the latest testing technology."
            },
            {
                imgpath: "https://webtesting-upload.vercel.app/assets/Capabilities-DatufOdI.jpg",
                title: "Capabilities",
                description: "Equipped for a range of tests, including tensile strength, impact resistance, and chemical composition analysis."
            },
            {
                imgpath: "https://webtesting-upload.vercel.app/assets/On%20site%20testing-DqO2lhXE.jpg",
                title: "On-Site Testing",
                description: "Enables real-time quality checks during production, reducing delays and ensuring immediate assurance."
            }
        ]
    },
    {
        title: "Mechanical and Chemical Testing",
        subpoints: [
            {
                imgpath: "https://webtesting-upload.vercel.app/assets/Mechanical%20Testing-DW2DrspG.jpg",
                title: "Mechanical Testing",
                description: "Includes tensile, compressive, and impact tests to assess material strength and durability under stress."
            },
            {
                imgpath: "https://webtesting-upload.vercel.app/assets/Chemical%20Testing-D6CMu6H9.jpg",
                title: "Chemical Testing",
                description: "Conducted to verify the precise chemical composition of materials, ensuring compliance with required standards."
            },
            {
                imgpath: "https://webtesting-upload.vercel.app/assets/Safety%20Assurance-B0eixl7V.jpg",
                title: "Safety Assurance",
                description: "Ensures products meet safety specifications, making them reliable for demanding applications."
            }
        ]
    },
    {
        title: "ISO 9001:2015 Certified",
        subpoints: [
            {
                imgpath: "https://webtesting-upload.vercel.app/assets/Standardization-mbv125EB.jpg",
                title: "Standardization",
                description: "Our quality management systems comply with ISO 9001:2015, a globally recognized standard for quality assurance."
            },
            {
                imgpath: "https://webtesting-upload.vercel.app/assets/Consistency-DQp9slDr.avif",
                title: "Consistency",
                description: "ISO certification confirms that our processes are consistent, well-documented, and continuously optimized."
            },
            {
                imgpath: "https://webtesting-upload.vercel.app/assets/Customer%20Confidence-DCiUEZPW.jpg",
                title: "Customer Confidence",
                description: "This certification assures customers that our products meet stringent international standards."
            }
        ]
    },
    {
        title: "Compliance with BIS Standards",
        subpoints: [
            {
                imgpath: "https://webtesting-upload.vercel.app/assets/Bureau%20of%20Indian%20Standards%20(BIS)-BoQEtpLY.jpeg",
                title: "Bureau of Indian Standards",
                description: "We adhere to BIS norms, ensuring our products align with Indian quality and safety regulations."
            },
            {
                imgpath: "https://webtesting-upload.vercel.app/assets/Market%20Credibility-Ck7ZXWM4.jpg",
                title: "Market Credibility",
                description: "BIS compliance ensures product reliability and safety for critical construction applications.",
            },
            {
                imgpath: "https://webtesting-upload.vercel.app/assets/Customer%20Trust-C9WOSw7g.jpg",
                title: "Customer Trust",
                description: "Customers can rely on our products knowing they comply with stringent national standards."
            }
        ]
    },
    // {
    //     title: "ISI Approved Brand",
    //     subpoints: [
    //         {
    //             imgpath: "https://webtesting-upload.vercel.app/assets/ISI%20Mark%20Certification-CnCq62xf.jpg",
    //             title: "ISI Mark Certification",
    //             description: "Our brand has proudly earned the ISI mark, a trusted symbol of quality recognized across India.",
    //         },
    //         {
    //             imgpath: "https://webtesting-upload.vercel.app/assets/Regulatory%20Assurance-C0APrhVs.jpg",
    //             title: "Regulatory Assurance",
    //             description: "The ISI mark confirms that our products meet rigorous quality and performance requirements."
    //         },
    //         {
    //             imgpath: "https://webtesting-upload.vercel.app/assets/Brand%20Reputation-DOxEazHy.jpg",
    //             title: "Brand Reputation",
    //             description: "ISI approval reinforces our reputation as a trusted provider of high-quality, durable, and safe products."
    //         }
    //     ]
    // }
];

const Quality = () => {
    const qualityPoints = [
        {
            icon: "/images/Quality Icons/durability.svg",
            title: "High Durability",
        },
        {
            icon: "/images/Quality Icons/corrosion.svg",
            title: "Corrosion Resistant",
        },
        {
            icon: "/images/Quality Icons/engineering.svg",
            title: "Precision Engineering",
        },
        {
            icon: "/images/Quality Icons/manufacturing.svg",
            title: "Sustainable Manufacturing",
        },
        {
            icon: "/images/Quality Icons/engineering.svg",
            title: "Cost-Effective Solutions",
        },
        {
            icon: "/images/Quality Icons/steel.svg",
            title: "Custom Steel Solutions",
        },
        {
            icon: "/images/Quality Icons/timely.svg",
            title: "Timely Delivery",
        },
        {
            icon: "/images/Quality Icons/iso.svg",
            title: "ISO Certified Quality",
        },
        {
            icon: "/images/Quality Icons/technology.svg",
            title: "Innovative Technologies",
        },
        {
            icon: "/images/Quality Icons/team.svg",
            title: "Expert Team",
        },
        {
            icon: "/images/Quality Icons/quality.svg",
            title: "Stringent Quality Control",
        },
        {
            icon: "/images/Quality Icons/testing.svg",
            title: "Comprehensive Testing",
        },
        {
            icon: "/images/Quality Icons/customer.svg",
            title: "Customer-Centric Approach",
        },
        {
            icon: "/images/Quality Icons/products.svg",
            title: "Wide Range of Products",
        },
        {
            icon: "/images/Quality Icons/technique.svg",
            title: "Advanced Production Techniques",
        },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id="QualitySection">
                <div className="QualityContent">
                    <div className="HeadingContainer">
                        <h2>Quality Assurance at Our Manufacturing Units</h2>
                    </div>
                    <p>Our manufacturing facilities prioritize quality at every stage, with advanced in-house testing laboratories, certified management systems, and rigorous adherence to national standards. This ensures that every product we deliver meets the highest benchmarks for safety, performance, and reliability.</p>

                </div>
            </section>
            <div className="ShowCaseBannerContainer">
                <div className="FitContentImage">
                    <img src="/images/DSC_0145.JPG" />
                    <div className="OverlayBanner">

                    </div>
                    <div className="OverlayContent">
                        <div>
                            <p>Strength in Every Strand
                            </p>
                            <h1 style={{ color: "white", fontWeight: "600" }}>Quality Steel Manufacturing
                            </h1>
                            <p>At our steel manufacturing facility, quality is our top priority. We employ advanced technology and rigorous testing standards to ensure every product meets the highest industry benchmarks. Our commitment to excellence guarantees that our steel is not only strong and reliable but also tailored to meet the specific needs of our clients. With a focus on sustainability and innovation, we strive to set new standards in the steel industry.</p>
                        </div>
                    </div>
                    <div className="BottomContainer">
                        <div className="marquee-container">
                            <div className="marquee">
                                {qualityPoints.map((point, index) => (
                                    <div key={index} className="quality-point">
                                        <img src={point.icon} />
                                        <p>{point.title}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="marquee">
                                {qualityPoints.map((point, index) => (
                                    <div key={index} className="quality-point">
                                        <img src={point.icon} />
                                        <p>{point.title}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section id="QualitySection" style={{ paddingTop: "0px" }}>
                <div className="RowAdjustQuality">
                    {QualityData.map((qualitySection, index) => (
                        <div key={index} className="RowClass">
                            <div className="HeadingContainerQuality">
                                <Row>
                                    <Col lg={24} md={24}>
                                        <div className="HeadingContainer"> <h2 data-aos="fade-up" data-aos-duration="1000">{qualitySection.title}</h2>
                                        </div>

                                    </Col>

                                </Row>
                            </div>
                            <br />
                            <Row gutter={[16, 16]} style={{ margin: "0px", display: "flex", justifyContent: "flex-start" }}>
                                {qualitySection.subpoints.map((subpoint, subIndex) => (
                                    <Col key={subIndex} lg={6} md={8} sm={24} style={{ paddingRight: "5px" }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={subIndex * 200}>
                                        <div className="qualityCard">
                                            <div className="qualityIconContainer">
                                                <img src={subpoint.imgpath} alt={`${subpoint.title} Icon`} />
                                            </div>
                                            <div className="CardContent">
                                                <h3 className="titleOverlay">{subpoint.title}</h3>

                                                <p>{subpoint.description}</p>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            <hr />
                            <br />
                        </div>
                    ))}
                </div>
            </section>
            {/* </div> */}

        </>
    );
};

export default Quality;
