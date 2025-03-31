import React from "react";
import investor from '/images/investors.jpg';
const IPO = () => {
    return (
        <>
            <div style={{ minHeight: "50vh" }}>
                <div className='TopcontainerPart'>
                    <div className='InsideTop'>
                        <div className='blackOverlay'></div>
                        <div className='ContentContainerAdjust'>
                            <div>
                                <h1>IPO</h1>
                                <p>Find Out More About Our Group Companies</p>
                            </div>
                        </div>
                        <div className='backimageContainer'>
                            <img src={investor} alt="Investors" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default IPO