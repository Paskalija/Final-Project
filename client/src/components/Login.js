import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { api } from '../constants/ApiConstants';


export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LogInUser = () => {

        const login = {
            email: email,
            password: password

        }
        fetch( api.user_post_login, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(login)
        })
        .then(res => res.json())
        .then(data => {

            if (data.err === false) {
                localStorage.setItem("token", data.token);
                const redirect=()=>{window.location="http://localhost:3001/myprofile"};
                redirect();
            }else{
            alert(data.message);
            const redirect=()=>{window.location="http://localhost:3001/register"};
            redirect();
            }
        })
        .catch(err => {

        });
    }

    return (
        <div style={{ background: "rgb(245, 245, 239)", paddingBottom: "10%" }}>

            <Container style={{ marginLeft: "10%" }}>
                <Row className="g-2">
                    <Row>
                        <Col md>
                            <h3 style={{ color: "rgb(140, 179, 25)", fontFamily: "Times New Roman", fontWeight: "bold", fontSize: "xx-large", paddingInline: "10%" }}>Log In</h3>
                        </Col>
                    </Row>
                    <Col md style={{ paddingTop: "3%", paddingInline: "10%", paddingRight: "0%" }}>
                        <div className="textLogin" >
                            <h3><span style={{ color: "orange", fontFamily: "Times New Roman", fontWeight: "bold", fontSize: "xx-large" }}>Welcome to </span><span style={{ fontFamily: "Times New Roman", fontWeight: "bold", fontSize: "xx-large" }} >Baby's</span></h3>
                            <p style={{ fontFamily: "Times New Roman" }}>All the Lorem Ipsum generations on the Internet tend to repeat <br />
                                predefined chunks as necessary, making this the first true generation on <br />
                                the Internet. It uses a dictionary of over 200 Latin words, combinet with<br />
                                a handful of model sentence structures, to generate Lorem Ipsum ehich <br />
                                looks reasonable. The generated Lorem Isum is therefore always free <br />
                                from repetition, injected humour, or non - characteristic words etc. </p>
                        </div>
                    </Col>
                    <Col md style={{ paddingLeft: "7%", paddingTop: "3%" }}>
                        <div className="formLogin"  >
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label style={{ color: "orange", fontFamily: "Times New Roman", fontWeight: "bold" }}>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={email}
                                        onChange={e => { setEmail(e.target.value) }}
                                        style={{ backgroundColor: "rgb(240,239,234)", width: "50%" }} />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label style={{ color: "orange", fontFamily: "Times New Roman", fontWeight: "bold" }}>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password}
                                        onChange={e => { setPassword(e.target.value) }}
                                        style={{ backgroundColor: "rgb(240,239,234)", width: "50%" }} />
                                </Form.Group>
                                <Button variant="success" onClick={LogInUser} style={{ backgroundColor: "rgb(140, 179, 25)", borderColor: "rgb(140, 179, 25)" }}>LOG IN</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
