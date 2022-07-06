import Carousel from 'react-bootstrap/Carousel';


function Slider() {
    return (
        <Carousel style={{marginTop:'30px', marginBottom:'30px'}} >
            <Carousel.Item interval={10000}>
                <img
                    className="d-block mw-100 h-75"
                    src="https://di-uploads-pod10.dealerinspire.com/majorworld/uploads/2016/02/bmw-banner-xseries-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-75"
                    src="https://di-uploads-pod10.dealerinspire.com/majorworld/uploads/2016/02/bmw-banner-xseries-1.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-75"
                    src="https://di-uploads-pod10.dealerinspire.com/majorworld/uploads/2016/02/bmw-banner-xseries-1.jpg"
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
    );
}

export default Slider;
