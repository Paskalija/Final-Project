import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Card } from 'react-bootstrap';

function MydModalWithGrid(props) {
    return (
        <div className='modal'>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <Card.Title>Card Title</Card.Title>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col xs={8} md={4}>
                                <Card.Img variant="top" src="https://images.everydayhealth.com/images/health-benefits-of-oatmeal-1440x810.jpg?sfvrsn=9f201ef_1" />
                                <Card.Title>Recipe Details</Card.Title>
                                <Card.Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Card.Text>
                                <i className="bi bi-clock"></i>
                                <i className="bi bi-star"></i>
                            </Col>
                            <Col xs={10} md={8}>
                                <Card.Title>Best Served For</Card.Title>
                                <Card.Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                </Card.Text>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default MydModalWithGrid;