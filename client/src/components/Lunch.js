import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { api } from '../constants/ApiConstants';
import { Card, Row, Col } from 'react-bootstrap';
import { Clock, EggFried, Star } from "react-bootstrap-icons";
import { ModalWindow } from './MyModal';
import axios from 'axios';


export function Lunch() {
    const [LN, setLunch] = useState([]);

    function lunch() {
        return axios.get(api.post_get_category_lunch)
        .then(response => response.data)
        .then(data => {
            setLunch(data.posts)
    })
        .catch(error => alert(error));
    }

    useEffect(() => {
        lunch();
    }, []);

    return (


        <div style={{ background: "	rgb(245, 245, 239)" }}>


            <Container style={{ marginLeft: "9%", marginRight: "9%", flex: "center", paddingInline: "10%", paddingBottom: "0%" }}>
                <Row>
                    <Row><h3 style={{ color: "rgb(140, 179, 25)", marginBottom: "3%", fontFamily: "Times New Roman", fontWeight: "bold", fontSize: "xx-large", marginLeft: "0%", marginRight: "7%" }}>Lunch</h3></Row>



                    {LN.map(post => {

                        console.log(post.title)

                        return (
                            <Col lg={3} key={post._id} style={{ marginLeft: "0%", marginRight: "7%", paddingBlock: '3%' }}>
                                <Card style={{ width: '17rem', borderRadius: "3%", height: "25rem" }}>
                                    <Card.Img style={{ borderTopLeftRadius: "3%", borderTopRightRadius: "3%", width: "100%", height: "50%" }} variant="top" src={post.image} />
                                    <p style={{ position: "absolute", left: "5%", top: "3%", backgroundColor: "rgb(140, 179, 25)", borderRadius: "30%/50%", fontSize: "15px", fontFamily: "Times New Roman", padding: "1%", color: "white", paddingLeft: "3%", paddingRight: "3%", paddingBottom: "1.5%", opacity: "0.9" }}>{post.category.toLowerCase()}</p>
                                    <Card.Body>
                                        <Card.Title style={{ color: "orange", fontFamily: "Times New Roman", fontWeight: "bold" }}>{post.title}</Card.Title>
                                        <Card.Text style={{ position: "absolute", inlineSize: "250px", overflow: "hidden", fontSize: "15px" }}>
                                            {post.short_description}
                                        </Card.Text>
                                        <div style={{ position: "absolute", left: "7%", bottom: "5%", fontSize: "13px", paddingRight: "3px" }}>
                                            <Clock style={{ position: "relative", left: "1%", bottom: "1%", fontSize: "13px" }} /> {post.preparation_time + " min "}
                                            <EggFried style={{ position: "relative", left: "1%", bottom: "1%", fontSize: "13px" }} />  {post.number_of_people + ' persons '}
                                            <Star style={{ position: "relative", left: "1%", bottom: "1%", fontSize: "13px" }} /> {post.view}
                                        </div>
                                        <ModalWindow post={post} />
                                    </Card.Body>
                                </Card>
                            </Col>)
                    })}
                </Row>
            </Container>
        </div>
    )
}
