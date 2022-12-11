import Tarjeta from '../Tarjeta/Tarjeta';
import { useSelector } from 'react-redux';
import { Grid, Box } from '@mui/material';

import useStyles from '../../styles/styles';
import React, { Suspense } from 'react';

const Tarjetas = () => {
    const obras = useSelector(state => state.obras);
    const styles = useStyles();

    return (
        <Suspense fallback="loading...">
            <Grid
                className={styles.MuiGrid}
            >
            {obras.map(obra => {
                return <Tarjeta key={obra.id} {...obra} />;
            }
            )}
            </Grid>
        </Suspense>

    );
}

export default Tarjetas;