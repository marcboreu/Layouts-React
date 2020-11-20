import React from 'react';
import {Card} from 'react-bootstrap';

const CardLayout = () => {
    return (
        <Card style={{height: "200px"}}>
            <Card.Title style={{marginBottom: "0px"}}><h1 align="center">Card</h1></Card.Title>
            <Card.Img style={{height: "25%", width: "25%", display: "flex", margin: "auto"}} variant="top" src="https://picsum.photos/200" />
            <Card.Body style={{padding: "0.25rem"}}>
            <Card.Text style={{fontSize: "0.8rem"}}>
                This is a wider card with supporting text below as a natural.
            </Card.Text>
            </Card.Body>
            <Card.Footer style={{padding: "0.25rem", fontSize: "0.6rem"}}>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    );
}
export default CardLayout;


