import React from 'react';

import { Link } from 'react-router-dom';

import { Box } from '@mui/material';

const Home = () => {
    return (
        <Box className="home"
            sx={{
                flexDirection: 'column', 
                justifyContent: "center",
                alignItems: "center", 
                display: "flex",
                minHeight: "90vh"
            }}
        >
            <div>
                <h2 style={{ width: 'auto' }} >
                    ¡Bienvenidx a ArtInstituteApp!
                </h2>
            </div>
            <div>
                <Link style={{ textDecoration: 'none' }} className='homelink' to={'/grid'}>
                    Ver obras
                </Link>
            </div>


        </Box>

    );
}

export default Home;