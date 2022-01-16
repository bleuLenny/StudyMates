import "bootstrap/dist/css/bootstrap.min.css";
import "./StudySessions.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Card } from "react-bootstrap";

const StudySessions = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Carousel.Caption>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title><h3>First slide label</h3></Card.Title>
              <Card.Text>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
            </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Carousel.Caption>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title><h3>First slide label</h3></Card.Title>
              <Card.Text>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
            </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>

        <Carousel.Caption>
        <Carousel.Caption>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title><h3>First slide label</h3></Card.Title>
              <Card.Text>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
            </Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default StudySessions;
