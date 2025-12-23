import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function Loginpage() {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <Card className="shadow-sm border-0">
              <Row className="g-0">
                <Col md={6} className="p-4 d-flex flex-column justify-content-center" style={{ background: 'linear-gradient(135deg, #f7d42c 0%, #f0b429 100%)' }}>
                  <div className="text-dark">
                    <h2 className="fw-bold mb-3">Welcome back</h2>
                    <p className="mb-4">Sign in to manage your reservations, track orders, and save your favorite dishes.</p>
                    <ul className="mb-0" style={{ listStyle: 'disc', paddingLeft: '1.2rem' }}>
                      <li>Portfolio demo only — no real authentication.</li>
                      <li>Use any email and password to preview the flow.</li>
                    </ul>
                  </div>
                </Col>
                <Col md={6} className="p-4">
                  <div className="mb-4 text-center">
                    <span className="fw-semibold text-uppercase text-muted" style={{ letterSpacing: '0.08em' }}>Login</span>
                    <h4 className="mt-2">Access your account</h4>
                  </div>
                  <Form>
                    <Form.Group className="mb-3" controlId="loginEmail">
                      <Form.Label>Email</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <i className="fas fa-user" aria-hidden="true"></i>
                        </InputGroup.Text>
                        <Form.Control type="email" placeholder="you@example.com" />
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="loginPassword">
                      <Form.Label>Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <i className="fas fa-lock" aria-hidden="true"></i>
                        </InputGroup.Text>
                        <Form.Control type="password" placeholder="Enter password" />
                      </InputGroup>
                    </Form.Group>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Form.Check type="checkbox" label="Remember me" id="rememberMe" />
                      <a href="#" className="text-decoration-none">Forgot password?</a>
                    </div>

                    <div className="d-grid gap-2">
                      <Button variant="dark" size="lg">Sign in</Button>
                      <Button variant="outline-secondary" size="sm">Create a demo account</Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Loginpage;
