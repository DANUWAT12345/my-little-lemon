import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Blogpage() {
    return (
        <div style={{ 
            minHeight: '70vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: '#f8f9fa'
        }}>
            <Container>
                <Row>
                    <Col className="text-center">
                        <div style={{ 
                            padding: '60px 20px',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            <i 
                                className="fas fa-tools fa-4x mb-4" 
                                style={{ color: '#f4ce14' }}
                            ></i>
                            <h1 
                                className="display-4 mb-4" 
                                style={{ color: '#495E57', fontWeight: '700' }}
                            >
                                Hold on, our lovely blog is coming soon
                            </h1>
                            <p className="lead text-muted mb-4">
                                We're working hard to bring you fresh content, delicious recipes, and stories from our kitchen.
                            </p>
                            <div className="mt-5">
                                <i className="fas fa-spinner fa-spin fa-2x" style={{ color: '#f4ce14' }}></i>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Blogpage;
