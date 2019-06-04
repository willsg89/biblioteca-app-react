import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class Adicionar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {
        nome: '',
        ano: 0,
        dono: '',
        descricao: '',
        tipo: '',
      },
    };
  }

  componentDidMount() {
    this.loadBooks();
  }

  getId() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    return id;
  }

  loadBooks() {
    const id = this.getId();
    if (id) {
      axios.get(`http://localhost:3001/books/${id}`)
        .then((res) => {
          const book = res.data;
          this.setState({ book });
        }).catch((e) => {
          console.log(e);
        });
    }
  }

  handleChange(newPropJson) {
    const { book } = this.state;
    const bookMerged = { ...book, ...newPropJson };
    this.setState({ book: bookMerged });
  }

  render() {
    const { book } = this.state;
    // const isEdit = this.getId();
    // {this.props.match.path}
    return (
      <div className="container mt-5">
        <h3 className="text-center">Cadastrar item</h3>
        <Form className="mt-5">
          <Form.Group controlId="formName">
            <Form.Label>Nome:</Form.Label>
            <Form.Control
              // disabled={isEdit ? 'disabled' : null}
              value={book.nome}
              onChange={event => this.handleChange({ nome: event.target.value })}
              size="sm"
              type="text"
              placeholder="Informe o nome:"
            />
          </Form.Group>

          <Form.Group controlId="formYear">
            <Form.Label>Ano</Form.Label>
            <Form.Control
              value={book.ano}
              onChange={event => this.handleChange({ ano: event.target.value })}
              size="sm"
              type="number"
              placeholder="Informe o ano"
            />
          </Form.Group>

          <Form.Group controlId="formOwner">
            <Form.Label>Dono</Form.Label>
            <Form.Control
              value={book.dono}
              onChange={event => this.handleChange({ dono: event.target.value })}
              size="sm"
              type="text"
              placeholder="Informe o dono"
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              value={book.descricao}
              onChange={event => this.handleChange({ descricao: event.target.value })}
              size="sm"
              as="textarea"
              rows="3"
              placeholder="Informe a descrição"
            />
          </Form.Group>

          <Form.Group controlId="formType">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              value={book.tipo}
              onChange={event => this.handleChange({ tipo: event.target.value })}
              size="sm"
              as="select"
              placeholder="Informe o tipo"
            >
              <option value="livro">Livro</option>
              <option value="dvd">DVD</option>
              <option value="revista">Revista</option>
              <option value="periodico">Periódico</option>
              <option value="outros">Outros</option>
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
