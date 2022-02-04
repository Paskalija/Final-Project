import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { api } from "../constants/ApiConstants";
import axios from 'axios';




export function MyProfile() {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");
    const [repeat_password, setRepeatPassword] = useState("");
    const [image, setImage] = useState("");
    var imageToSend = "";

    const headers = {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    };

    function myProfile() {
        return axios.get(api.user_get_profile, { headers })
            .then(response => response.data)
            .then(data => {
                setFirstName(data.user.first_name);
                setLastName(data.user.last_name);
                setEmail(data.user.email);
                setBirthday(data.user.birthday);
                if (data.user.image != "") {
                    setImage(data.user.image);
                } else {
                    setImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI3vvVZ-pOGsyhaNEm9s-tm96lh7OGxJrpPQ&usqp=CAU");
                }
            })
            .catch(error => alert(error));
    }


    useEffect(() => {
        myProfile();
    }, []);

    function update() {

        const formData = new FormData()
        formData.set('first_name', first_name);
        formData.set('last_name', last_name);
        formData.set('email', email);
        formData.set('birthday', birthday);
        formData.append('image', imageToSend);
        formData.set('password', password);
        formData.set('repeat_password', repeat_password);

        const headers = {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        };

        axios.patch(api.user_patch, formData, { headers })
            .then(window.location.reload(true))
            .then(alert('You just updated your profile!'))
            .catch(error => {
                console.error('There was an error!', error);
            });


    }

    function setImageToSend(event) {
        imageToSend = event.target.files[0];
    }





    return (
        <div style={{ background: "	rgb(245, 245, 239)", paddingBottom: "7%" }}>

            <div>
                <Container style={{ marginLeft: "7%", paddingInline: "5%" }} >
                    <Row>
                        <Row>
                            <Col md >
                                <h3 style={{ color: "rgb(140, 179, 25)", fontFamily: "Times New Roman", fontWeight: "bold", fontSize: "xx-large", paddingInline: "10%" }}>My Profile</h3>
                            </Col>
                        </Row>
                        <Col md style={{ paddingTop: "3%", marginRight: "-219px", marginLeft: "10%", }}>
                            <Col style={{ marginLeft: "7%" }}>
                                <Image src={image} style={{ borderRadius: "50%", height: "130px", width: "130px" }} />

                            </Col>
                            <br />
                            <Col>
                                <div>
                                    <input style={{ display: "none" }} id="fileinput" type="file" onChange={setImageToSend.bind(this)} />
                                    <Button onClick={() => document.getElementById("fileinput").click()} variant="outline-secondary" style={{ width: "150px", marginLeft: "5%", marginTop: "10px", fontSize: "13px" }} >CHANGE AVATAR</Button>
                                </div>

                            </Col>
                        </Col>
                        <Col md style={{ paddingTop: "3%", marginRight: "10%", marginLeft: "0%" }}>
                            <div className="formAccount"  >
                                <Form style={{ float: "left" }}>
                                    <Row>
                                        <Col >
                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Label style={{ color: "orange", fontFamily: "Times New Roman", fontWeight: "bold" }}>First Name</Form.Label>
                                                <Form.Control placeholder="First Name"
                                                    style={{ backgroundColor: "rgb(240,239,234)" }}
                                                    value={first_name}
                                                    onChange={e => { setFirstName(e.target.value) }} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                                <Form.Label style={{ color: "orange", fontFamily: "Times New Roman", fontWeight: "bold" }}>Last Name</Form.Label>
                                                <Form.Control placeholder="Last Name"
                                                    style={{ backgroundColor: "rgb(240,239,234)" }}
                                                    value={last_name}
                                                    onChange={e => { setLastName(e.target.value) }} />

                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                                <Form.Label style={{ color: "orange", fontFamily: "Times New Roman", fontWeight: "bold" }}>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="Enter email"
                                                    style={{ backgroundColor: "rgb(240,239,234)" }}
                                                    onChange={e => { setEmail(e.target.value) }}
                                                    value={email}
                                                    style={{ backgroundColor: "rgb(240,239,234)" }} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group as={Col} controlId="formGridDOB">
                                                <Form.Label style={{ color: "orange", fontFamily: "Times New Roman", fontWeight: "bold" }}>Birthday</Form.Label>
                                                <Form.Control type="date"
                                                    style={{ backgroundColor: "rgb(240,239,234)" }}
                                                    onChange={e => { setBirthday(e.target.value) }}
                                                    value={birthday}
                                                    style={{ backgroundColor: "rgb(240,239,234)" }} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label style={{ color: "orange", fontFamily: "Times New Roman", fontWeight: "bold" }}>Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password"
                                                    style={{ backgroundColor: "rgb(240,239,234)" }}
                                                    onChange={e => { setPassword(e.target.value) }}
                                                    value={password}
                                                    style={{ backgroundColor: "rgb(240,239,234)" }} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group as={Col} controlId="formGridPassword">
                                                <Form.Label style={{ color: "orange", fontFamily: "Times New Roman", fontWeight: "bold" }}>Repeat Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password"
                                                    style={{ backgroundColor: "rgb(240,239,234)" }}
                                                    onChange={e => { setRepeatPassword(e.target.value) }}
                                                    value={repeat_password}
                                                    style={{ backgroundColor: "rgb(240,239,234)" }} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col>
                                            <Button variant="success"
                                                style={{ backgroundColor: "rgb(140, 179, 25)", borderColor: "rgb(140, 179, 25)" }} onClick={update}>SAVE</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
