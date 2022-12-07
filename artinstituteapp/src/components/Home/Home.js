import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container fluid className="home">
            <Row>
                <Col className='pageTitle'>
                    <h2>
                        ¡Bienvenidx a ArtInstituteApp!
                    </h2>
                </Col>

            </Row>
            <Row>
                <Col >
                    <Link className='homelink' to={'/grid'}>
                        Ver obras
                    </Link>
                </Col>
            </Row>

        </Container>
    );
}

export default Home;