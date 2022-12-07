import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import React from 'react';

const Detalles = () => {
    const [obras] = useSelector(state => state.obras);
    const { id } = useParams();
    const obra = obras.find(obra => obra.id == id);
    console.log(obra);

    return (
        <Container fluid className="detalles " style={{ width: '68rem' }}>
            {obra.id && (
                <Container fluid>
                    <Image variant="top" style={{ height: '40rem' }} src={'https://www.artic.edu/iiif/2/' + obra.image_id + '/full/843,/0/default.jpg'} alt={obra.thumbnail.alt_text}>
                    </Image>
                        <Col>
                            <Row>
                                <h1>
                                    {obra.title}
                                </h1>
                            </Row>

                        </Col>
                            <Col>
                                <Row>
                                    <p>
                                        Nombre del creador: {obra.artist_title ? obra.artist_title : 'Desconocido'}
                                    </p>
                                </Row>
                                <Row>
                                    <p>
                                        Fecha de creacion: {obra.artwork_type_title}
                                    </p>
                                </Row>
                                <Row>
                                    <p>
                                        Tipo de obra: {obra.date_display}
                                    </p>
                                </Row>
                                <Row>
                                    <p>
                                        País de origen: {obra.place_of_origin ? obra.place_of_origin : 'No conocido'}{}
                                    </p>
                                </Row>
                                <Row>
                                    <p>
                                        {obra.medium_display}
                                    </p>
                                </Row>
                                <Row>
                                    <p>
                                        Estilo: {obra.style_title ? obra.style_title : 'No clasificada'}
                                    </p>
                                </Row>
                            </Col>
                </Container>
            )}
            {!obra.id && (
                'Ha ocurrido un error.'
            )}
        </Container>
    );
}

export default Detalles;