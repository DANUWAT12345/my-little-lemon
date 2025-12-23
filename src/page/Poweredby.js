import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import creatorPhoto from '../appdata/contact_dev/dev_image.jpeg';

function Poweredby() {
    const techStack = [
        { name: 'React', category: 'Frontend Framework', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'React Bootstrap', category: 'UI Framework', icon: 'fab fa-bootstrap', color: '#7952B3' },
        { name: 'React Router', category: 'Routing', icon: 'fas fa-route', color: '#CA4245' },
        { name: 'JavaScript', category: 'Programming Language', icon: 'fab fa-js', color: '#F7DF1E' },
        { name: 'HTML5 & CSS3', category: 'Markup & Styling', icon: 'fab fa-html5', color: '#E34F26' },
        { name: 'Node.js', category: 'Runtime Environment', icon: 'fab fa-node-js', color: '#339933' },
        { name: 'NPM', category: 'Package Manager', icon: 'fab fa-npm', color: '#CB3837' },
    ];

    return (
        <div>


            {/* Header Section */}
            <div style={{ backgroundColor: '#495E57', padding: '60px 0' }}>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="display-4 text-white text-center mb-3">Powered By</h1>
                            <p className="lead text-white text-center">
                                Technology Stack & Project Information
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Creator Section */}
            <Row className="justify-content-center mt-5">
                <Col lg={10} xl={8}>
                    <Card className="border-0 shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
                        <Card.Body className="p-5">
                            <div className="mb-4">
                                <img
                                    src={creatorPhoto}
                                    alt="Danuwat Maoleethong"
                                    className="rounded-circle mb-3"
                                    style={{ width: '150px', height: '150px', objectFit: 'cover', border: '4px solid #f4ce14' }}
                                />
                                <h3>About the Creator</h3>
                            </div>

                            <div className="mb-4">
                                <h4 className="mb-3">Danuwat Maoleethong</h4>
                                <p className="lead text-muted mb-4">
                                    Full-Stack Developer | Front-End & Back-End Engineer
                                </p>
                                <p className="text-muted">
                                    I’m a full-stack developer who enjoys building complete, production-ready web applications — from intuitive front-end interfaces to reliable, scalable back-end systems.
                                </p>
                                <p className="text-muted">
                                </p>
                            </div>

                            <div className="text-center">
                                <h5 className="mb-3">Connect With Me</h5>
                                <div className="d-flex justify-content-center gap-3">
                                    <a href="https://github.com/DANUWAT12345?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-decoration-none" title="GitHub">
                                        <i className="fab fa-github fa-2x" style={{ color: '#495E57' }}></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/danuwat-maoleethong-959a20240/" target="_blank" rel="noopener noreferrer" className="text-decoration-none" title="LinkedIn">
                                        <i className="fab fa-linkedin fa-2x" style={{ color: '#495E57' }}></i>
                                    </a>
                                    <a href="mailto:danuwat.work@gmail.com" className="text-decoration-none" title="Email">
                                        <i className="fas fa-envelope fa-2x" style={{ color: '#495E57' }}></i>
                                    </a>
                                    <a href="tel:+66846966727" className="text-decoration-none" title="Phone">
                                        <i className="fas fa-phone fa-2x" style={{ color: '#495E57' }}></i>
                                    </a>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


            {/* Portfolio Disclaimer */}
            <Container className="py-5">
                <Row className="justify-content-center mb-5">
                    <Col lg={10} xl={8}>
                        <Card className="border-0 shadow-sm">
                            <Card.Body className="p-5">
                                <div className="text-center mb-4">
                                    <i className="fas fa-info-circle fa-3x mb-3" style={{ color: '#f4ce14' }}></i>
                                    <h3>Portfolio Project</h3>
                                </div>
                                <p className="text-muted text-center mb-4">
                                    This website is a portfolio demonstration project created to showcase web development skills
                                    and modern frontend technologies. Little Lemon is a fictional Mediterranean restaurant,
                                    and all content, locations, and services are simulated for educational and demonstration purposes only.
                                </p>
                                <div className="text-center">
                                    <Badge bg="warning" text="dark" className="me-2 mb-2">Portfolio Project</Badge>
                                    <Badge bg="info" className="mb-2">Demo Front-End Website</Badge>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>



                {/* Tech Stack Section */}
                <Row className="mb-5">
                    <Col>
                        <h3 className="text-center mb-4">Technology Stack</h3>
                        <p className="text-center text-muted mb-5">
                            This project is built with modern web technologies and best practices
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center mb-5">
                    <Col lg={10} xl={8}>
                        <Row className="g-4">
                            {techStack.map((tech, index) => (
                                <Col key={index} md={6} lg={6}>
                                    <Card className="h-100 border-0 shadow-sm">
                                        <Card.Body className="p-4">
                                            <div className="d-flex align-items-center mb-3">
                                                <div
                                                    className="d-flex align-items-center justify-content-center"
                                                    style={{
                                                        width: '60px',
                                                        height: '60px',
                                                        backgroundColor: tech.color,
                                                        borderRadius: '12px',
                                                        marginRight: '15px'
                                                    }}
                                                >
                                                    <i className={`${tech.icon} fa-2x text-white`}></i>
                                                </div>
                                                <div className="text-start">
                                                    <h5 className="mb-0">{tech.name}</h5>
                                                    <small className="text-muted">{tech.category}</small>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>



                {/* Project Details */}
                <Row className="mt-5">
                    <Col>
                        <Card className="border-0 shadow-sm">
                            <Card.Body className="p-4">
                                <h5 className="mb-3">Project Features</h5>
                                <ul className="list-unstyled text-muted">
                                    <li className="mb-2">Responsive design for all devices</li>
                                    <li className="mb-2">Modern React component architecture</li>
                                    <li className="mb-2">React Router for navigation</li>
                                    <li className="mb-2">Bootstrap components and styling</li>
                                    <li className="mb-2">Form validation with Formik & Yup</li>
                                    <li className="mb-2">Interactive maps integration</li>
                                    <li className="mb-2">Clean and maintainable code</li>
                                    <li className="mb-2">SEO-friendly structure</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Poweredby;
