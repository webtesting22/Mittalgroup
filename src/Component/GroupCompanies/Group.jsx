import React, { useEffect } from 'react'
import MSLSectionsLogo from "/images/big-mittal-logo-section.png";
import MSLSteelLogo from "/images/big-mittal-steel-logo.png";
import AMSteelLogo from "/images/big-am-steel-logo.png";
import ArooIndustriesLogo from "/images/big-aroo-industries-logo.png";
import BrGlobalLogo from "/images/big-br-global-logo.png";
import ArmaanyaTextiles from "/images/big-armaanya-textiles-logo.png";
import ARSteelLogo from "/images/big-ar-steel-logo.png";
import ArmaanImpexLogo from "/images/big-arman-impex-logo.png";
import entertainment from "/images/entertainment-logo.png";
import { Row, Col, Table } from "antd";
import Home from '../Home/Home';
import GroupImagesBack from "../../../public/images/GroupImagesBack.avif"
import './Group.css'

const Group = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <Home backgroundImage={GroupImagesBack} /> */}
      <section id='GroupCompanies'>
        <div id='CardContainer'>
          <Row>
            <Col lg={6} md={24} data-aos="fade-up">
              <div>
                <h2 >MSL </h2>
                <img src={MSLSectionsLogo} alt="" />
              </div>
            </Col>
            <Col lg={18} md={24} data-aos="fade-up">
              <div className='RightSideContainerContent'>
                <p><b>MSL unit-I started its journey back in 2006,</b> and today it’s one of the largest rolling mills in Ahmedabad in the mild steel category. MSL unit-II started its production back on 1st April, 2008 near the same location with having a production capacity of 60,000 Metric Tons collectively. It’s the first member of the AB MSL group of companies. MSL is into the rolling of a wide range of MS sections. MSL is in the quest for excellence by leveraging modern technologies</p>
                <br />
                <h3>The major products of MSL are:</h3>
                <br />
                <table border="1" cellpadding="10" cellspacing="0">
                  <thead>
                    <tr>
                      <th>PRODUCT</th>
                      <th>RANGE (IN MM)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Angles</td>
                      <td>Dimensions in mm: 35*35*5 to 75*75*10</td>
                    </tr>
                    <tr>
                      <td>Channels</td>
                      <td>Dimensions in mm: 75*40 to 100*50</td>
                    </tr>
                    <tr>
                      <td>Round bars</td>
                      <td>Dimensions in mm: 16 to 32</td>
                    </tr>
                    <tr>
                      <td>Flat bars</td>
                      <td>Dimensions in mm: 50*6 to 150*25</td>
                    </tr>
                  </tbody>
                </table>

                <br />
                <p>MSL is one of the largest manufacturers of rolled structural steel products. The specialty of MSL is that it rolls the entire range of MS products. The project is equipped with sufficient raw material and manpower for crafting quality products and deliver them to a wide customer base. MSL believes in building such a modern industrial base which is strong and self reliant. It’s an ISO 9001 organization with having other corporate certificates from GETCO.</p>
                <br />
                <p>Also, MSL is a proud member of different coveted organisations like Gujarat Re-rolling Mills Association, All India Furnace Association and others.</p>
              </div>
            </Col>
          </Row>
        </div>
        <div id='CardContainer'>
          <Row>
            <Col lg={6} md={24} data-aos="fade-up">
              <div >
                <h2>MSL STEEL, AM STEEL & AROO INDUSTRIES</h2>
                <img src={MSLSteelLogo} alt="" />
                <img src={AMSteelLogo} alt="" />
                <img src={ArooIndustriesLogo} alt="" />
              </div>
            </Col>
            <Col lg={18} md={24} data-aos="fade-up">
              <div className='RightSideContainerContent'>
                <p><b>MSL Steel,</b> AM Steel and Aroo Industries are the proud members of AB MSL group of companies which were established in 2011. MSL Steel and AM Steel are industrial induction furnace manufacturing companies, and Aroo Industries is in the production of MS and alloy steel ingots. Previously, MSL Steel and AM Steel were commissioned together in 2011. Later Aroo industries came into the picture in 2015.</p>
                <br />
                <p>The collective production capacity of this group is set to 100,000 metric tons per annum. We believe in the technologies which integrate a layer of recycling process with our steel production techniques. We are proud to say that, the main constituents or input material for our steel products are the scraps and sponge iron chunks. We have a group of highly skilled and strong workforce behind us, and our continuous growth proves our mettle and authority in this niche.
                </p>
                <br />
                <h3>Major Certifications & Memberships:</h3>
                <br />
                <h3>MSL Steel</h3>
                <p>ISI Licence No. CM/L3777583
                  MEMBERSHIP IN GUJARAT CHAMBER OF COMMERCE & INDUSTRY
                  MEMBERSHIP IN ALL INDIA FURNACE ASSOCIATION
                  GPCB CERTIFICATE</p>
                <br />
                <h3>AM STEEL</h3>
                <p>ISO 9001:2008 CERTIFICATION of DNV
                  ISI Licence No. CM/L3871979
                  GPCB CERTIFICATE
                  MEMBERSHIP IN GUJARAT CHAMBER OF COMMERCE & INDUSTRY
                  MEMBERSHIP IN ALL INDIA FURNACE ASSOCIATION
                </p>
                <br />
                <h3>AROO INDUSTRIES</h3>
                <p>ISI License No. CM/L3945881
                  GPCB CERTIFICATE
                  MEMBERSHIP IN GUJARAT CHAMBER OF COMMERCE & INDUSTRY
                  MEMBERSHIP IN ALL INDIA FURNACE ASSOCIATION
                </p>
                <br />
                <p>Also, MSL is a proud member of different coveted organisations like Gujarat Re-rolling Mills Association, All India Furnace Association and others.</p>
              </div>
            </Col>
          </Row>
        </div>
        <div id='CardContainer'>
          <Row>
            <Col lg={6} md={24} data-aos="fade-up">
              <div >
                <h2>BR GLOBAL & ARMAANYA TEXTILES PVT. LTD.</h2>
                <img src={BrGlobalLogo} alt="" />
                <img src={ArmaanyaTextiles} alt="" />
              </div>
            </Col>
            <Col lg={18} md={24} data-aos="fade-up">
              <div className='RightSideContainerContent'>
                <p><b>AB MSL group of company believes in the high quality living standards,</b> and we committed to bring in excellence in every section of this human society. After experiencing the relentless growth in the steel production sectors, we had directed our undivided attention towards textile and fashion sector.
                  For making this dream of ours into a buzzing reality, we started our textile production under the name of BR Global & Armaanya Textiles Pvt. Ltd who started their journey in June 2015.</p>
                <br />
                <p>Quality is our commitment, and with that vision we have equipped our weaving unit with 64 state of the art automatic air jet looms designed by one of the world’s leading companies namely, TSUDAKOMA & PICANOL. Currently, we weave high quality Denim, Cotton and Synthetic grey cloth from a wide range of qualified yarn counts. The Annual production capacity of our weaving unit is about 10 million meters.</p>
                <br />
              </div>
            </Col>
          </Row>
        </div>
        <div id='CardContainer'>
          <Row>
            <Col lg={6} md={24} data-aos="fade-up">
              <div>
                <h2>AR STEEL & ARMAAN IMPEX</h2>
                <img src={ARSteelLogo} alt="" />
                <img src={ArmaanImpexLogo} alt="" />
              </div>
            </Col>
            <Col lg={18} md={24} data-aos="fade-up">
              <div className='RightSideContainerContent'>
                <p>Today, <b>AR Steel & Armaan Impex are well known names in the steel products trading sector.</b> We ventured ourselves into steel products trading back in 2012 under the name AR Steel. We started the Armaan Impex in 2013 for strengthening our grip on steel trading sector. Since then, we have seen several folds growth in our trading volume by delivering our commitments.</p>
                <br />
                <h3>We are into the trading of:</h3>
                <br />
                <p>Ferrous & Non-Ferrous Scrap – Ferro Silicon, Ferro Manganese, Ferro Chrome, Silicon Manganese, etc.</p>
                <br />
                <p>Iron & Steel Products – TMT Bars (To Builders) & Billets (Mainly Welspun)</p>
                <br />
                <p>We do take part in online auctions of steel scraps and other steel products of various large companies situated across the nation.</p>
              </div>
            </Col>
          </Row>
        </div>
        <div id='CardContainer'>
          <Row>
            <Col lg={6} md={24} data-aos="fade-up">
              <div>
                <h2>AB MSL ENTERTAINMENT</h2>
                <img src={entertainment} alt="" />
              </div>
            </Col>
            <Col lg={18} md={24} data-aos="fade-up">
              <div className='RightSideContainerContent'>
                <p>AB MSL entertainment is one of our ambitious projects which is still at its budding stage. We dream to establish a high quality production house with all the necessary technologies built in and with a highly trained and experienced media production team. We have started our journey in 2016 and expecting a continuous flow of sustainable growth within the near future. We dream to make AB MSL Entertainment a big name in the entertainment sector, and we are leaving no stone unturned for staying at the cutting edge of the modern entertainment revolution.</p>
                <br />
                <p>Currently, we are producing several high end and exciting media projects, and we are looking forward to producing in some of the big banners of featured movie production units and Television shows soon.</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

export default Group
