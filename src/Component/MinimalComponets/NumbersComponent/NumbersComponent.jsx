import React, { useState, useEffect, useRef } from "react";
import "./NumbersComponent.css";
import { Row, Col } from "antd";

// Data Array
const NumberData = [
    {
        imgsrc: "/images/factory.gif",
        number: 600000,
        data: "Metric Tonnes Manufactured",
        comparison: "Equivalent to 59+ Eiffel Towers",
    },
    {
        imgsrc: "/images/feedback.gif",
        number: 1400,
        data: "Clients",
        comparison: "In 20+ Industries",
    },
    {
        imgsrc: "/images/project.gif",
        number: 60,
        data: "Projects",
        comparison: "Average Project: 10,000 Metric Tonnes",
    },
];

const NumbersComponent = () => {
    const [counts, setCounts] = useState([0, 0, 0]); // Array for three numbers
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Array of target numbers
    const targetNumbers = [600000, 1400, 60];

    const startCounting = () => {
        const duration = 4000; // Total duration for counting animation (in ms)
        const startTime = performance.now(); // Start time for animation

        const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime; // Calculate elapsed time
            const progress = Math.min(elapsedTime / duration, 1); // Progress percentage (0 to 1)

            // Update counts based on progress
            const updatedCounts = targetNumbers.map((target) => Math.floor(target * progress));
            setCounts(updatedCounts);

            if (progress < 1) {
                requestAnimationFrame(animate); // Continue animation if not complete
            }
        };

        requestAnimationFrame(animate); // Start animation
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
                else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);
    useEffect(() => {
        if (isVisible) {
            setCounts([0, 0, 0]); // Reset counts
            startCounting(); // Start animations
        }
    }, [isVisible]);
    return (
        <div
            className="numbers-container HomePageClientSection"
            ref={containerRef}
        >
            <div>
                <Row>
                    <Col lg={12}>
                    {/* <div style={{padding:"20px 0px"}}>
                                <h1 style={{color:"#9aa966",fontSize:"40px"}}>{counts[0]}+</h1><h4 style={{fontWeight:"600"}}>Metric Tonnes Manufactured Equivalent to 59+ Eiffel Towers</h4>
                                </div> */}
                        <div className="ImagesContainer">
                            
                            <div className="firstNumber"> <h1>{counts[2]}+</h1> <h4>Projects</h4></div>
                            <img
                                src="https://webtesting-upload.vercel.app/assets/G1-CjhU0Zn4.png"
                                alt=""
                            />
                            <img
                                src="https://webtesting-upload.vercel.app/assets/G4-COAkdo_n.png"
                                alt=""
                            />
                            <div className="secondNumber"><h1>{counts[1]}+</h1> <h4>Clients</h4></div>

                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="rightSideContainerContent ContentContainerHome ">
                            <div>
                                <h4>Work Experience</h4>
                                <h1>Innovative Logistics, Global Reach</h1>
                               
                                <p>With a legacy of delivering seamless logistics solutions, our expertise spans global supply chains, ensuring efficiency, reliability, and innovative approaches to meet client needs.</p>
                                <hr />
                                <div style={{padding:"20px 0px",paddingBottom:"5px"}}>
                                <h1 style={{color:"#9aa966",fontSize:"40px"}}>{counts[0]}+</h1><h4 style={{fontWeight:"600"}}>Metric Tonnes Manufactured Equivalent to 59+ Eiffel Towers</h4>
                                </div>
                                <ul>
                                    <li>
                                        Personal Protective Equipment (PPE)
                                    </li>
                                    <li>
                                        Hazard Identification and Risk Assessment:
                                    </li>
                                    <li>
                                        Safe Equipment Usage
                                    </li>
                                    <li>
                                        Emergency Preparedness
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </Col>
                </Row>
            </div>
            {/* <Row>
                {NumberData.map((item, index) => (
                    <Col
                        lg={8}
                        md={24}
                        xs={24}
                        key={index}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={index * 200}
                    >
                        <div className="number-card">
                            <div className="icon-container">
                                <img src={item.imgsrc} alt={item.data} />
                            </div>
                            <h3 className="number">{count[item.data] || 0}+</h3>
                            <p className="data">{item.data}</p>
                            {item.comparison && (
                                <p className="comparison">
                                    <i
                                        className="bx bx-line-chart"
                                        style={{ color: "white" }}
                                    ></i>
                                    {item.comparison}
                                </p>
                            )}
                        </div>
                    </Col>
                ))}
            </Row> */}
        </div>
    );
};

export default NumbersComponent;
