import React from 'react';
import { Card, Container, Row } from 'react-bootstrap';
import ModalCustom from '../ModalCustom/ModalCustom';
/*
 width={thumbnail.width} height={thumbnail.height}
 const { id,
        title,
        artist_title,
        date_display,
        thumbnail,
        image_id,
        width,
        height
    } = props;
*/

const Tarjeta = props => {
    console.log({ props })
    const obra = props;
    return (
        <Card className="tarjeta bg-dark">
            <Card.Img variant="top" style={{ maxheight: '18rem' }} src={'https://www.artic.edu/iiif/2/' + obra.image_id + '/full/843,/0/default.jpg'}>
            </Card.Img>
            <Card.Body className="cuerpotarjeta">
                <Card.Title>
                    <p>{obra.title}</p>
                </Card.Title>
            </Card.Body>
            <Card.Text>
                {obra.id && (
                    <Container fluid>
                        <Row>
                            <p>
                                Nombre del creador: {obra.artist_title}
                            </p>
                        </Row>
                        <Row>
                            <p>
                                Fecha de creacion: {obra.date_display}
                            </p>
                        </Row>
                        <Row>
                            <ModalCustom {...obra}/>
                        </Row>
                        
                    </Container>
                )}
                {!obra.id && (
                    'aaaaaaaaaaaaaaaa well meaning and kindly.'
                )}
            </Card.Text>
        </Card>
    );
};

Tarjeta.defaultProps = {
    id: null
};

export default Tarjeta;