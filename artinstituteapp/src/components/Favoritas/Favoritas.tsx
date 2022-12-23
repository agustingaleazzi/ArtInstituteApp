import React from 'react';
import Tarjeta from '../Tarjeta/Tarjeta';
import { Grid, Box } from '@mui/material';

import useStyles from '../../styles/styles';
import { useAppSelector } from '../../hooks/hooks';

const Favoritas = () => {
    const obrasFavoritas = useAppSelector(state => state.obrasFav);
    const styles = useStyles();

    return (
        <Box>
            {obrasFavoritas.length === 0 &&
                <Box
                    sx={{
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        minHeight: "90vh"
                    }}
                ><h2>
                        No tienes obras favoritas seleccionadas
                    </h2>
                </Box>
            }
            {obrasFavoritas.length !== 0 &&
                <Grid
                    className={styles.MuiGrid}
                >
                    {obrasFavoritas.map(function (element: any) {//TODO usar obra
                        return <Tarjeta key={element.id} id={element.id} />;
                    })}
                </Grid>
            }
        </Box>

    );
}

export default Favoritas;