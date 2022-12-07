import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Tarjeta = (props) => {
    const obra = props;
    return (
        <>
            <Card className="tarjeta bg-dark">
                <Card.Img variant="top" style={{ maxheight: '18rem' }} src={'https://www.artic.edu/iiif/2/' + obra.image_id + '/full/843,/0/default.jpg'}>
                </Card.Img>
                <Card.Body className="cuerpotarjeta">
                    <Card.Title>
                        {obra.title}
                    </Card.Title>
                </Card.Body>
                <Card.Text>
                    {obra.id && (
                        <Container fluid>
                            <Row>
                                <p>
                                    Nombre del creador: {obra.artist_title ? obra.artist_title : 'Desconocido'}
                                </p>
                            </Row>
                            <Row>
                                <p>
                                    Fecha de creacion: {obra.date_display}
                                </p>
                            </Row>
                            <Row>
                                <Link className='link' to={`detalles/${obra.id}`} >Detalles de la obra
                                </Link>
                            </Row>
                        </Container>
                    )}
                    {!obra.id && (
                        'Error al cargar la obra'
                    )}
                </Card.Text>
            </Card>
        </>
    );
};

Tarjeta.defaultProps = {
    id: null
};

export default Tarjeta;