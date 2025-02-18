import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const menuImage = "/images/rice&beans.jpg"; // Example image
const dineInImage = "/images/okro-soup-1.jpg"; // Example image

const ModernCards = () => {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.5))",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          {/* MENU CARD */}
          <Col md={5} className="mb-4">
            <Card
              className="shadow-lg"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                textAlign: "center",
                backgroundColor: "#1c1c1c",
              }}
            >
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <img
                  src={menuImage}
                  alt="Menu"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(50%)",
                  }}
                />
              </div>
              <Card.Body style={{ color: "#fff", padding: "20px" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#ffc107" }}>
                  MENU
                </h2>
                <p>Explore a variety of delicious dishes curated with authentic flavors.</p>
                <LinkContainer to="/menu">
                  <Button variant="warning">View Menu</Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>

          {/* DINE-IN CARD */}
          <Col md={5} className="mb-4">
            <Card
              className="shadow-lg"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                textAlign: "center",
                backgroundColor: "#1c1c1c",
              }}
            >
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <img
                  src={dineInImage}
                  alt="Dine-in"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(50%)",
                  }}
                />
              </div>
              <Card.Body style={{ color: "#fff", padding: "20px" }}>
                <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#ffc107" }}>
                  DINE-IN
                </h2>
                <p>Experience a cozy dining atmosphere with top-notch service.</p>
                <LinkContainer to="/dinein">
                  <Button variant="warning">Learn More</Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ModernCards;
