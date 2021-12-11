import React from 'react';
import { Container } from 'react-bootstrap';
import CardRecipe from './CardRecipe';
import Header from './Header';
import { Row } from 'react-bootstrap';


function Dinner() {

    return (

        <div className="HomePage" style={{ background:"	rgb(245, 245, 239)" }} >
            <Header />
            <Container>
                <div className="Dinner">
                <Row><h3 style={{ color: "green", marginBottom: "3%" }}>Dinner</h3></Row>
                    <CardRecipe />
                </div>
            </Container>
        </div>
    )
}
export default Dinner;