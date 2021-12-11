import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import CardRecipe from './CardRecipe';
import Header from './Header';
import { api } from '../constants/ApiConstants';
import { Card, Row, Col } from 'react-bootstrap';
import ModalCard from './ModalCard';



function HomePage() {
    const [FreshandNew, setFreshNew] = useState([]);
    const [Most_Popular, setMostPopular] = useState([]);
    function homePage() {
        debugger;
        fetch(api.root)
            .then(res => res.json())
            .then(data => {
                setFreshNew(data.freshNew)
                setMostPopular(data.mostPopular)

                
            })
            .catch(err => alert(err));
    }
    useEffect(() => {
        homePage();
    }, []);


    return (

        
        <div className="HomePage" style={{ background:"	rgb(245, 245, 239)" }}>
            <Header />
            
            <Container>
                <Row >
                <Row><h3 style={{ color: "green", marginBottom: "3%", fontFamily:"georgia", marginLeft:"7%", marginRight: "7%"}}>Fresh & New</h3></Row>
                  
                  
                  
                    {FreshandNew.map(post=> {
                        
                        console.log(post.title)
                        
                        return (
                            <Col xs={4} key={post._id}  style={{marginLeft:"7%", marginRight: "7%"}}>
                                <Card style={{ width: '24rem', borderRadius: "2%" }}>
                                    <Card.Img style={{ borderTopLeftRadius: "2%", borderTopRightRadius: "2%" }} variant="top" src="https://images.everydayhealth.com/images/health-benefits-of-oatmeal-1440x810.jpg?sfvrsn=9f201ef_1" />
                                    <Card.Body>
                                        <Card.Title>{post.title}</Card.Title>
                                        <Card.Text>
                                            {post.short_description}
                                        </Card.Text>
                                        <i className="bi bi-clock"></i>{post.preparation_time}
                                        <i className="bi bi-star"></i> {post.seen}
                                        <ModalCard />
                                    </Card.Body>
                                </Card>
                            </Col>)
                    })}
                </Row>


                <div className="MostPopular" >
                <Row><h3 style={{ color: "green", marginBottom: "3%", fontFamily:"georgia",  marginLeft:"7%", marginRight: "7%" }}>Most Popular</h3></Row>
                   
                {Most_Popular.map(post=> {
                        
                        console.log(post.title)
                        
                        return (
                            <Col xs={4} key={post._id}  style={{marginLeft:"7%", marginRight: "7%"}}>
                                <Card style={{ width: '24rem', borderRadius: "2%" }}>
                                    <Card.Img style={{ borderTopLeftRadius: "2%", borderTopRightRadius: "2%" }} variant="top" src="https://images.everydayhealth.com/images/health-benefits-of-oatmeal-1440x810.jpg?sfvrsn=9f201ef_1" />
                                    <Card.Body>
                                        <Card.Title>{post.title}</Card.Title>
                                        <Card.Text>
                                            {post.short_description}
                                        </Card.Text>
                                        <i className="bi bi-clock"></i>{post.preparation_time}
                                        <i className="bi bi-star"></i> {post.seen}
                                        <ModalCard />
                                    </Card.Body>
                                </Card>
                            </Col>)
                    })}
                </div>
            </Container>
        </div>
    )
}
export default HomePage;