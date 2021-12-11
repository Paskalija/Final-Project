import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Header from './Header';


function Login() {
    return (
        <div className="Login" style={{ background:"	rgb(245, 245, 239)" }}>
            <Header />
            <Container>
                <Row className="g-2">
                    <Row>
                    <Col md>
                        <h3>Log In</h3>
                        </Col>
                        </Row>
                        <Col md>
                        <div className="textLogin" >
                            <h3>Welcome to Baby's</h3>
                            <p>All the Lorem Ipsum generations on the Internet tend to repeat predefined chunks as necessary, making this the first true generation on the Internet. It uses a dictionary of over 200 Latin words, combinet with a handful of model sentence structures, to generate Lorem Ipsum ehich looks reasonable. The generated Lorem Isum is therefore always free from repetition, injected humour, or non - characteristic words etc. </p>
                        </div>
                    </Col>
                    <Col md>
                        <div className="formLogin"  >
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="success" href='/myprofile'>LOGIN</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Login;