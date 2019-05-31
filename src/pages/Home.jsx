import React from 'react';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

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
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ano</th>
            <th>Dono</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          { books.map(book => (
            <tr key={book.id}>
              <td>{book.nome}</td>
              <td>{book.ano}</td>
              <td>{book.dono}</td>
              <td>{book.descricao}</td>
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
      <div>
        Buscar itens no acervo

        <InputGroup>
          <label htmlFor="titulo">Título ou Autor</label>
          <FormControl
            id="titulo"
            placeholder="Título ou Autor"
            aria-label="Título ou Autor"
          />
        </InputGroup>

        <label htmlFor="tags">Palavra-chave (tags)</label>
        <InputGroup>
          <FormControl
            id="tags"
            placeholder="Palavra-chave (tags)"
            aria-label="Palavra-chave (tags)"
          />
        </InputGroup>

        <Button variant="primary" onClick={this.loadBooks}>Primary</Button>

        { haveResults ? this.renderTable() : 'Sem registros.' }

      </div>
    );
  }
}
