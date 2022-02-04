import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { api } from '../constants/ApiConstants';
import { BsFillTrashFill } from "react-icons/bs";
import { BsFillPlusCircleFill } from "react-icons/all";
import axios from 'axios';


export function MyRecipes() {

    const [posts, setPosts] = useState([]);

    const headers = {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
    };
    
    function Recipes() {
        return axios.get(api.post_get_myrecipes_id, { headers })
        .then(response => response.data)
        .then(data => {
            setPosts(data.posts)
        }
        )
        .catch(error => alert(error));
    }

    useEffect(() => {
        Recipes();
    }, [])

    function Remove(id) {

        const headers = {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        };


        axios.delete(`${api.post_delete_id}${id}`, { headers } )
            .then( alert ('Recipe deleted!'))
            .then(window.location.reload(true))
            .catch(err => alert(err))

    }

    return (
        <div style={{ background: "	rgb(245, 245, 239)", paddingBottom: "17%", paddingLeft:"3%", paddingRight:"1%" }}>

            <Container style={{ marginInline: "7.7%" }}>
                <Row>
                    <Row>
                        <Col md >
                            <h3 style={{ color: "rgb(140, 179, 25)", fontFamily: "Times New Roman", fontWeight: "bold", fontSize: "xx-large", paddingInline: "20%" }}>My recipes</h3>
                        </Col>
                        <Col md style={{ paddingBottom: "3%" }}>
                            <a href="/createrecipe"><BsFillPlusCircleFill style={{ color: "orange", fontSize: "37px", float: "right", marginInlineEnd: "20%" }} /></a>                        </Col>
                    </Row>
                    <Row >
                        <div style={{ paddingInline: "10%" }}>
                            <Table responsive="sm"  >
                                <thead style={{ borderStyle: " none ", borderSize: "1px" }} >
                                    <tr >
                                        <th style={{ color: "orange", fontWeight: "bold" }}>Recipe Name</th>
                                        <th style={{ color: "orange", fontWeight: "bold" }}>Category</th>
                                        <th style={{ color: "orange", fontWeight: "bold" }}>Created On</th>
                                        <th colSpan='3'></th>
                                        <th></th>
                                        <th style={{ textAlign: "right", color: "orange", fontWeight: "bold" }}>Delete</th>
                                    </tr>
                                </thead>
                                <tbody style={{ backgroundColor: "white", borderStyle: "none" }}>
                                    {
                                        posts.map(post => {
                                            return (

                                                <tr key={post._id} >
                                                    <td ><a style={{ color: "gray", lineHeight: "33px", textAlign: "center", padding: "7%", textDecoration: "none" }} href={`/recipe/${post._id}`}>{post.title}</a></td>
                                                    <td><Button style={{ backgroundColor: "rgb(140, 179, 25)", borderColor: "rgb(140, 179, 25)", textAlign: "center", width: "70px", height: "20px", fontSize: "13px", paddingInline: "1px", paddingTop: "0px" }}> {post.category} </Button></td>
                                                    <td style={{ color: "rgb(179, 179, 179)" }}>{post.createdAt.slice(0, 10)}</td>
                                                    <td colSpan='3'></td>
                                                    <td></td>
                                                    <td style={{ textAlign: "right" }}> <Button variant="link" onClick={() => Remove(post._id)} style={{ color: 'gray' }}><BsFillTrashFill /></Button></td>
                                                </tr>

                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Row>
                </Row>
            </Container>

        </div>
    )
}

