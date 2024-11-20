import React, { useState, useEffect } from "react";
import './Investors.css';
import investor from "../Home/investor.avif"
import "../AboutUs/AboutUs.css";
import { Row, Col } from 'antd';
import { Radio, Tabs } from 'antd';
import DocumentData from "./DocumentData.jsx"
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
        return entries.map(([key, value]) => {
            if (typeof value === "object" && !value.title) {
                return (
                    <div key={key} className="documentListContainer">
                        <h1 className="HeadingContainer">{key}</h1>
                        <ul>{renderDocuments(value)}</ul>
                    </div>
                );
            } else if (typeof value === "object" && value.title) {
                // If the object contains a title and filePath
                const { title, filePath } = value;
                return (
                    <a href={filePath} download={title} target="_blank" rel="noopener noreferrer" key={key}>
                        <li style={{ listStyle: "none" }}>
                            <i className="bx bx-file"></i> {title}
                        </li>
                    </a>
                );
            } else {
                // Handle cases where value is a string (fallback)
                const fileName = value.split("/").pop(); // Extract the file name
                return (
                    <a href={value} download={fileName} target="_blank" rel="noopener noreferrer" className="linkContainer" key={key}>
                        <li style={{ listStyle: "none" }}>
                            <i className="bx bx-file"></i> {fileName}<i class='bx bxs-download'></i>
                        </li>
                    </a>
                );
            }
        });
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
                                            }}
                                        >
                                            {company}
                                            
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={1} sm={0} xs={0}/>
                        <Col lg={17} sm={24} xs={24}>

                            <div>
                                {/* <h3>{selectedCompany}</h3> */}
                                <ul> {renderDocuments(DocumentData[selectedCompany])}</ul>
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