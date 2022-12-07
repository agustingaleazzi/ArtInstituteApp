import React from 'react';
import { Container } from 'react-bootstrap';

const Error = props => {
    const {texto, codigo} = props;
    return(
        <Container>
            <p>
                Error numero {codigo}. Descripción: {texto}.
            </p>
        </Container>
    )
}

export default Error;