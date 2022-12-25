import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Menu extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/" style={{color:'white'}}>Home</Nav.Link>
                        <Nav.Link href="/countries" style={{color:'white'}}>All Countries</Nav.Link>
                        <Nav.Link href="/records" style={{color:'white'}}>My Records</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default Menu;