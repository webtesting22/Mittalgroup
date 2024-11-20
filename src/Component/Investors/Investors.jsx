import React, { useState, useEffect } from "react";
import './Investors.css';
import investor from "../Home/investor.avif"
import "../AboutUs/AboutUs.css";
import { Row, Col } from 'antd';
import { Radio, Tabs } from 'antd';
import DocumentData from "./DocumentData.jsx";
import pdfIcon from "/images/pdf.png";

const Investors = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [selectedCompany, setSelectedCompany] = useState("MSL");

    const handleCompanyClick = (company) => {
        setSelectedCompany(company);
    };

    const renderDocuments = (data) => {
        const entries = Object.entries(data);

        return (
            <Row gutter={[16, 16]}> {/* Adds spacing between cards */}
                {entries.map(([key, value],index) => {
                    if (typeof value === "object" && !value.title) {
                        return (
                            <Col span={24} key={key}> {/* Full width for headings */}
                                <h1 className="InvestorHeadingContainer">{key}</h1>
                                {renderDocuments(value)}
                            </Col>
                        );
                    } else if (typeof value === "object" && value.title) {
                        const { title, filePath } = value;
                        return (
                            <Col xs={24} sm={24} md={8} key={key} > {/* Adjusts layout for different screen sizes */}
                                <div className="documentCard" data-aos="fade-up" data-aos-duration="500" data-aos-delay={index*200}>
                                    <a href={filePath} download={title} target="_blank" rel="noopener noreferrer">
                                        <img src={pdfIcon} alt="PDF" />
                                        <p>{title}</p>
                                    </a>
                                </div>
                            </Col>
                        );
                    } else {
                        // Handle cases where value is a string (fallback)
                        const fileName = value.split("/").pop(); // Extract the file name
                        return (
                            <Col xs={24} sm={12} md={8} key={key} > {/* Adjusts layout for different screen sizes */}
                                <div className="documentCard">
                                    <a href={value} download={fileName} target="_blank" rel="noopener noreferrer">
                                        <img src={pdfIcon} alt="PDF" />
                                        <p>{fileName}</p>
                                    </a>
                                </div>
                            </Col>
                        );
                    }
                })}
            </Row>
        );
    };


    return (
        <>
            <div className="investorsSection">
                <div className='TopcontainerPart'>
                    <div className='InsideTop'>
                        <div className='blackOverlay'>

                        </div>
                        <div className='ContentContainerAdjust'>
                            <div>
                                <h1>INVESTORS</h1>
                                <p>Find Out More About Our Business</p>
                            </div>
                        </div>
                        <div className='backimageContainer'>
                            <img src={investor} alt="" />
                        </div>
                    </div>
                </div>
                <div className="documentsSection">
                    <Row>
                        <Col lg={6} sm={24} xs={24}>
                            <div className="companyList"
                            >
                                <ul>
                                    {Object.keys(DocumentData).map((company) => (
                                        <li
                                            key={company}
                                            onClick={() => handleCompanyClick(company)}
                                            style={{
                                                fontWeight: company === selectedCompany ? "bold" : "normal",
                                                backgroundColor: company === selectedCompany ? "white" : "whitesmoke"
                                            }}
                                        >
                                            {company}

                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={1} sm={0} xs={0} />
                        <Col lg={17} sm={24} xs={24}>

                            <div>
                                {/* <h3>{selectedCompany}</h3> */}
                                {renderDocuments(DocumentData[selectedCompany])}
                            </div>
                        </Col>
                    </Row>

                    <div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default Investors;