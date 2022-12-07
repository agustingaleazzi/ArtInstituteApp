import Tarjeta from '../Tarjeta/Tarjeta';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Grid = () => {
    const obras = useSelector(state => state.obras);
    return (
        <Container fluid className="grid">
            <Row className="justify-content-md-center">
            {obras[0].map(obra => {
                return <Col><Tarjeta key={obra.id} {...obra} /></Col>;
            }
            )}
            </Row>
        </Container>
    );
}

export default Grid;