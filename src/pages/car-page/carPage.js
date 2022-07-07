import React from 'react';
import {Card, Carousel, ListGroup} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


const CarPage = () => {
    const params = useParams()
    const [catalog, setCatalog] = useState([])
    const [card, setCard] = useState([])
    console.log(card)

    useEffect(() => {
        fetch('http://localhost:8000/catalog')
            .then(res=>res.json())
            .then(data=>{
                setCatalog(data)
                const test = data.filter(function (item) {
                    return item.id === params.id
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
                                src="https://avatars.mds.yandex.net/get-vertis-journal/3911415/_C2A3030.jpg_1626704068585/orig"
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
                                src="https://www.asroad.org/wp-content/uploads/2020/07/Image.png-2.jpeg"
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
                                src="https://autoreview.ru/images/gallery/%D0%9D%D0%BE%D0%B2%D0%BE%D1%81%D1%82%D0%B8/2020/February/04/toyota-camry-s-edition2.jpg"
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
                        <Card.Title>Name</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
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
