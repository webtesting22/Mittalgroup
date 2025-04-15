import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "antd";
import CountUp from "react-countup"
import "./NumbersComponent.css";
const AboutCompany = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [startCount, setStartCount] = useState(false); // State to trigger count-up animation
    const sectionRef = useRef(null); // Ref for the observer

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Always trigger the counter reset each time the section is in view
                if (entry.isIntersecting) {
                    setStartCount(false);  // Reset the count
                    setTimeout(() => {
                        setStartCount(true);  // Start the count-up animation again
                    }, 0);  // Delay the start to ensure reset happens
                }
            },
            {
                threshold: 0.5, // Trigger when 50% of the element is visible
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef); // Observe the section
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const CompanyData = [
        {
            points: "Metric Tonnes Manufactured",
            numbers: 600000
        },
        {
            points: "Projects",
            numbers: 60
        },
        {
            points: "Clients",
            numbers: 1400
        },

    ];
    return (
        <>
            <section id="AboutCompanyContainer" className="section_Padding">

                <div className="DesignedContainer">
                    <h1 data-aos="fade-up"><span style={{ color: "#9aa966" }}>Shaping Excellence</span> in Steel Solutions</h1>
                    <p data-aos="fade-up">Driving the future of infrastructure with high-quality, durable, and innovative steel products.</p>
                </div>

                <div className="CompanyContentRow">

                    <Row>
                        <Col lg={10} md={24}>
                            <div className="ListItemUl" ref={sectionRef}>
                                <ul>
                                    {CompanyData.map((item, index) => (
                                        <div key={index} className="statCard">
                                            {startCount && ( // Only render CountUp when in view
                                                <CountUp
                                                    start={0}
                                                    suffix="+"
                                                    end={item.numbers} // Target value
                                                    duration={3} // Animation duration
                                                    delay={0.3 * index} // Staggered delay for each card
                                                />
                                            )}
                                            <li>{item.points}</li>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={24} xs={24}>
                            <div className="MiddleImageContainer">
                                <img style={{
                                    transform: `translateY(${offsetY * 0.1}px)`, // Adjust speed with the multiplier
                                }} src="https://webtesting-upload.vercel.app/assets/G3-BqsGTIGe.png" alt="" />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                                <div>
                                    <h2 style={{ textAlign: "center" }}>BIS And ISO Certified</h2>
                                    <div className="SideContentContainer">
                                        <div className="ISOLogoContainer"><img src="/images/Isi.png" /></div>
                                        <div className="ISOLogoContainer"><img src="/images/ISO_9001-2015.png" /></div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>

            </section>
        </>
    )
}
export default AboutCompany