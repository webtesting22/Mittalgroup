import React from 'react';
import './ContactUs.css';
import { Row, Col } from "antd"
import { Button, Checkbox, Form, Input } from 'antd';
import Home from '../Home/Home';

const ContactUs = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      {/* <form className="contact-form" >
      <h2>Contact Us</h2>

      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
      />
      <label htmlFor="subject">Subject</label>
      <input
        type="text"
        id="subject"
        name="subject"
      /> 
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"

      ></textarea>

      <button type="submit">Submit</button>
    </form>
    <div className='map'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8278153785873!2d72.55840060000004!3d23.030093500000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f1af6a551b%3A0x2a03c409d4b4748a!2sLal%20Bunglow%2C%20Chimanlal%20Girdharlal%20Rd%2C%20New%20Commercial%20Mills%20Staff%20Society%2C%20Ellisbridge%2C%20Ahmedabad%2C%20Gujarat%20380009!5e0!3m2!1sen!2sin!4v1725349230994!5m2!1sen!2sin"
     width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div> */}
      <Home />
      <h1>CONTACT US</h1>

        {/* 
        <Col lg={12} xs={24}>
          <div className="contact-form">
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Your Name:"
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Your Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Subject"
                name="Subject"
               
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Your Message:"
                name="message"
               
              >
                <Input />
              </Form.Item>


              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col> */}
       
          <div className="contact-details">
            <h1>Contact Details</h1>
            <a href="https://maps.app.goo.gl/5CcurstP9Z4Wmoi26" target="_blank"><p className="address">1, Sona Roopa, Opp. Lal Bungalow, C.G. Road, Ahmedabad -380009, Gujarat – India</p></a>
            <div className="iconContainer">
             
              <p> <i class='bx bxl-whatsapp'></i><a href="tel:+917926405484">+917926405484</a>,
                <a href="tel:+917926406484">+917926406484</a>
              </p>
            </div>
            <div className="iconContainer">
                <p><a href="mailto:info@abmittalgroup.com"><i class='bx bx-envelope'></i>info@abmittalgroup.com</a></p>
            </div>
          </div>
       
    </>
  );
};

export default ContactUs;
