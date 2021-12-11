import React from 'react';
import { Container } from 'react-bootstrap';
import CardRecipe from './CardRecipe';
import Header from './Header';
import { Row } from 'react-bootstrap';


function Lunch() {

    return (

        <div className="HomePage" style={{ background:"	rgb(245, 245, 239)" }} >
            <Header />
            <Container>
                <div className="Breakfast">
                <Row><h3 style={{ color: "green", marginBottom: "3%" }}>Lunch</h3></Row>
                    <section>
                        <CardRecipe />
                    </section>
                </div>
            </Container>
        </div>
    )
}
export default Lunch;