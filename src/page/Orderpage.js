import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import linemanLogo from '../appdata/online_order_data/lineman_logo.jpeg';
import shoppeeLogo from '../appdata/online_order_data/shopee_food_logo.jpg';

// Simple demo page for online ordering options
export default function Orderpage() {
    return (
        <div>
            <Container className="py-5">
                <h1 className="mb-4 text-center">How to order online</h1>
                <p className="lead text-center mb-5">Choose your favorite delivery partner:</p>

                <Row className="g-4">
                    {/* Blank space - left */}
                    <Col md={2}></Col>

                    {/* Lineman */}
                    <Col md={4}>
                        <Card className="h-100 border">
                            <Card.Img
                                variant="top"
                                src={linemanLogo}
                                alt="Lineman Logo"
                                style={{ height: '200px', objectFit: 'contain', padding: '20px' }}
                            />
                            <Card.Body className="text-start">
                                <Card.Title className="h4 mb-3">Lineman</Card.Title>
                                <Card.Text className="mb-4">
                                    Download Lineman and enjoy fast delivery from Little Lemon. Browse our full menu, customize your order, and track your rider in real-time from restaurant to your doorstep. Pay securely with cash, card, or digital wallet. Available 7 days a week with special promotions for first-time users!
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="bg-transparent border-0 p-3">
                                <div className="d-flex gap-2">
                                    <Button
                                        href="#"
                                        className="flex-fill"
                                        style={{ backgroundColor: '#f4ce14', borderColor: '#f4ce14', color: '#000' }}
                                    >
                                        <i className="fab fa-apple me-2"></i>iOS
                                    </Button>
                                    <Button
                                        href="#"
                                        className="flex-fill"
                                        style={{ backgroundColor: '#f4ce14', borderColor: '#f4ce14', color: '#000' }}
                                    >
                                        <i className="fab fa-android me-2"></i>Android
                                    </Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>

                    {/* ShoppeeFood */}
                    <Col md={4}>
                        <Card className="h-100 border">
                            <Card.Img
                                variant="top"
                                src={shoppeeLogo}
                                alt="ShoppeeFood Logo"
                                style={{ height: '200px', objectFit: 'contain', padding: '20px' }}
                            />
                            <Card.Body className="text-start">
                                <Card.Title className="h4 mb-3">ShoppeeFood</Card.Title>
                                <Card.Text className="mb-4">
                                    Order Little Lemon through ShoppeeFood and earn Shopee Coins with every purchase! Explore our restaurant menu, add your favorites to cart, and enjoy exclusive bundle deals. Free delivery for orders over $15. Use your ShopeePay for instant checkout and track your delivery status from preparation to arrival.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="bg-transparent border-0 p-3">
                                <div className="d-flex gap-2">
                                    <Button
                                        href="#"
                                        className="flex-fill"
                                        style={{ backgroundColor: '#f4ce14', borderColor: '#f4ce14', color: '#000' }}
                                    >
                                        <i className="fab fa-apple me-2"></i>iOS
                                    </Button>
                                    <Button
                                        href="#"
                                        className="flex-fill"
                                        style={{ backgroundColor: '#f4ce14', borderColor: '#f4ce14', color: '#000' }}
                                    >
                                        <i className="fab fa-android me-2"></i>Android
                                    </Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>

                    {/* Blank space - right */}
                    <Col md={2}></Col>
                </Row>
            </Container>
        </div>
    );
}