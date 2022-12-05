import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

/*<header className="header">
            <div className="texto">
                {user && (
                    <p>
                        Esta logueado
                    </p>
                )}
                {!user && (
                    <p>
                        No esta logueado
                    </p>
                )}
            </div>
        </header>*/
const Header = props => {
  const { user } = props;
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="navbar">Art Institute App</Navbar.Brand>
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
  user: 'Juan carlos'
};

export default Header;