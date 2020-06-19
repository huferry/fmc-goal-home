import React from 'react'
import './Navigation.css'
import { Navbar, Nav } from 'react-bootstrap'

const Navigation = ({links}) => (

    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">FMC's Goal, The App</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href={ links.os === 'OS_ANDROID' ? links.android : links.ios }>Get it!</Nav.Link>
            <Nav.Link href="https://www.fmc-online.nl">About FMC</Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Navbar>

)

export default Navigation