import React from 'react'
import { Row, Container, Col } from "react-bootstrap"
export default function ContactUs() {
    return (
        <div id="div">
            <Container>
                <div className='tit' id='cont'>
                    <h2 style={{color: 'white' ,fontSize: '40px' ,marginTop: '80px' ,textAlign: 'center'}}>Contact <span>Coach</span></h2>
                </div>
                <br />
                <br />
                <Row className="sec_sp" style={{ color: 'white' }}>
                    <Col lg='5' className="mb-5">
                        <h3 className="color_sec py-4">Get in touch</h3>
                        <br />
                        <br />
                        <address id='mb'>
                            <strong>Email:developer@javascript.com</strong>
                            <br />
                            <br />
                            <br />
                            <p>
                                <strong>phone : +65 xxx xxx</strong>
                            </p>
                        </address>
                    </Col>
                    <Col lg='7' className="d-flex align-items-center">
                        <form className="contact_form w-100">
                            <Row>
                                <Col lg='6' className="form-group">
                                    <input
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="name"
                                        type="text"
                                    />
                                </Col>
                                <Col lg='6' className="form-group">
                                    <input
                                        className="form-control rounded-0"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        type="email"
                                    />
                                </Col>
                            </Row>
                            <textarea className="form-control rounded-0" id="message"
                                name="message"
                                placeholder="message"
                                rows='5'
                                style={{ marginTop: '20px' }}
                            ></textarea>
                            <br />
                            <Row>
                                <Col lg='12' className="form-group">
                                    <a href='mailto:mustafaihab9@gmail.com?subject=mycoach' className='btn' style={{backgroundColor : "aquamarine" , color : "black"}}>
                                        send            
                                </a>
                                </Col>
                            </Row>
                        </form>
                    </Col>

                </Row>
            </Container>
        </div>
    )
}
