import React, { useState, useEffect } from "react";
import "./NumbersComponent.css";
import { Row, Col } from 'antd';

// Data Array
const NumberData = [
    {
        imgsrc:"/images/factory.gif",
        number: 600000,  // Store numbers as integers for counting effect
        data: "Metric Tonnes Manufactured",
        comparison: " Equivalent to 59+ Eiffel Towers",
    },
    {
        imgsrc:"/images/feedback.gif",
        number: 1400,
        data: "Clients",
        comparison: "In 20+ Industries",
    },
    {
        imgsrc:"/images/idea.png",
        number: 60,
        data: "Projects",
        comparison: "Average Project : 10,000 Metric Tonnes"
    },
];

const NumbersComponent = () => {
    const [count, setCount] = useState({});

    useEffect(() => {
        const intervalIds = NumberData.map(item => {
            const intervalId = setInterval(() => {
                setCount(prevCount => {
                    const currentCount = prevCount[item.data] || 0;
                    // If the current count is less than the target, increase it
                    if (currentCount < item.number) {
                        const increment = Math.ceil(item.number / 100);  // Adjust speed
                        return {
                            ...prevCount,
                            [item.data]: currentCount + increment <= item.number ? currentCount + increment : item.number, // Ensure we don't exceed target
                        };
                    } else {
                        clearInterval(intervalId);  // Clear the interval when target is reached
                        return prevCount;  // Return the current state
                    }
                });
            }, 50); // Speed of counting animation

            return intervalId;
        });

        // Cleanup all intervals when the component unmounts
        return () => intervalIds.forEach(clearInterval);
    }, []);

    return (
        <div className="numbers-container" >
            <Row>
                {NumberData.map((item, index) => (
                    <Col lg={8} md={24} xs={24} key={index} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 200}>
                        <div className="number-card">
                            <div className="icon-container">
                                <img src={item.imgsrc} />
                            </div>
                            <h3 className="number">{count[item.data] || 0}+</h3>
                            <p className="data">{item.data}</p>

                            {item.comparison && <p className="comparison"><i class='bx bx-line-chart' style={{ color: "black" }}  ></i>{item.comparison}</p>}

                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default NumbersComponent;
