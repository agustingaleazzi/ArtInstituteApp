import React from 'react';

import { useParams } from 'react-router';

import { agregarFavoritos, quitarFavoritos } from '../../actions/actions';

import { Image, Col, Row } from 'react-bootstrap';
import { Box, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from '@mui/material';
import { obra } from '../../interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';


const Detalles = () => {
    const obras = useAppSelector(state => state.obras);
    const obrasFavoritas = useAppSelector(state => state.obrasFav);
    const dispatch = useAppDispatch();
    let {id} = useParams<{ id?: string }>();
    let obra:obra = obras.find((e:obra) => e.id === Number(id) );
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
                    <Image style={{ height: '40rem' }} src={'https://www.artic.edu/iiif/2/' + obra.image_id + '/full/843,/0/default.jpg'}>
                    </Image>
                    <Col>
                        <Row>
                            <Typography>
                                {obra.title}
                                {
                                    obrasFavoritas.includes(obra) &&
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
                            </Typography>

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