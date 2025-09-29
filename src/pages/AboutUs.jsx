import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutUs = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        {/* Left Text Section */}
        <Col md={6} className="mb-4">
          <h1 className="fw-bold mb-3">About Torch App</h1>
          <p className="text-muted fs-5">
            Torch App makes searching your photos effortless. Using advanced{" "}
            <strong>AI-powered photo recognition</strong>, Torch understands the
            content of your images — from people, objects, and locations — so
            you can quickly find the photo you’re looking for.
          </p>
          <p className="text-muted fs-5">
            No more endless scrolling! Simply type what you remember, like
            <em> “beach trip with friends”</em>, and Torch App brings the right
            memories to you instantly.
          </p>
          <p className="text-muted fs-5">
            Torch App is designed to make life easier by organizing your photo
            collection intelligently, so you can focus on reliving the moments
            that matter most.
          </p>
        </Col>

        {/* Right Image Section */}
        <Col md={6} className="text-center">
          <img
            src="https://picsum.photos/600/400?random=10"
            alt="Torch App AI Search"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
