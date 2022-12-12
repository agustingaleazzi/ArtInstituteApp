import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Box } from '@mui/material';

const PaginaDefault = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 3000)
    });

    return (
        <Box
            sx={{
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                minHeight: "90vh"
            }}
        >
            <h1>
                Pagina no encontrada. Retornando a home.
            </h1>
        </Box>
    );
}

export default PaginaDefault;