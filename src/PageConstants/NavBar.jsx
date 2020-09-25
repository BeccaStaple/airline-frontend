import React from "react"
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Logo from "./Logo"
import Navigate from "../PageConstants/Navigate"

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand><Logo/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">
                                <Link style={{ color: "grey" }}to="/">
                                    Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <Link style={{ color: "grey" }} to="/booking">
                                    Make Booking
                                </Link>
                            </Nav.Link>

                            <NavDropdown title="Further Info" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    <Link style={{ color: "grey" }} to="/guidelines">
                                        Flying Guidelines
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    <Link style={{ color: "grey" }} to="/cancel-booking">
                                        Cancel a Booking
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    <Link style={{ color: "grey" }} to="/terms-and-conditions">
                                        Terms and Conditions
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    <Link style={{ color: "grey" }} to="/covid-info">
                                        Latest COVID Info
                                    </Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Navbar>

                <div>
                    <Navigate/>
                </div>
            </div>

        )
    }
}