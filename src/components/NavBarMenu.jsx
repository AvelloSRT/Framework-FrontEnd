//import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import '/src/App.css';
import PropTypes from 'prop-types';

const NavBarMenu = ({ items }) => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">FrontEnd</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {items.map((item) => (
                                <Nav.Link href={item.url} key={item.id}>
                                {item.label}
                            </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
NavBarMenu.propTypes = {    
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default NavBarMenu;
