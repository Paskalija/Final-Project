import React from "react";
import { Card, Button, Modal, Col, Row } from "react-bootstrap";
import { ChevronDoubleRight } from "react-bootstrap-icons";
import { Clock, EggFried, Star } from "react-bootstrap-icons";
import PropTypes from 'prop-types';
import { api } from "../constants/ApiConstants";

export function ModalWindow(props) {
    const post = props.post;

    function ModalCard(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered


            >
                <Modal.Header closeButton style={{ paddingBottom: "1px" }}>
                    <Modal.Title id="contained-modal-title-vcenter" style={{ fontWeight: "bold", fontFamily: "Times New Roman", color: "orange", fontSize: "33px" }}>
                        {post.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Row>
                        <Col xs={8} md={4} >
                            <Card.Img style={{ borderTopLeftRadius: "3%", borderTopRightRadius: "3%", height: "190px", width: "270px", paddingBottom: "7%" }} variant="top" src={post.image} />

                            <Card.Title style={{ fontSize: "17px", color: "rgb(140, 179, 25)", fontFamily: "Times New Roman", fontWeight: "bold" }}>Best Served For<span style={{ position: "absolute", left: "25%", backgroundColor: "rgb(140, 179, 25)", borderRadius: "30%/50%", fontSize: "15px", fontWeight: "normal", fontFamily: "Times New Roman", paddingInline: "9px", color: "white", opacity: "0.9" }}>{post.category.toLowerCase()}</span></Card.Title>
                            <Card.Text style={{ fontSize: "15px", wordBreak: "break-word", paddingBottom: "3%", color: "gray" }}>
                                {post.short_description}
                            </Card.Text>
                            <div style={{ position: "absolute", left: "2%", bottom: "3%", fontSize: "13px", paddingRight: "3px", paddingTop: "3%" }}>
                                <Clock style={{ position: "relative", left: "1%", bottom: "1%", fontSize: "13px" }} /> {post.preparation_time + " "}
                                <EggFried style={{ position: "relative", left: "1%", bottom: "1%", fontSize: "13px" }} />  {post.number_of_people + ' persons '}
                                <Star style={{ position: "relative", left: "1%", bottom: "1%", fontSize: "13px" }} /> {post.view}
                            </div>
                        </Col>
                        <Col xs={10} md={8} style={{ paddingLeft: "7%" }}>
                            <Card.Title style={{ color: "rgb(140, 179, 25)", fontFamily: "Times New Roman", fontSize: "17px", fontWeight: "bold" }}>Recipe Details</Card.Title>
                            <Card.Text style={{ fontSize: "15px", wordBreak: "break-word", color: "gray" }}>
                                {post.recipe}
                            </Card.Text>
                        </Col>
                    </Row>


                </Modal.Body>
            </Modal>
        );
    }
    function views() {
        fetch(api.post_get_id + post._id)
        .then(res => res.json())
        .catch(err => alert(err))
       
    }


    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Button style={{ position: "absolute", left: "85%", bottom: "4%", padding: "0%", backgroundColor: "rgb(140, 179, 25)", borderColor: "rgb(140, 179, 25)", height: "25px", width: "25px" }} variant="success" onClick={() => { setModalShow(true); views() }}>
                <ChevronDoubleRight />
            </Button>
            <ModalCard
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

ModalWindow.propTypes = {
    post: PropTypes.object.isRequired
}