import React, { useState, useEffect,useRef } from "react";
import "./NumbersComponent.css";
import { Row, Col } from 'antd';

// Data Array
const NumberData = [
    {
        imgsrc: "/images/factory.gif",
        number: 600000,  // Store numbers as integers for counting effect
        data: "Metric Tonnes Manufactured",
        comparison: " Equivalent to 59+ Eiffel Towers",
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
        comparison: "Average Project : 10,000 Metric Tonnes"
    },
];

const NumbersComponent = () => {
    const [count, setCount] = useState({});
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const startCounting = () => {
        const duration = 2000; // 2 seconds for animation
        const increments = NumberData.map(item => Math.ceil(item.number / (duration / 50))); // Calculate increments
        const maxIterations = Math.ceil(duration / 50); // Maximum iterations to reach target

        let iteration = 0;

        const intervalId = setInterval(() => {
            if (iteration < maxIterations) {
                setCount(prevCount => {
                    const newCounts = { ...prevCount };
                    NumberData.forEach((item, index) => {
                        const currentCount = prevCount[item.data] || 0;
                        newCounts[item.data] = Math.min(currentCount + increments[index], item.number);
                    });
                    return newCounts;
                });
                iteration++;
            } else {
                clearInterval(intervalId); // Stop counting once the animation ends
            }
        }, 50);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
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
            setCount({}); // Reset count when becoming visible
            startCounting(); // Start counting animation
        }
    }, [isVisible]);

    return (
        <div className="numbers-container" ref={containerRef} >
            <Row>
                {NumberData.map((item, index) => (
                    <Col lg={8} md={24} xs={24} key={index} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 200}>
                        <div className="number-card">
                            <div className="icon-container">
                                <img src={item.imgsrc} />
                            </div>
                            <h3 className="number">{count[item.data] || 0}+</h3>
                            <p className="data">{item.data}</p>

                            {item.comparison && <p className="comparison"><i class='bx bx-line-chart' style={{ color: "white" }}  ></i>{item.comparison}</p>}

                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default NumbersComponent;
