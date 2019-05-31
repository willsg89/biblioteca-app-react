import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

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
                <Button variant="link">Detalhes</Button>
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
            <Form.Control type="text" placeholder="Entre com algum valor" />
            <Form.Text className="text-muted">
                Voce pode informar nome, autor e tags
            </Form.Text>
          </Form.Group>
          <Button variant="primary" onClick={this.loadBooks}>Pesquisar</Button>

        </Form>

        { haveResults ? this.renderTable() : <div className="row mt-5">Sem registros.</div> }
      </div>
    );
  }
}
