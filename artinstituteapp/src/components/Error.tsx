import React from 'react';
import { Container } from 'react-bootstrap';
import { useAppSelector } from '../hooks/hooks';

const Error = () => {
    const {texto, codigo} = useAppSelector((state) => state.errores);
    return(
        <Container>
            <p>
                Error numero {codigo}. Descripción: {texto}.
            </p>
        </Container>
    )
}

export default Error;