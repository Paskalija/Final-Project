import React, { useState } from "react";
import axios from 'axios';
import { Col, Container, Row } from "react-bootstrap";
import { Image, Button, Form } from "react-bootstrap";
import { api } from '../constants/ApiConstants';
import { IoArrowUndoCircle } from "react-icons/all";




export function CreateRecipe() {
    const [Title, setTitle] = useState("");
    const [Category, setCategory] = useState("");
    const [PreparationTime, setPreparationTime] = useState("");
    const [NumberOfPeople, setNumberOfPeople] = useState("");
    const [ShortDescription, setShortDescription] = useState("");
    const [Recipe, setRecipe] = useState("");
    const [image, setImage] = useState("");
    var imageToSend = "";

    function SaveRecipe() {


        const formData = new FormData();
        formData.set('title', Title);
        formData.set('category', Category == "" ? "Breakfast" : Category);
        formData.set('preparation_time', PreparationTime);
        formData.set('number_of_people', NumberOfPeople);
        formData.set('short_description', ShortDescription);
        formData.set('recipe', Recipe);
        formData.append('image', imageToSend);

        const headers = {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        };

        axios.post(api.post_post, formData, { headers })
            .then(window.location.reload(true))
            .then(alert('You just created a new recipe!'))
            .catch(error => {
                console.error('There was an error!');
            });


    }

    function setImageToSend(event) {
        imageToSend = event.target.files[0];

    }




    return (
        <div style={{ background: "rgb(245, 245, 239)", paddingBottom: "7%" }}>

            <Container style={{ paddingInline: "10%", marginLeft: "10%", marginRight: "10%" }} >
                <Row>
                    <Row style={{ paddingBottom: "7%" }}>
                        <Col md>
                            <h3 style={{ color: "rgb(140, 179, 25)", fontFamily: "Times New Roman", fontWeight: "bold", fontSize: "xx-large" }}>My Recipes</h3>
                        </Col>
                        <Col md>
                            <a href="/myrecipes"><IoArrowUndoCircle style={{ color: "orange", fontSize: "37px", float: "right", marginInlineEnd: "13%" }} /></a>
                        </Col>
                    </Row>
                </Row>
                <Row >
                    <Col xs={4} md={2} >
                        <Col>
                            <Form.Label style={{ color: "orange", fontFamily: "Times New Roman", fontWeight: "bold" }}>Recipe Image</Form.Label>
                            <Image src="https://miro.medium.com/max/1400/0*Q7FatoV3ZD8aI170" style={{ borderRadius: "5%", height: "130px", width: "170px" }} />
                        </Col>

                        <br />
                        <Col>
                            <div className="">
                                <input style={{ display : "none"}} id="fileinput" type="file" onChange={setImageToSend.bind(this)} />
                            </div>
                            <Button onClick={() => document.getElementById("fileinput").click()} style={{ width: "150px", margin: "auto", marginTop: "10%", fontSize: "13px" }} variant="outline-secondary">UPLOAD IMAGE</Button>

                        </Col>
                    </Col>
                    <Col xs={8} md={6}>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label style={{ color: "orange", fontFamily: "Times New Roman", fontWeight: "bold" }}>Recipe Title</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder="Recipe Title"
                                    value={Title}
                                    onChange={e => { setTitle(e.target.value) }}
                                    style={{ backgroundColor: "rgb(240,239,234)" }}
                                />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridState" >
                                    <Form.Label style={{ color: "orange", fontFamily: "Times New Roman", fontWeight: "bold" }}>Category</Form.Label>
                                    <Form.Select defaultValue="Choose..." value={Category} onChange={e => { setCategory(e.target.value) }} style={{ backgroundColor: "rgb(240,239,234)" }}>
                                        <option selected value="Breakfast">Breakfast</option>
                                        <option value="Brunch">Brunch</option>
                                        <option value="Lunch">Lunch</option>
                                        <option value="Dinner">Dinner</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label style={{ color: "orange", fontFamily: "Times New Roman", fontWeight: "bold" }}>Preparation Time</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder="Preparation time"
                                        value={PreparationTime}
                                        onChange={e => { setPreparationTime(e.target.value) }}
                                        style={{ backgroundColor: "rgb(240,239,234)" }}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label style={{ color: "orange", fontFamily: "Times New Roman", fontWeight: "bold" }}>No. People</Form.Label>
                                    <Form.Control
                                        type='text'
                                        placeholder="No. People"
                                        value={NumberOfPeople}
                                        onChange={e => { setNumberOfPeople(e.target.value) }}
                                        style={{ backgroundColor: "rgb(240,239,234)" }}
                                    />
                                </Form.Group>
                            </Row>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={{ color: "orange", fontFamily: "Times New Roman", fontWeight: "bold" }}>Short Description</Form.Label>
                                <Form.Control as="textarea" rows={3} maxLength={130} placeholder="Short Description" value={ShortDescription} onChange={e => { setShortDescription(e.target.value) }} style={{ backgroundColor: "rgb(240,239,234)" }} />
                            </Form.Group>
                             <Button variant="success"
                                                style={{ backgroundColor: "rgb(140, 179, 25)", borderColor: "rgb(140, 179, 25)" }} onClick={SaveRecipe}>SAVE</Button>

                        </Form>
                    </Col>
                    <Col xs={6} md={4}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{ width: "230px" }}>
                            <Form.Label style={{ color: "orange", fontFamily: "Times New Roman", fontWeight: "bold" }}>Recipe</Form.Label>
                            <Form.Control as="textarea" rows={10} maxLength={775} placeholder=" Recipe" value={Recipe} onChange={e => { setRecipe(e.target.value) }}
                                style={{ backgroundColor: "rgb(240,239,234)" }} />
                        </Form.Group>
                    </Col>
                </Row>

            </Container>
        </div>
    )





}




