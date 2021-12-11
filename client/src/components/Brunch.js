import React from 'react';
import Header from './Header';
import CardRecipe from './CardRecipe';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';


function Brunch() {

    return (

        <div className="HomePage" style={{ background:"	rgb(245, 245, 239)" }}>
            <Header />
            <Container>
                <div className="Breakfast">
                <Row><h3 style={{ color: "green", marginBottom: "3%" }}>Brunch</h3></Row>
                    <CardRecipe />
                </div>
            </Container>
        </div>
    )
}
export default Brunch;