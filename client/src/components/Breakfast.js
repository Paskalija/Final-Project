import React from 'react';
import Header from './Header';
import CardRecipe from './CardRecipe';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function Breakfast() {

    return (

        <div className="HomePage" style={{ background:"	rgb(245, 245, 239)" }}>
            <Header />
            <Container>
                <div className="Breakfast">
                <Row><h3 style={{ color: "green", marginBottom: "3%" }}>Breakfast</h3></Row>
                    <CardRecipe />
                </div>
            </Container>
        </div>
    )
}
export default Breakfast;