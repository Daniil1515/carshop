import React from 'react';
import {Card, Carousel, ListGroup} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


const CarPage = () => {
    const params = useParams()
    const [card, setCard] = useState({})


    useEffect(() => {
        fetch('http://localhost:8000/catalog')
            .then(res=>res.json())
            .then(data=>{
                const test = data.find(item => {
                    return item.id == params.id
                })
                setCard(test)
            })
    },[])



    return (
        <div>
            <Card style={{display:'flex', margin:'50px auto', width: '55rem' }}>
                <Carousel>
                    <Carousel.Item interval={5000} >
                        <img
                            style={{maxHeight:'500px'}}
                            className="d-block  w-100"
                            src={card.image}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            style={{maxHeight:'500px'}}
                            className="d-block w-100"
                            src={card.image}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{maxHeight:'500px'}}
                            className="d-block w-100"
                            src={card.image}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Card.Body>
                    <Card.Title>Name: {card.name}</Card.Title>
                    <Card.Text>
                        Description: {card.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Price: {card.price}</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CarPage;
