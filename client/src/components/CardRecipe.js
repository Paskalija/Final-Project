import React  from 'react';
import { Card } from 'react-bootstrap';
import ModalCard from './ModalCard';




function CardRecipe() {

    return (

        <div className="Card">
           
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src="https://www.foodiecrush.com/wp-content/uploads/2018/04/Instant-Pot-Oatmeal-foodiecrush.com-020-683x1024-1-500x500.jpg"  />
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    <i className="bi bi-clock">min</i>
                    <i className="bi bi-star"></i>
                    <ModalCard />
                </Card.Body>
            </Card>
          
        </div>
    )
}
export default CardRecipe;