import React from 'react';
import { Nav} from 'react-bootstrap';
import {Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Image } from 'react-bootstrap';



function MyHeader() {
    return (
            <Navbar style={{marginBottom:"2%"}} variant="light">
                <Container>
                    <Navbar.Brand href="/" >
                    <Image style={{height:"7rem"}} src="https://image.shutterstock.com/image-vector/nature-baby-food-spoon-love-260nw-349259120.jpg"/>
                    </Navbar.Brand>
                    <Nav style={{margin:"auto"}}>
                        <Nav.Link href="/breakfast">BREAKFAST</Nav.Link>
                        <Nav.Link href="/brunch">BRUNCH</Nav.Link>
                        <Nav.Link href="/lunch">LUNCH</Nav.Link>
                        <Nav.Link href="/dinner">DINNER</Nav.Link>
                    </Nav>
                    <Nav style={{margin:"auto"}}>
                        <Nav.Link href="/myrecipes">MY RECIPES</Nav.Link>
                        <Nav.Link href="/myprofile">MY PROFILE</Nav.Link>
                        <Nav.Link href="/logout">LOG OUT</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }

export default MyHeader;