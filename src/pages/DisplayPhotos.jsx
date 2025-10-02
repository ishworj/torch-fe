import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DisplayPhotos = () => {
  const photos = [
    "https://picsum.photos/600/400?random=1",
    "https://picsum.photos/600/400?random=2",
    "https://picsum.photos/600/400?random=3",
    "https://picsum.photos/600/400?random=4",
    "https://picsum.photos/600/400?random=5",
    "https://picsum.photos/600/400?random=6",
  ];

  return (
    <>
      {/* Photo Grid */}
      <Container className="my-4">
        <Row className="g-4">
          {photos.map((src, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <div className="photo-card shadow-sm rounded overflow-hidden">
                <img
                  src={src}
                  alt={`Photo ${index + 1}`}
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", height: "200px" }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default DisplayPhotos;
