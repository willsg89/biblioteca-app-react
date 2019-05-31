import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default class Emprestimos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teste: '',
    };
  }

  render() {
    const { teste } = this.state;
    return (
      <Table striped bordered hover size="sm mt-5">
        <thead>
          <tr>
            <th>Item</th>
            <th>Data devolução</th>
            <th>Devolvido</th>
            <th>Emprestado para</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr key="1">
            <td>asdsa</td>
            <td>{teste}</td>
            <td>sdsd</td>
            <td>sds</td>
            <td>
              <Button variant="link">Devolver</Button>
              <Button variant="link">Renovar</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
