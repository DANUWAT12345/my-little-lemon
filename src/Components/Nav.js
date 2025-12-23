import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Logo_Main from '../appdata/Logo.svg';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavFeature() {
    return (
        <Navbar expand="lg" className="navbar navbar-light bg-light">
            <Container>
                <Navbar.Brand href="/">
                    <Image src={Logo_Main} style={{ marginRight: '20px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="menu">Menu</Nav.Link>
                        <NavDropdown title="Service" id="basic-nav-dropdown">
                            <NavDropdown.Item href="my-reserve">Reserve Table</NavDropdown.Item>
                            <NavDropdown.Item href="my-order">Order Online</NavDropdown.Item>
                            <NavDropdown.Item href="blog">Blog</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="contact">
                                Contact Us
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="powered-by">
                                <i className="fas fa-code me-2"></i>Powered By
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="ms-auto align-items-center">
                        <span className="me-3 text-muted">
                            <i className="fas fa-user-circle me-2"></i>
                            Guest
                        </span>
                        <Button 
                            href="/login" 
                            size="sm"
                            style={{
                                backgroundColor: '#f4ce14',
                                borderColor: '#f4ce14',
                                color: '#000',
                                fontWeight: '600'
                            }}
                        >
                            Login
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavFeature;
