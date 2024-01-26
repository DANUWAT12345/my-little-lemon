import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from 'react-bootstrap/Image';
import Logo_Main from '../appdata/Logo.svg';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavFeature() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Image src={Logo_Main} style={{ marginRight: '20px' }} />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="menu">Menu</Nav.Link>
                        <Nav.Link href="login">Login</Nav.Link>
                        <NavDropdown title="Service" id="basic-nav-dropdown">
                            <NavDropdown.Item href="my-reserve">Reserve Table</NavDropdown.Item>
                            <NavDropdown.Item href="my-order">
                                Order Online
                            </NavDropdown.Item>
                            <NavDropdown.Item href="blog">Blog</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="contact">
                                Contact
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavFeature;
