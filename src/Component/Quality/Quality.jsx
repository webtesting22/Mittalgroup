import React, { useEffect } from "react";
import "./Quality.css";
import { Row, Col } from 'antd';
import DemoPicture from "./DemoPicture.jpg"
const QualityData = [
    {
        title: "In-House Fully Equipped Testing Laboratory",
        para: "Our in-house fully equipped testing laboratory ensures that every steel product undergoes rigorous quality assessments, maintaining the highest standards of strength and durability. This commitment to excellence allows us to deliver reliable solutions tailored to meet our clients' needs.",
        subpoints: [
            {
                imgpath: "",
                title: "Location",
                description: "Each of our manufacturing units features a dedicated laboratory outfitted with the latest testing technology."
            },
            {
                imgpath: "/images/Quality Icons/capabilities.png",
                title: "Capabilities",
                description: "Equipped for a range of tests, including tensile strength, impact resistance, and chemical composition analysis."
            },
            {
                imgpath: "/images/Quality Icons/clipboard.png",
                title: "On-Site Testing",
                description: "Allows real-time quality checks during production, reducing delays and ensuring immediate quality assurance."
            }
        ]
    },
    {
        title: "Mechanical and Chemical Testing",
        subpoints: [
            {
                imgpath: "/images/Quality Icons/test.png",
                title: "Mechanical Testing",
                description: "Includes tensile, compressive, and impact tests to assess material strength and durability under stress."
            },
            {
                imgpath: "/images/Quality Icons/chemistry.png",
                title: "Chemical Testing",
                description: "Conducted to verify the precise chemical composition of materials, ensuring compliance with required standards."
            },
            {
                imgpath: "/images/Quality Icons/quality.png",
                title: "Safety Assurance",
                description: "Ensures products meet safety specifications, making them reliable for demanding applications."
            }
        ]
    },
    {
        title: "ISO 9001:2015 Certified",
        subpoints: [
            {
                imgpath: "/images/Quality Icons/service.png",
                title: "Standardization",
                description: "Our quality management systems comply with ISO 9001:2015, a globally recognized standard for quality assurance."
            },
            {
                imgpath: "/images/Quality Icons/consistency.png",
                title: "Consistency",
                description: "ISO certification confirms that our processes are consistent, well-documented, and continuously optimized."
            },
            {
                imgpath: "/images/Quality Icons/customer-loyalty.png",
                title: "Customer Confidence",
                description: "This certification underscores our commitment to quality, providing customers with assurance that our products meet international standards."
            }
        ]
    },
    {
        title: "Compliance with BIS Standards",
        subpoints: [
            {
                imgpath: "/images/Quality Icons/bis.png",
                title: "Bureau of Indian Standards (BIS)",
                description: "We adhere to BIS norms, ensuring our products align with Indian quality and safety regulations."
            },
            {
                imgpath: "/images/Quality Icons/protection.png",
                title: "Market Credibility",
                description: "BIS compliance positions our products as reliable and safe for use in critical applications, especially in the construction industry."
            },
            {
                imgpath: "/images/Quality Icons/hand-shake.png",
                title: "Customer Trust",
                description: "Customers can rely on our products knowing they comply with stringent national standards."
            }
        ]
    },
    {
        title: "ISI Approved Brand",
        subpoints: [
            {
                imgpath: "/images/Quality Icons/Isi_mark.svg",
                title: "ISI Mark Certification",
                description: "Our brand has earned the ISI mark, a symbol of quality recognized across India."
            },
            {
                imgpath: "/images/Quality Icons/regulatory.png",
                title: "Regulatory Assurance",
                description: "The ISI mark confirms that our products meet rigorous quality and performance requirements."
            },
            {
                imgpath: "/images/Quality Icons/reputation.png",
                title: "Brand Reputation",
                description: "Being ISI-approved reinforces our reputation as a trusted provider of high-quality, durable, and safe products."
            }
        ]
    }
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
                    <br />
                    {/* <hr /> */}
                </div>
            </section>
            {/* -------------  ShowCaseImageContainer ------------------- */}
            <div className="ShowCaseBannerContainer">
                <div className="FitContentImage">
                    <img src="https://images.unsplash.com/photo-1506855868560-4ae177c39018?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
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
                                    <Col lg={8} md={24}>
                                        <h2 data-aos="fade-up" data-aos-duration="1000">{qualitySection.title}</h2>

                                    </Col>
                                    <Col lg={16} md={24}>
                                        <p style={{ margin: "0px" }}>{qualitySection.para}</p>
                                    </Col>
                                </Row>
                            </div>
                            <br />
                            <Row gutter={[16, 16]} style={{ margin: "0px" }}>
                                {qualitySection.subpoints.map((subpoint, subIndex) => (
                                    <Col key={subIndex} lg={8} md={8} sm={12} style={{ padding: "2px" }}>
                                        <div className="qualityCard" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={subIndex * 200}>

                                            <div className="CardContent">
                                                <h3><b>{subpoint.title}</b></h3>
                                                <p>{subpoint.description}</p>
                                            </div>
                                            <div className="qualityIconContainer">

                                                <img src={DemoPicture} alt={`${subpoint.title} Icon`} />
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
