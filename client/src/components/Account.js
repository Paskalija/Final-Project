import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Header from './Header';
import { api } from '../constants/ApiConstants';


function Account() {
    const [FirstName,setFirstName]=useState("");
    const [LastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [birthday, setBirthday]=useState("");
    const [password,setPassword]=useState("");
    const [confirmationPassword, setConfirmationPassword]=useState("");

     const handleSubmitClick = () => {
         debugger;
        const register = {
            first_name: FirstName,
            last_name: LastName,
            email: email,
            birthday: birthday,
            password: password,
            repeat_password: confirmationPassword
            }
        fetch("http://localhost:7000/users/register", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(register)
        })
        .then( alert (`Account is created`))
        .catch(err=>alert(err))
    }
   
    return (
        <div className="Account" style={{ background:"	rgb(245, 245, 239)" }}>
            <Header />
            <Container>
                <Row className="g-2">
                    <Row>
                        <Col>
                            <h3>Create Account</h3>
                        </Col>
                    </Row>
                    <Col md>
                        <div className="textAccount" >
                            <h4>Create your</h4>
                            <h4>account</h4>
                            <p>All the Lorem Ipsum generations on the Internet tend to repeat predefined chunks as necessary, making this the first true generation on the Internet. It uses a dictionary of over 200 Latin words, combinet with a handful of model sentence structures, to generate Lorem Ipsum ehich looks reasonable. The generated Lorem Isum is therefore always free from repetition, injected humour, or non - characteristic words etc. </p>
                        </div>
                    </Col>
                    <Col md>
                        <div className="formAccount"  >
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control
                                                type='text'
                                                placeholder="First Name"
                                                value={FirstName}
                                                onChange={e=>{setFirstName(e.target.value)}}
                                                 />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control
                                                type='text'
                                                placeholder="Last Name"
                                                value={LastName}
                                               onChange={e=>{setLastName(e.target.value)}}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                               value={email}
                                               onChange={e=>{setEmail(e.target.value)}}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group as={Col} controlId="formGridDOB">
                                            <Form.Label>Birthday</Form.Label>
                                            <Form.Control
                                                type="date"
                                                value={birthday}
                                                onChange={e=>{setBirthday(e.target.value)}}
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={e=>{setPassword(e.target.value)}}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group as={Col} controlId="formGridPassword">
                                            <Form.Label>Repeat Password</Form.Label>
                                            <Form.Control 
                                            type="password"
                                             placeholder="Password"
                                            value={confirmationPassword}
                                            onChange={e=>{setConfirmationPassword(e.target.value)}}
                                             />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col>
                                        <Button variant="success"
                                            href='/login'
                                            type='button'
                                            onClick={handleSubmitClick}
                                            >
                                            CREATE ACCOUNT
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Account;
