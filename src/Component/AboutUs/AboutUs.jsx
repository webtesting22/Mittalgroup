import React, { useEffect } from 'react'
import './AboutUs.css'
import bg1 from "./Card1.avif";
import bg2 from "./Card2.avif";
import bg3 from "./Card3.avif";
import bg4 from "./Card4.avif";
import { Col, Row, Image } from "antd"
import cofounder from "/images/co-founder.jpg"
import gallery2 from "/images/gallery2.jpg"
import picasaImg14 from "/images/picasa-img14.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Home from '../Home/Home'
import BackImage from "./BackImage.jpeg"
import { Collapse } from 'antd';
import MittalGroupLogo from "../../../public/images/MittalGroupLogo.png"
const AboutUs = () => {
  const items = [
    {
      key: '1',
      label: (
        <>
          <div className='MittalShape'>
          </div> <h4>Excellence</h4>
          <img src={MittalGroupLogo} alt="" />
        </>
      ),
      children: <><p>Ever since the inception of the group, we have approached every product with the goal of achieving excellence. We deliver the best to our stakeholders and never compromise on the quality of the process and the products we manufacture.</p></>,
    },
    {
      key: '2',
      label: (
        <>
          <div className='MittalShape'>
          </div> <h4>Integrity</h4>
          <img src={MittalGroupLogo} alt="" />
        </>
      ),
      children: <><p>We follow through on the promises we make and that has always been at our core. We translate our belief in transparency into our business model and this is what makes us better every day. Our stakeholders are always at the center of our decisions and that has helped us take the right decisions all along.</p></>,
    },
    {
      key: '3',
      label: (
        <>
          <div className='MittalShape'>
          </div><h4> Trust</h4>
          <img src={MittalGroupLogo} alt="" />
        </>
      ),
      children: <><p>Over the years we have created a cohesive framework based on trust. It encapsulates us and our stakeholders and helps us in building strong, meaningful relations with all our stakeholders.</p></>,
    },
    {
      key: '4',
      label: (
        <>
          <div className='MittalShape'>
          </div> <h4>Our USP</h4>
          <img src={MittalGroupLogo} alt="" />
        </>
      ),
      children: <><p>We know what it takes to stay ahead of the curve.
        We are firm non-believer of the vision- ‘Under commitment, over deliver’. We do commit our best to our customers, and we do deliver our best. Our USP is fuelled by this vision. The cornerstone of our USP is firmly balanced on our four elemental perspectives. Quality, Service, Integrity and Commitment.
        Our learning tool is our customer’s behavioral analysis, and our satisfaction is our customer’s trust. We are here to build healthy relationships with our customers. That’s why, our commitment towards our customers is our pride, and our integrity designs the quality of our products.</p></>,
    },
    {
      key: '5',
      label: (
        <>
          <div className='MittalShape'>
          </div> <h4>Company Culture</h4>
          <img src={MittalGroupLogo} alt="" />
        </>
      ),
      children: <><p>We believe that culture breeds commitments. From the very starting point of our journey, the entire workforce behind AB Mittal group was focused on building a strong and healthy company culture. We do believe that our vision is our purpose and our strong values help us to outsmart every roadblock we face on the way of achieving our purpose.
        We hire bright and healthy minds that help us to maintain the free flow of a deviation less knowledge processing environment at the workplace. The core company values are deeply enshrined in our daily practices, and we forge our quality products with these values, commitments and endeavours.</p></>,
    },
    {
      key: '6',
      label: (
        <>
          <div className='MittalShape'>
          </div>
          <h4>Corporate Social values</h4>
          <img src={MittalGroupLogo} alt="" />
        </>
      ),
      children: <><p> Every business is a failed purpose without society. We believe in that, and we are aware of our corporate social responsibilities. Our social wing is strong and widely unrolled. We are a proud donor at Pathmeda Godham . It’s an animal welfare trust, and they help domestic and road animals. AB Mittal group is also a proud donor at Akshaya Patra, a big non-profit foundation who serves food to 1.6 million children across 11 states in India. The continuous stewardship of Ab Mittal group for ensuring the quality living standards of its workforce has successfully enacted an accidental and health insurance for its workers.</p></>,
    },
  ];
  useEffect(() => {
    AOS.init({ once: false }); // Initialize AOS with default options
  }, []);
  const Images = [
    {
      image: cofounder
    },
    {
      image: gallery2
    },
  ]
  const data = [
    {
      img: bg1,
      title: "Quality",
      description: " Ever since the inception of the group, we have approached every product with the goal of achieving excellence. We deliver the best to our stakeholders and never compromise on the quality of the process and the products we manufacture."
    },
    {
      img: bg2,
      title: "Innovation",
      description: "We follow through on the promises we make and that has always been at our core. We translate our belief in transparency into our business model and this is what makes us better every day. Our stakeholders are always at the center of our decisions and that has helped us take the right decisions all along."
    },
    {
      img: bg3,
      title: "Customer Satisfaction",
      description: "Over the years we have created a cohesive framework based on trust. It encapsulates us and our stakeholders and helps us in building strong, meaningful relations with all our stakeholders.",
    },
    {
      img: bg4,
      title: "Integrity",
      description: "Over the years we have created a cohesive framework based on trust. It encapsulates us and our stakeholders and helps us in building strong, meaningful relations with all our stakeholders.",
    },

  ]

  return (
    <>
      <Home backgroundImage={BackImage} />
      <section className='AboutUsSection'>
        <div className='AboutUsContentContainer'>
          <br /><br />
          <div className='AboutusContainer' data-aos="fade-up">
            <h2>About Us</h2>
            <b><i>Yesterday's Vision, Today's Sucess, Tomorrow's Promise</i></b>
            <br />
            <br />
            <p>An identity is the reflection of ideals, goals and aspirations that make an organisation. At <b>Mittal Section Ltd. (MSL)</b> we believe that coming together is a beginning, Working together is progress & Forging ahead together is success. Our misson is to provide highest quality of end product & services through a spirit of dynamism with a will to achieve full customer delight.</p>
            <br />
            <p><b>Mittal Sections Limited (MSL)</b> is one of the largest steel rolling mill located at €hangodar, Ahmedabad. <b>MSL</b> is into the rolling of complete ranige of MS sections like <b>Angles, Channels, Squares, Rounds & Flat bars</b> etc. <b>MSL's</b> quest for excellence through various technologies & quality initiatives has helped to establish us as one of the largest manufactureres of entire range. Since inception of the organisation we have grown in reserves, profits and customer base, <b>MSL's</b> large talent pool of skilled technicians, engineers & managers enable the delivery of superior quality product helping the organisation to build a strong, self reliant and modern industrial base.</p>
            <br />
            <p><b>MSL </b>is promoted by young, energetic, experienced technocrats having long commercial experience. The project is equipped with abundance of power, raw material, man power with growing rate ofindustrialisation</p>
          </div>
          <br /><br />
          <div >
            <Row>
              <Col lg={12} md={24} data-aos="fade-up">
                <div className=" AboutUsimagesStyle">
                  {Images.map((item, index) => (
                    <div key={index}
                      style={{
                        marginLeft: index % 2 === 0 ? "0px" : "0px",
                        marginTop: "10px",
                        marginBottom: "10px"
                      }}>
                      <Image src={item.image} alt="" />
                    </div>
                  ))}
                </div>
              </Col>
              <Col lg={12} md={24} data-aos="fade-up">

                <div className=" AboutUsParagraph">
                  <h2>“Realizing dreams, Achieving goals”</h2>
                  <p>AB Mittal group of companies is one of the fastest growing enterprises in the world. Leading with a global approach AB Mittal group is as diverse as it is dynamic. Ever since its inception in the year 2006, the group has diversifies operations and expanded into various sectors that include Structured Steel Products, Textiles, Entertainment, and Chemicals.</p>
                  <p>Under the leadership of Mr. Atul B. Mittal the C.E.O. & Director of the group and Mr. Ajay B. Mittal, the Chairman, the group has explored new horizons and redefined the pinnacle of success with every milestone they achieved. Over the years, the group has come a long way and added value to the current market setup.</p>
                  <p>According to Mr. Ajay B. Mittal, the group has always believed that ‘Necessity is the mother of all inventions’ and understood the market to deliver quality products crafted to perfection.</p>
                  <br /><br />
                  <h2>Our Mission:</h2>
                  <p>At Mittal Sections Limited, we strive towards delivering world-class products and services to
                    our clients. Working towards creating tangible solutions by understanding the needs of our
                    clients and delivering success at every step of the way is at our core.</p>
                  <br /><br />
                  <h2>Our Vision:</h2>
                  <p>Empowering our partners with innovative and quality steel solutions as an industry leader,
                    achieving sustainable growth, and a brighter future for all.</p>

                </div>
              </Col>
            </Row>
          </div>


        </div>
        <br /><br />
        <div id='CollapseEdit' >
          <div data-aos="fade-up">
            <h2>Our Values</h2>
            <p> We at AB Mittal group believe strongly in our core values of Excellence, Integrity and Trust. We strive to make ourselves better and surpass the goals we have, redefining success at every milestone we achieve.</p>
            <br />
            {/* <Collapse accordion defaultActiveKey={['1']} items={items} /> */}
            <div className='MittalValuesCards'>
              {data.map((item, index) => (
                <div className='ValueCard'>
                  <div className='AnimatedCards'>
                    <div className='BlackOverlay'>

                    </div>
                    <img src={item.img} alt="" />
                    <h4>{item.title}</h4>
                  </div>
                </div>
              ))}

            </div>
          </div>
          <br /><br />
          <div className='processServices' data-aos="fade-up">
            <h2>Products and Services</h2>
            <p>Mittal Sections Limited specialises in the manufacturing and hot re-rolling of a complete
              range of Mild Steel Sections, including:
            </p>
            <br />
            <p>
              <b>These products are manufactured according to IS 2062 standards.</b>
            </p>
            {/* <div > */}
            <br />
            <div id='TableContainers' data-aos="fade-up">
              <div>
                <h4>Angles</h4>
                <table>
                  <tr>
                    <th>Size M.M.</th>
                    <th>Wt. Kg./Mtr.</th>
                    <th>Size M.M.</th>
                    <th>Wt. Kg./Mtr.</th>
                  </tr>
                  <tr>
                    <td>35*35*5</td>
                    <td>2.6</td>
                    <td>65*65*5</td>
                    <td>4.8</td>
                  </tr>
                  <tr>
                    <td>40*40*5</td>
                    <td>3.0</td>
                    <td>65*65*6</td>
                    <td>5.8</td>
                  </tr>
                  <tr>
                    <td>40*40*6</td>
                    <td>3.5</td>
                    <td>65*65*8</td>
                    <td>7.7</td>
                  </tr>
                  <tr>
                    <td>45*45*5</td>
                    <td>3.4</td>
                    <td>75*75*6</td>
                    <td>6.8</td>
                  </tr>
                  <tr>
                    <td>50*50*5</td>
                    <td>3.8</td>
                    <td>75*75*8</td>
                    <td>8.9</td>
                  </tr>
                  <tr>
                    <td>50*50*6</td>
                    <td>4.5</td>
                    <td>75*75*10</td>
                    <td>11.0</td>
                  </tr>
                </table>
                <div style={{ width: "100%" }}>
                  <h4>Round & Squares</h4>
                  <table>
                    <tr>
                      <th>Size M.M.</th>
                      <th>Rounds</th>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>1.58</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>2.47</td>
                    </tr>
                    <tr>
                      <td>25</td>
                      <td>3.85</td>
                    </tr>
                    <tr>
                      <td>28</td>
                      <td>4.83</td>
                    </tr>
                    <tr>
                      <td>30</td>
                      <td>5.55</td>
                    </tr>
                    <tr>
                      <td>32</td>
                      <td>6.31</td>
                    </tr>
                  </table>
                  <div >
                    <h4>Channels</h4>
                    <table>
                      <tr>
                        <th>Size M.M.</th>
                        <th>Wt. Kg./Mtr.</th>
                      </tr>
                      <tr>
                        <td>75*40</td>
                        <td>6.8</td>
                      </tr>
                      <tr>
                        <td>100*50</td>
                        <td>9.2</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>

              <div>
                <h4>Flats</h4>
                <table>
                  <tr>
                    <th>Size M.M.</th>
                    <th>Wt. Kg./Mtr.</th>
                    <th>Size M.M.</th>
                    <th>Wt. Kg./Mtr.</th>
                  </tr>
                  <tr>
                    <td>50*6</td>
                    <td>2.35</td>
                    <td>100*6</td>
                    <td>4.70</td>
                  </tr>
                  <tr>
                    <td>50*8</td>
                    <td>3.14</td>
                    <td>100*8</td>
                    <td>6.28</td>
                  </tr>
                  <tr>
                    <td>50*10</td>
                    <td>3.92</td>
                    <td>100*10</td>
                    <td>7.85</td>
                  </tr>
                  <tr>
                    <td>50*12</td>
                    <td>4.71</td>
                    <td>100*12</td>
                    <td>9.42</td>
                  </tr>
                  <tr>
                    <td>50*16</td>
                    <td>6.28</td>
                    <td>100*16</td>
                    <td>12.56</td>
                  </tr>
                  <tr>
                    <td>50*20</td>
                    <td>7.85</td>
                    <td>100*20</td>
                    <td>15.70</td>
                  </tr>
                  <tr>
                    <td>50*25</td>
                    <td>9.81</td>
                    <td>100*25</td>
                    <td>19.6</td>
                  </tr>
                  <tr>
                    <td>65*6</td>
                    <td>3.00</td>
                    <td>125*6</td>
                    <td>5.89</td>
                  </tr>
                  <tr>
                    <td>65*8</td>
                    <td>4.10</td>
                    <td>125*8</td>
                    <td>7.85</td>
                  </tr>
                  <tr>
                    <td>65*10</td>
                    <td>5.10</td>
                    <td>125*10</td>
                    <td>9.81</td>
                  </tr>
                  <tr>
                    <td>65*12</td>
                    <td>6.12</td>
                    <td>125*12</td>
                    <td>11.78</td>
                  </tr>
                  <tr>
                    <td>65*16</td>
                    <td>8.16</td>
                    <td>125*16</td>
                    <td>15.70</td>
                  </tr>
                  <tr>
                    <td>65*20</td>
                    <td>10.20</td>
                    <td>125*20</td>
                    <td>19.62</td>
                  </tr>
                  <tr>
                    <td>65*25</td>
                    <td>12.75</td>
                    <td>125*25</td>
                    <td>24.53</td>
                  </tr>
                  <tr>
                    <td>75*6</td>
                    <td>3.53</td>
                    <td>150*6</td>
                    <td>7.07</td>
                  </tr>
                  <tr>
                    <td>75*8</td>
                    <td>4.71</td>
                    <td>150*8</td>
                    <td>9.42</td>
                  </tr>
                  <tr>
                    <td>75*10</td>
                    <td>5.90</td>
                    <td>150*10</td>
                    <td>11.78</td>
                  </tr>
                  <tr>
                    <td>75*12</td>
                    <td>7.10</td>
                    <td>150*12</td>
                    <td>14.13</td>
                  </tr>
                  <tr>
                    <td>75*16</td>
                    <td>9.42</td>
                    <td>150*16</td>
                    <td>18.84</td>
                  </tr>
                  <tr>
                    <td>75*20</td>
                    <td>11.80</td>
                    <td>150*20</td>
                    <td>23.55</td>
                  </tr>
                  <tr>
                    <td>75*25</td>
                    <td>14.70</td>
                    <td>150*25</td>
                    <td>29.44</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section >

    </>
  )
}

export default AboutUs;
