
import React from 'react';
import Tarjeta from '../Tarjeta/Tarjeta';
import { useSelector } from 'react-redux';
import { Grid, Box } from '@mui/material';

import useStyles from '../../styles/styles';


const Favoritas = () => {
    const obrasFavoritas = useSelector(state => state.obrasFav);
    const styles = useStyles();

    return (
        <Box>
            {obrasFavoritas.length == 0 &&
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
            {obrasFavoritas.length != 0 &&
                <Grid
                    className={styles.MuiGrid}
                >
                    {obrasFavoritas.map(obra => {
                        return <Tarjeta key={obra.id} {...obra} />;
                    })}
                </Grid>
            }
        </Box>

    );
}

export default Favoritas;