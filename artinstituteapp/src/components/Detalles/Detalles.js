import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { agregarFavoritos, quitarFavoritos } from '../../actions/actions';

import { Image, Col, Row } from 'react-bootstrap';
import { Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';

const Detalles = () => {
    const obras = useSelector(state => state.obras);
    const obrasFavoritas = useSelector(state => state.obrasFav);
    const dispatch = useDispatch();
    const { id } = useParams();
    const obra = obras.find(obra => obra.id == id);
    const agregarAFavoritos = () => {
        dispatch(agregarFavoritos(obra))
    }
    const quitarDeFavoritos = () => {
        dispatch(quitarFavoritos(obra))
    }

    return (
        <Box className="detalles ">
            {obra.id && (
                <Box>
                    <Image variant="top" style={{ height: '40rem' }} src={'https://www.artic.edu/iiif/2/' + obra.image_id + '/full/843,/0/default.jpg'}>
                    </Image>
                    <Col>
                        <Row>
                            <h1>
                                {obra.title}
                                {obrasFavoritas.includes(obra) &&
                                <IconButton onClick={
                                    () => {
                                        quitarDeFavoritos();
                                    }
                                }>
                                    <FavoriteIcon />
                                </IconButton>
                            }
                            {!obrasFavoritas.includes(obra) &&
                                <IconButton onClick={
                                    () => {
                                        agregarAFavoritos();
                                    }
                                }>
                                    <FavoriteBorderIcon />
                                </IconButton>
                            }
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
                                País de origen: {obra.place_of_origin ? obra.place_of_origin : 'No conocido'}{ }
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
                </Box>
            )}
            {!obra.id && (
                'Ha ocurrido un error.'
            )}
        </Box>
    );
}

export default Detalles;