import { Box } from '@mui/material';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/*<Row>
                <Col className='pageTitle'>
                    <h2>
                        ¡Bienvenidx a ArtInstituteApp!
                    </h2>
                </Col>

            </Row>
            <Row>
                <Col >
                    <Link style={{ textDecoration: 'none' }} className='homelink' to={'/grid'}>
                        Ver obras
                    </Link>
                </Col>
            </Row>*/
const Home = () => {
    return (
        <Box className="home"
            sx={{
                flexDirection: 'column', 
                justifyContent: "center",
                alignItems: "center", 
                display: "flex",
                minHeight: "90vh"
            }}
        >
            <div>
                <h2 style={{ width: 'auto' }} >
                    ¡Bienvenidx a ArtInstituteApp!
                </h2>
            </div>
            <div>
                <Link style={{ textDecoration: 'none' }} className='homelink' to={'/grid'}>
                    Ver obras
                </Link>
            </div>


        </Box>

    );
}

export default Home;