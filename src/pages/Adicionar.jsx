import React from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormComponent from '../components/FormComponent';

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
      <div className="container mt-5 d-flex flex-column">
        <h3 className="align-self-center">Cadastrar item</h3>
        <Form className="mt-5 col-12 col-md-8 col-lg-6 align-self-center">
          <FormComponent
            id="formName"
            label="Nome:"
            placeholder="Informe o nome"
            value={book.nome}
            onChange={event => this.handleChange({ nome: event.target.value })}
          />

          <FormComponent
            id="formYear"
            label="Ano:"
            placeholder="Informe o ano"
            value={book.ano}
            type="number"
            onChange={event => this.handleChange({ ano: event.target.value })}
          />

          <FormComponent
            id="formOwner"
            label="Dono:"
            placeholder="Informe o dono"
            value={book.dono}
            onChange={event => this.handleChange({ dono: event.target.value })}
          />

          <FormComponent
            id="formDescription"
            label="Descrição:"
            placeholder="Informe o descrição"
            value={book.descricao}
            as="textarea"
            onChange={event => this.handleChange({ descricao: event.target.value })}
            rows="3"
          />

          <FormComponent
            id="formType"
            label="Tipo:"
            placeholder="Informe o tipo"
            value={book.tipo}
            as="select"
            onChange={event => this.handleChange({ tipo: event.target.value })}
          >
            <option value="livro">Livro</option>
            <option value="dvd">DVD</option>
            <option value="revista">Revista</option>
            <option value="periodico">Periódico</option>
            <option value="outros">Outros</option>
          </FormComponent>

          <Button variant="primary" type="submit">
            Incluir
          </Button>
        </Form>
      </div>
    );
  }
}
