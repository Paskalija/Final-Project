import React from 'react';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import footer from "../footer.png"


export function Footer() {
    
      return (
        
        <Navbar  style={{paddingTop:"3%",paddingBottom: "3%",  paddingLeft: "17%", paddingRight: "17.5%", justifyContent: "center",height: "10rem", backgroundColor:"rgb(98,98,98)"}} >
            <Container>
                <Navbar.Brand href="/" >
                <Image style={{height:"3rem"}} src={footer}/>
                </Navbar.Brand>
                <Nav style={{ fontSize: "15px"}}>
                    <Nav.Link href="/breakfast" style={{color: "white"}}>BREAKFAST</Nav.Link>
                    <div style={{ backgroundColor: "white", borderRadius: "50%", width: "7px", height: "7px", alignSelf: "center" }}></div>
                    <Nav.Link href="/brunch" style={{color: "white"}} >BRUNCH</Nav.Link>
                    <div style={{ backgroundColor: "white", borderRadius: "50%", width: "7px", height: "7px", alignSelf: "center" }}></div>
                    <Nav.Link href="/lunch" style={{color: "white"}} >LUNCH</Nav.Link>
                    <div style={{ backgroundColor: "white", borderRadius: "50%", width: "7px", height: "7px", alignSelf: "center" }}></div>
                    <Nav.Link href="/dinner" style={{color: "white"}} >DINNER</Nav.Link>
                </Nav>
                <span style={{color:"lightgray",textAlign:"end", fontSize: "small" }}>Baby's Food Place<br/>copyright 2021</span>
            </Container>
        </Navbar>
        
    
    )
}
