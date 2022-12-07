import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Header = props => {
  const { user } = props;
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="navbar">Art Institute App</Navbar.Brand>
        <Link className='navlink' to="/" >Home</Link>
        <Link className='navlink' to="/grid" >Grid</Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: {user}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

Header.defaultProps = {
  user: 'Juan Carlos'
};

export default Header;