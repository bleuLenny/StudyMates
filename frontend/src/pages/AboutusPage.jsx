import React from 'react'
import WelcomeNav from "../components/WelcomeNav"
import {Card, CardGroup} from "react-bootstrap"
import "./AboutusPage.css"

export default function AboutusPage() {
    return (
        <div>
            <div>
                <WelcomeNav/>
            </div>
            <div className='background-property'>
                <img src='groupstockphoto.jpg'/>
                <div className='center-info'>
                    <h1>Meet the StudyMates Team</h1>
                </div>
            </div>
            <div className='sub-heading'>
                <h2>
                    Team members 
                </h2>
            </div>
        <CardGroup style={{ width: '40rem'}}>
            <Card style={{ width: '100px' }}>
            <Card.Img variant="top" src="amandaselfie.jpg" style={{width: '18rem', height: "20rem"}}/>
            <Card.Body>
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
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="kittyselfie.jpg" style={{width: '18rem', height: "20rem"}} />
            <Card.Body>
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
            </CardGroup>
            <CardGroup>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="alexselfie.jpg" style={{width: '18rem'}} />
                <Card.Body>
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
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="bryanselfie.jpg" style={{width: '18rem'}}/>
                <Card.Body>
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
            
        </div>
    )
}
