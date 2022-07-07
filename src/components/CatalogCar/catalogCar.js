import React from "react";
import {Button, Card, Col, Container, Nav, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import './catalogCar.css'
import Slider from "../Slider/slider";
import {useNavigate} from "react-router-dom";


function CatalogCar() {

    const [catalog, setCatalog] = useState([])
    const [filter, setFilter]=useState(0)
    const [filterArray, setFilterArray] = useState([])
    const [activeLink, setActiveLink] = useState(1)

    const changeFilterHandler = (price, activeTab) => {
        setActiveLink(activeTab)
        setFilter(price)
    }
    const navigate = useNavigate()



    useEffect(() => {
        fetch('http://localhost:8000/catalog')
            .then(res=>res.json())
            .then(data=>{
                setCatalog(data)
                setFilterArray(data)
            })

    },[])

    useEffect(()=>{
        if (filter === 0) {
            setFilterArray([...catalog])
        } else {
            const val = [...catalog].filter((item)=> item.category<=filter)
            setFilterArray(val)
        }
    },[filter])

    return (
        <Container className="py-4">
            <Row>
                <Slider />

                <div>
                    <Nav fill variant="tabs">
                        <Nav.Item>
                            <Nav.Link onClick={()=>{changeFilterHandler(0, 1)}} active={activeLink === 1} eventKey="link-1" >Все</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=>{changeFilterHandler(3000, 2)}} active={activeLink === 2} eventKey="link-2">До 3000$</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=>{changeFilterHandler(5000, 3)}} active={activeLink === 3} eventKey="link-3">До 5000$</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=>{changeFilterHandler(10000, 4)}} active={activeLink === 4} eventKey="link-4" >До 10000$</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <Col xs={12}>
                    <Row>
                        {
                            filterArray.map(el => (
                                <Card style={{ width: '17rem', marginLeft: '10px', marginTop: '20px' }}>
                                    <Card.Img  width="246px" height="160px" variant="top" src={el.image} />
                                    <Card.Body>
                                        <Card.Title>{el.name}</Card.Title>
                                        <Card.Text>
                                            {el.description}
                                        </Card.Text>
                                        <Card.Text>
                                            {el.price} $
                                        </Card.Text>
                                        <Button onClick={() => navigate(`/cars/${el.id}`)} variant="primary">Подробней</Button>
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
