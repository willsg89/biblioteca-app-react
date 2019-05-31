import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class Adicionar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
    };
    // this.loadBooks = this.loadBooks.bind(this);
  }

  // loadBooks() {
  //   axios.get('http://localhost:3001/books')
  //     .then((res) => {
  //       const books = res.data;
  //       this.setState({ books });
  //     }).catch((e) => {
  //       console.log(e);
  //     });
  // }

  render() {
    return (
      <div className="container mt-5">
        <h3 className="text-center">Cadastrar item</h3>
        <Form className="mt-5">
          <Form.Group controlId="formName">
            <Form.Label>Nome:</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Informe o nome:" />
          </Form.Group>

          <Form.Group controlId="formYear">
            <Form.Label>Ano</Form.Label>
            <Form.Control size="sm" type="number" placeholder="Informe o ano" />
          </Form.Group>

          <Form.Group controlId="formOwner">
            <Form.Label>Dono</Form.Label>
            <Form.Control size="sm" type="text" placeholder="Informe o dono" />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Descrição</Form.Label>
            <Form.Control size="sm" as="textarea" rows="3" placeholder="Informe a descrição" />
          </Form.Group>

          <Form.Group controlId="formType">
            <Form.Label>Tipo</Form.Label>
            <Form.Control size="sm" as="select" placeholder="Informe o tipo">
              <option value="2">Livro</option>
              <option value="2">DVD</option>
              <option value="12">Revista</option>
              <option value="12">Outros</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Incluir
          </Button>
        </Form>
      </div>
    );
  }
}
