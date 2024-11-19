import React, { useState } from "react";
import './Investors.css';
import carousal3 from "../Home/carousal3.jpeg"
import "../AboutUs/AboutUs.css";
import { Row, Col } from 'antd';
import { Radio, Tabs } from 'antd';
import DocumentData from "./DocumentData.jsx"
const Investors = () => {
    const [selectedCompany, setSelectedCompany] = useState("MSL");

    const handleCompanyClick = (company) => {
        setSelectedCompany(company);
    };

    const renderDocuments = (data) => {
        const entries = Object.entries(data);
        return entries.map(([key, value]) => {
            if (typeof value === "object") {
                return (
                    <div key={key} className="documentListContainer">
                        <h1 className="HeadingContainer">{key}</h1>
                        <ul>{renderDocuments(value)}</ul>
                    </div>
                );
            } else {
                const fileName = value.split("/").pop(); // Extract the file name
                return (
                    <a href={value} download={fileName} target="_blank" rel="noopener noreferrer">
                        <li key={key} style={{ listStyle: "none" }}>
                            <i class='bx bx-file'></i>

                            {fileName}

                        </li>
                    </a>
                );
            }
        });
    };
    return (
        <>
            <section className="investorsSection">
                <div className='TopcontainerPart'>
                    <div className='InsideTop'>
                        <div className='blackOverlay'>

                        </div>
                        <div className='ContentContainerAdjust'>
                            <div>
                                <h1>Investors</h1>
                                <p>Find Out More About Our Business</p>
                            </div>
                        </div>
                        <div className='backimageContainer'>
                            <img src={carousal3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="documentsSection">
                    <Row gutter={[16, 16]}>
                        <Col lg={6}>
                            <div className="companyList"
                            >
                                <ul>
                                    {Object.keys(DocumentData).map((company) => (
                                        <li
                                            key={company}
                                            onClick={() => handleCompanyClick(company)}
                                            style={{
                                                cursor: "pointer",
                                                fontWeight: company === selectedCompany ? "bold" : "normal",
                                                listStyle: "none",
                                                border: "2px solid black",
                                                padding: "10px",
                                            }}
                                        >
                                            {company}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={18}>

                            <div>
                                {/* <h3>{selectedCompany}</h3> */}
                                <ul> {renderDocuments(DocumentData[selectedCompany])}</ul>
                            </div>
                        </Col>
                    </Row>

                    <div>


                    </div>
                </div>
            </section>
        </>
    )
}
export default Investors;