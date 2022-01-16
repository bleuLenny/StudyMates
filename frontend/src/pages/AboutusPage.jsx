import React from 'react'
import WelcomeNav from "../components/WelcomeNav"
import Footer from "../components/logged_in\\dashboard/Footer.js"
import {Card, CardGroup, Container, Col, Row } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import "./AboutusPage.css"

export default function AboutusPage() {
    return (
        <div>
            <WelcomeNav/>
            <Container className="about-content">
                <Col>
                    <Row>
                        <Container className='background-property'>
                            <Image className='fluid' src='groupstockphoto.jpg' alt=''/>
                            <div className='center-info'>
                                <h1>Meet the StudyMates Team</h1>
                            </div>
                        </Container>
                        <Container className='sub-heading'>
                            <h2>
                                Team members 
                            </h2>
                        </Container>
                    </Row>

                    <Row>
                        <CardGroup>
                            <Card>
                                <Card.Img className='about-selfie' variant="top" src="amandaselfie.jpg" style={{height: "20rem"}}/>
                                <Card.Body className="about-body">
                                    <Card.Title>Amanda Kuiack</Card.Title>
                                    <Card.Text>
                                    I am a Co-op student completing my Computer Information Technology 
                                    diploma at BCIT with a passion for cybersecurity. I have experience 
                                    maintaining a virtual network using Linux, writing shell scripts to 
                                    manage routers and file systems. I can facilitate teams and meetings,
                                    have worked in customer service as both a Spa Coordinator and an Assistant Manager.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">BCIT Student</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img className='about-selfie' variant="top" src="kittyselfie.jpg" style={{height: "20rem"}} />
                                <Card.Body className="about-body">
                                    <Card.Title>Kitty Low</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">BCIT Student</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img className='about-selfie' variant="top" src="alexselfie.jpg" style={{height: "20rem"}} />
                                <Card.Body className="about-body">
                                    <Card.Title>Alex Amog</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">BCIT Student</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img className='about-selfie' variant="top" src="bryanselfie.jpg" style={{height: "20rem"}}/>
                                <Card.Body className="about-body">
                                    <Card.Title>Bryan Campos Leguia</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">BCIT Student</small>
                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Row>
                </Col>
            </Container>
            <Footer />
        </div>
    )
}
