import React from "react";
import {Button, Card, Col, Container, Nav, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import './catalogCar.css'
import Slider from "../Slider/slider";


function CatalogCar() {

    const [catalog, setCatalog] = useState([])
    const [filter, setFilter]=useState(3000)
    const [filterArray, setFilterArray] = useState([catalog])
    console.log(filterArray)



    useEffect(() => {
        fetch('http://localhost:8000/catalog')
            .then(res=>res.json())
            .then(data=>setCatalog(data))

    },[])

            useEffect(()=>{
                const val = [...catalog].filter((item)=> item.category<=filter)
                setFilterArray(val)
            },[filter])

    return (

            filter &&

            <Container className="py-4">
                <Row>
                    <Slider />

                    <div>
                        <Nav fill variant="tabs">
                            <Nav.Item>
                                <Nav.Link onClick={()=>{setFilter(99999999999999999999)}}eventKey="link-1">Все</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={()=>{setFilter(3000)}} eventKey="link-2">До 3000$</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={()=>{setFilter(5000)}} eventKey="link-3">До 5000$</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={()=>{setFilter(10000)}} eventKey="link-4" >До 10000$</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <Col xs={12}>
                        <Row>
                        {
                            filterArray.map(el => (
                            <Card style={{ width: '16rem', marginLeft: '10px', marginTop: '20px' }}>
                                <Card.Img variant="top" src={el.image} />
                                <Card.Body>
                                    <Card.Title>{el.name}</Card.Title>
                                    <Card.Text>
                                        {el.description}
                                    </Card.Text>
                                    <Card.Text>
                                        {el.price} $
                                    </Card.Text>
                                    <Button variant="primary">Подробней</Button>
                                </Card.Body>
                            </Card>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
    );
}

export default CatalogCar;
