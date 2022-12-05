import Tarjeta from '../Tarjeta/Tarjeta';
import { Container } from 'react-bootstrap';

const Grid = props => {
    const { obras } = props;
    return (
        <Container className="grid">
            {obras.map((obra) => {
                    return <Tarjeta key={obra.id} {...obra} />;
                })}
        </Container>
    );
}

export default Grid;