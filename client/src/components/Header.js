import React from 'react';
import { Container, Nav, Image, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function Header() {
    return (
        <Navbar style={{marginBottom:"2%", marginLeft:"15%", marginRight: "15%"}} variant="light">
            <Container>
                <Navbar.Brand href="/" >
                <Image style={{height:"7rem"}} src="https://image.shutterstock.com/image-vector/nature-baby-food-spoon-love-260nw-349259120.jpg"/>
                </Navbar.Brand>
                <Nav style={{margin:"auto"}}>
                    <Nav.Link href="/breakfast" >BREAKFAST</Nav.Link>
                    <Nav.Link href="/brunch" className="nav_link" >BRUNCH</Nav.Link>
                    <Nav.Link href="/lunch" className="nav_link" >LUNCH</Nav.Link>
                    <Nav.Link href="/dinner" className="nav_link" >DINNER</Nav.Link>
                </Nav>
                <Nav.Link href="/login"><Button variant="outline-secondary">Log in</Button></Nav.Link>
                    <span style={{alignSelf:"center"}}>or</span> 
                <Nav.Link href="/register"><Button variant="success">Create Account</Button></Nav.Link>
            </Container>
        </Navbar>
    )
}
export default Header;