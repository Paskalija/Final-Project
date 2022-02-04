import React from 'react';
import { Container, Nav, Image, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import header from "../header.png";
import {api} from "../constants/ApiConstants";
import axios from 'axios';


export function Header() {
    
    const token = localStorage.getItem("token");



function LogOut(){
  
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    };

    axios.post(api.user_post_logout, null, { headers })
        .then(data => {
            if (data.data.error == false){
                const redirect = () => {
                    window.location = "/"
                };
                localStorage.clear();
                redirect();
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });

}
    return (

        <div style={{ background: "rgb(245, 245, 239)", paddingBottom: "1%" }}>
            <Navbar style={{ marginBottom: "3%", paddingTop: "3%", marginLeft: "17%", marginRight: "17.5%", justifyContent: "center" }} variant="light">
                <Container>
                    <Navbar.Brand href="/" style={{background: "rgb(245, 245, 239)"}}>
                        <Image style={{ height: "3.7rem" }} src={header} />
                    </Navbar.Brand>
                    <Nav style={{ margin: "auto" }}>
                        <Nav.Link href="/breakfast" className="nav_link" style={window.location.href === "http://localhost:3001/breakfast" ? {color:"orange",textDecoration:"bold"}:{color:"gray",textDecoration:"bold"}}>BREAKFAST </Nav.Link>
                        <div style={{ backgroundColor: "orange", borderRadius: "50%", width: "7px", height: "7px", alignSelf: "center" }}></div>
                        <Nav.Link href="/brunch" className="nav_link" style={window.location.href === "http://localhost:3001/brunch" ? {color:"orange",textDecoration:"bold"}:{color:"gray",textDecoration:"bold"}} >BRUNCH </Nav.Link>
                        <div style={{ backgroundColor: "orange", borderRadius: "50%", width: "7px", height: "7px", alignSelf: "center" }}></div>
                        <Nav.Link href="/lunch" className="nav_link" style={window.location.href === "http://localhost:3001/lunch" ? {color:"orange", textDecoration:"bold"}:{color:"gray",textDecoration:"bold"}} >LUNCH</Nav.Link>
                        <div style={{ backgroundColor: "orange", borderRadius: "50%", width: "7px", height: "7px", alignSelf: "center" }}></div>
                        <Nav.Link href="/dinner" className="nav_link" style={window.location.href === "http://localhost:3001/dinner" ? {color:"orange", textDecoration:"bold"}:{color:"gray",textDecoration:"bold"}} >DINNER</Nav.Link>
                    </Nav>
                    {token? 
                               <Nav style={{ marginBlockEnd: "0" }}>
                               <Nav.Link href="/myrecipes" style={{ color: "rgb(140, 179, 25)", textDecoration:"underline",  textUnderlinePosition: "under" }} >MY RECIPES</Nav.Link>
                               <div style={{ backgroundColor: "rgb(98,98,98)", borderRadius: "50%", width: "7px", height: "7px", alignSelf: "center" }}></div>
                               <Nav.Link href="/myprofile" style={{ color: "orange", textDecoration:"underline",  textUnderlinePosition: "under" }}>MY PROFILE</Nav.Link>
                               <div style={{ backgroundColor: "rgb(98,98,98)",  borderRadius: "50%", width: "7px", height: "7px", alignSelf: "center" }}></div>
                               <Nav.Link style={{textDecoration:"underline", textUnderlinePosition: "under"}} onClick={LogOut} >LOG OUT</Nav.Link>
                           </Nav>
                        : 
                         <Nav style={{ marginBlockEnd: "0" }}>
                        <Nav.Link href="/login"><Button variant="outline-secondary" >Log in</Button></Nav.Link>
                        <span style={{ alignSelf: "center", color: "orange", fontWeight: "bold" }}>or</span>
                        <Nav.Link href="/register"><Button variant="success" style={{ backgroundColor: "rgb(140, 179, 25)", borderColor: "rgb(140, 179, 25)" }}>Create Account</Button></Nav.Link>
                    </Nav>
                        
                }
                </Container>
            </Navbar>
         </div>   )
}

