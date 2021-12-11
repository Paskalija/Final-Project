import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';



function Footer() {
    
      return (
        <Navbar bg="dark" variant="dark" style={{marginTop:"10%",height:"13rem"}} >
            <Container>
                <Navbar.Brand href="/" >
                <Image style={{height:"5rem"}} src="https://image.shutterstock.com/image-vector/nature-baby-food-spoon-love-260nw-349259120.jpg"/>
                </Navbar.Brand>
                <Nav style={{margin:"auto"}}>
                    <Nav.Link href="/breakfast">BREAKFAST</Nav.Link>
                    <Nav.Link href="/brunch">BRUNCH</Nav.Link>
                    <Nav.Link href="lunch">LUNCH</Nav.Link>
                    <Nav.Link href="dinner">DINNER</Nav.Link>
                </Nav>
                <span style={{color:"lightgray",textAlign:"end"}}>Baby's Food Place<br/>copyright 2021</span>
            </Container>
        </Navbar>
    
    )
}
export default Footer;