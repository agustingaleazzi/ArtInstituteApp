import Tarjeta from '../Tarjeta/Tarjeta';
import { Grid } from '@mui/material';

import useStyles from '../../styles/styles';
import React, { Suspense, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getPage } from '../../actions/actions';
import { Button } from 'react-bootstrap';



const Tarjetas = () => {
    const obras = useAppSelector(state => state.obras.data);
    const styles = useStyles();
    const pagination = useAppSelector(state => state.obras.pagination)
    const dispatch = useAppDispatch();

    const handlePageChange = () => {
        dispatch(getPage(pagination.next_url))
    }

    return (
        <Suspense fallback="loading...">
            <Grid
                className={styles.MuiGrid}
            >
                {obras.map(function (element: any) {
                    return <Tarjeta key={element.id} {...element} />;
                }
                )}
            </Grid>
            <h2>
                {pagination.current_page}
            </h2>
            <Button onClick={handlePageChange}>
                Siguiente página
            </Button>
        </Suspense>

    );
}

export default Tarjetas;