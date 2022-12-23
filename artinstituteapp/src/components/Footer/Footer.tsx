import { Box } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <Box sx={{
            marginTop: '1rem',
            flexDirection: 'row', 
            justifyContent: "right",
            alignItems: "right", 
            display: "flex",
        }}>
            <h6>
                Aplicación desarrollada por Agustin Galeazzi
            </h6>
        </Box>
    );
};

export default Footer;