import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Adicionar from './pages/Adicionar';
import Emprestimos from './pages/Emprestimos';
import Reservas from './pages/Reservas';
import { LinkContainer } from "react-router-bootstrap";

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div className="flex-shrink-0">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home">SDLC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <LinkContainer to="/">
                  <Nav.Link href="/">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/adicionar">
                  <Nav.Link >Incluir Item</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/reservas">
                  <Nav.Link >Ver Reservas</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/emprestimos">
                  <Nav.Link >Ver Empréstimos</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav className="mr-rigth">
                <Nav.Link href="/link">Sair</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
    
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/adicionar" component={Adicionar} />
              <Route path="/reservas" component={Reservas} />
              <Route path="/emprestimos" component={Emprestimos} />
            </Switch>
          </Container>
        </div>
    
        <footer className="footer mt-auto py-3">
          <Container>
          <Row>
            <span className="text-muted">Desenvolvido por SoftDesign © 2013.</span>
          </Row>
          <Row>
            <span className="text-muted">Glyphicons Free licenciado sob CC BY 3.0.</span>
          </Row>
          </Container>
        </footer>
    
      </React.Fragment>
    );
  }

}

export default App;
