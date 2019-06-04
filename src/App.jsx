import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './pages/Home';
import Adicionar from './pages/Adicionar';
import Emprestimos from './pages/Emprestimos';
import Reservas from './pages/Reservas';

function App() {
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">SDLC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link href="/">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/adicionar">
              <Nav.Link>Incluir Item</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/reservas">
              <Nav.Link>Ver Reservas</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/emprestimos">
              <Nav.Link>Ver Empréstimos</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="mr-rigth">
            <Nav.Link href="/link">Sair</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container>
        <Row>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/adicionar" component={Adicionar} />
            <Route path="/reservas" component={Reservas} />
            <Route path="/emprestimos" component={Emprestimos} />
            <Route path="/ver/:id" component={Adicionar} />
          </Switch>
        </Row>
      </Container>

      <footer className="footer mt-auto bg-light py-3">
        <Container>
          <Row>
            <span className="text-muted">Desenvolvido por SoftDesign © 2019.</span>
          </Row>
        </Container>
      </footer>

    </React.Fragment>
  );
}

export default App;
