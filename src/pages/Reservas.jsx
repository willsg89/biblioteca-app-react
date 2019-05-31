import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default class Reservas extends React.Component {
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
            <th>Data de expiração</th>
            <th>Item</th>
            <th>Reservadp para</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr key="1">
            <td>asdsa</td>
            <td>{teste}</td>
            <td>sds</td>
            <td>
              <Button variant="link">Remover</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
