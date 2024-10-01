import React, { useEffect } from "react";
import "./Products.css"
import Home from "../Home/Home";
import { Row, Col } from "antd";
import Productback from "./Productback.jpeg"
import Productback2 from "./Productback2.jpg"
import AnimatedStackCards from "../MinimalComponets/AnimatedStackCards";
const Products = () => {
    const Images = [Productback, Productback2]
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Home images={Images} />
            <br /><br />
            <AnimatedStackCards />
            <br /><br />
            <div className='processServices AboutUsSection' data-aos="fade-up">

                {/* <div className="productsContainer">
                    <h1>Our Products</h1>
                    <Row>
                        <Col lg={12}>
                            <div className="productCard">Flat Bars</div>
                        </Col>
                        <Col lg={12}>
                            <div className="productCard">Round Bars</div>
                        </Col>
                        <Col lg={12}>
                            <div className="productCard">Channels</div>
                        </Col>
                        <Col lg={12}>
                            <div className="productCard">Angles</div>
                        </Col>
                    </Row>
                </div> */}
                {/* <div > */}
                <br />

                <div className="productTitle">
                    <h2>Product Range and Specification</h2>
                </div>
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
        </>
    )
}
export default Products;