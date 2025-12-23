import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react';

function Contactpage() {
    const locations = [
        {
            name: "Little Lemon (Thon Buri)",
            address: "10600: Thon Buri, Bangkok",
            coordinates: "Latitude: 13.7167 · Longitude: 100.4833",
            placeName: "Place Name: Thon Buri",
            hours: "8 a.m. - 11 p.m.",
            phone: "+66 84 698 5633",
            email: "thonburi@littlelemon.com"
        },
        {
            name: "Little Lemon (Chiang Mai)",
            address: "1001, Tambon Nong Han, Amphoe San Sai",
            city: "Chang Wat Chiang Mai 50290",
            hours: "8 a.m. - 11 p.m.",
            phone: "+66 84 777 5633",
            email: "chiangmai@littlelemon.com"
        },
        {
            name: "Little Lemon (Hat Yai)",
            address: "Ban Phru, Hat Yai District",
            city: "Songkhla 90250",
            hours: "8 a.m. - 11 p.m.",
            phone: "+66 84 698 5555",
            email: "hatyai@littlelemon.com"
        }
    ];

    return (
        <div>
            {/* Header Section */}
            <div style={{ backgroundColor: '#495E57', padding: '60px 0' }}>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="display-3 text-white text-center mb-3">Contact Us</h1>
                            <p className="lead text-white text-center">
                                We'd love to hear from you. Visit us at any of our locations or get in touch.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Map Section */}
            <Container className="py-5">
                <Row>
                    <Col>
                        <h3 className="text-center mb-4">Our Locations in Thailand</h3>
                        <div className="map-container" style={{ 
                            position: 'relative', 
                            paddingBottom: '60%',
                            height: 0, 
                            overflow: 'hidden',
                            borderRadius: '10px',
                            boxShadow: '0 0.125rem 0.25rem rgba(0,0,0,0.075)',
                            maxHeight: '500px'
                        }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7901234.567890123!2d100.5!3d13.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sth!4v1234567890"
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    border: 0
                                }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Little Lemon Locations in Thailand"
                            ></iframe>
                        </div>
                        <p className="text-center text-muted mt-3 small">
                            <i className="fas fa-info-circle me-2"></i>
                            Our locations: Bangkok (Thon Buri) • Chiang Mai • Hat Yai
                        </p>
                    </Col>
                </Row>
            </Container>

            {/* Locations Section */}
            <Container className="py-5">
                <h3 className="text-center mb-5">Visit Our Restaurants</h3>
                <Row className="g-4">
                    {locations.map((location, index) => (
                        <Col key={index} lg={4} md={6} xs={12} className="d-flex">
                            <Card className="w-100 border-0 shadow-sm d-flex flex-column">
                                <Card.Body className="p-4 d-flex flex-column">
                                    <Card.Title className="h4 mb-4" style={{ color: '#495E57' }}>
                                        {location.name}
                                    </Card.Title>
                                    
                                    <div className="mb-4">
                                        <h6 className="text-muted mb-2">
                                            <i className="fas fa-map-marker-alt me-2"></i>Address
                                        </h6>
                                        <p className="mb-1">{location.address}</p>
                                        {location.city && <p className="mb-1">{location.city}</p>}
                                        {location.coordinates && <p className="small text-muted mb-1">{location.coordinates}</p>}
                                        {location.placeName && <p className="small text-muted">{location.placeName}</p>}
                                    </div>

                                    <div className="mb-4">
                                        <h6 className="text-muted mb-2">
                                            <i className="far fa-clock me-2"></i>Opening Hours
                                        </h6>
                                        <p className="mb-0">{location.hours}</p>
                                        <p className="small text-muted">7 days a week</p>
                                    </div>

                                    <div className="mb-4">
                                        <h6 className="text-muted mb-2">
                                            <i className="fas fa-phone me-2"></i>Phone
                                        </h6>
                                        <p className="mb-0">
                                            <a href={`tel:${location.phone}`} className="text-decoration-none" style={{ color: '#495E57' }}>
                                                {location.phone}
                                            </a>
                                        </p>
                                    </div>

                                    <div className="mb-4">
                                        <h6 className="text-muted mb-2">
                                            <i className="far fa-envelope me-2"></i>Email
                                        </h6>
                                        <p className="mb-0">
                                            <a href={`mailto:${location.email}`} className="text-decoration-none" style={{ color: '#495E57' }}>
                                                {location.email}
                                            </a>
                                        </p>
                                    </div>

                                    <div className="mt-auto">
                                        <Button 
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
                                            target="_blank"
                                            className="w-100"
                                            style={{
                                                backgroundColor: '#f4ce14', 
                                                borderColor: '#f4ce14', 
                                                color: '#000',
                                                fontWeight: '600'
                                            }}
                                        >
                                            Get Directions
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>

            {/* General Contact Section */}
            <div style={{ backgroundColor: '#f8f9fa', padding: '60px 0' }}>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <Card className="border-0 shadow-sm">
                                <Card.Body className="p-5">
                                    <h3 className="text-center mb-4">General Inquiries</h3>
                                    <p className="text-center text-muted mb-4">
                                        For reservations, catering services, or general questions, please contact us:
                                    </p>
                                    
                                    <Row className="text-center">
                                        <Col md={6} className="mb-3 mb-md-0">
                                            <div className="p-3">
                                                <i className="fas fa-phone fa-2x mb-3" style={{ color: '#f4ce14' }}></i>
                                                <h5>Call Us</h5>
                                                <p className="mb-0">
                                                    <a href="tel:+66846985633" className="text-decoration-none" style={{ color: '#495E57' }}>
                                                        +66 84 698 5633
                                                    </a>
                                                </p>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className="p-3">
                                                <i className="far fa-envelope fa-2x mb-3" style={{ color: '#f4ce14' }}></i>
                                                <h5>Email Us</h5>
                                                <p className="mb-0">
                                                    <a href="mailto:info@littlelemon.com" className="text-decoration-none" style={{ color: '#495E57' }}>
                                                        info@littlelemon.com
                                                    </a>
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="text-center mt-4">
                                        <Button 
                                            href="/my-reserve"
                                            size="lg"
                                            style={{
                                                backgroundColor: '#f4ce14', 
                                                borderColor: '#f4ce14', 
                                                color: '#000',
                                                fontWeight: '600',
                                                padding: '12px 40px'
                                            }}
                                        >
                                            Make a Reservation
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Contactpage;
