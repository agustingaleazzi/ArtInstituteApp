import React from 'react';
import {useNavigate} from 'react-router-dom';

const PaginaDefault = () => {
    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/');
      }, 3000)
    

    return (
        <h1>
            Pagina no encontrada. Retornando a home.
        </h1>

    );
}

export default PaginaDefault;