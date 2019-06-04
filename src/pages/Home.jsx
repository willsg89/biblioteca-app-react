import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
    this.loadBooks = this.loadBooks.bind(this);
  }

  loadBooks() {
    axios.get('http://localhost:3001/books')
      .then((res) => {
        const books = res.data;
        this.setState({ books });
      }).catch((e) => {
        console.log(e);
      });
  }

  renderTable() {
    const { books } = this.state;
    return (
      <Table striped bordered hover size="sm mt-5">
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Título</th>
            <th>Ano</th>
            <th>ISBN 13</th>
            <th>Dono</th>
            <th>Dísponivel</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          { books.map(book => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.nome}</td>
              <td>{book.ano}</td>
              <td>{book.isbn13}</td>
              <td>{book.dono}</td>
              <td>{book.disponovel}</td>
              <td>
                <LinkContainer to={`/ver/${book.id}`}>
                  <Button variant="link">Detalhes</Button>
                </LinkContainer>
                <Button variant="link">Emprestar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  render() {
    const { books } = this.state;
    const haveResults = books.length > 0;

    return (
      <div className="col-12 mt-5">
        <h3 className="text-center">Buscar itens no acervo</h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <div>
              <Form.Control type="text" placeholder="Entre com algum valor" />
              <Form.Text className="text-muted">
                Voce pode informar nome, autor e tags
              </Form.Text>
            </div>
          </Form.Group>
          <div className="text-center">
            <Button variant="primary" className="col-8 col-sm-6 col-md-4 col-lg-3" onClick={this.loadBooks}>Pesquisar</Button>
          </div>

        </Form>

        { haveResults ? this.renderTable() : <div className="row mt-5">Sem registros.</div> }
      </div>
    );
  }
}
