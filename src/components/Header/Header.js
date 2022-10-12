import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <Navbar className='navber' bg="light" expand="lg">
            <Container>
                <Navbar.Brand className='fs-3 fw-bold text-primary' href="#home">Quiz Learning School</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto ">
                        {/* <Nav.Link active to= '/topics'>Topics</Nav.Link>
                        <Nav.Link active to="/Statistics">Statistics</Nav.Link>
                        <Nav.Link active to="/Blog">Blog</Nav.Link> */}
                        <Link className='fs-5 mx-5 text-decoration-none' to='/' >Home</Link>
                        <Link className='fs-5 text-decoration-none' to='/' >Topics</Link>
                        <Link className='mx-5 fs-5 text-decoration-none' to='/statistics' >Statistics</Link>
                        <Link className='fs-5 text-decoration-none' to='/blog' >Blog</Link>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;