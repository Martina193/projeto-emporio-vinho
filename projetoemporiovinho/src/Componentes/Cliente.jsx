import React, { Component } from "react";
import { Container, Row, Table, Button, Col } from "react-bootstrap";
import ClienteServices from "../Servicos/ClienteServices";

class Cliente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cliente: [],
    };
    this.voltar = this.voltar.bind(this);
    this.excluir = this.excluir.bind(this);
    this.editar = this.editar.bind(this);
    this.novoCliente = this.novoCliente.bind(this);
  }

  componentDidMount() {
    this.getCliente();
  }

  getCliente() {
      ClienteServices.getListaCliente().then((resposta) =>
      this.setState({cliente:resposta.data})
      );
  }

  voltar() {
    this.props.history.push("/");
  }

  excluir(id) {
      ClienteServices.deleteCliente(id).then((res)=>{
          alert(res.data);
          this.getCliente();
      })
  }

  editar(id) {
    this.props.history.push("/cliente/" + id);
  }

  novoCliente() {
    this.props.history.push("/cliente/_add");
  }
  render() {
    return (
      <Container>
        <Row>
          <h1>Lista de Clientes</h1>
        </Row>
        <Row>
          <Button className="float-left" variant="link" onClick={this.voltar}>
            Voltar
          </Button>
        </Row>
        <Row>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Endereço</th>
                <th>CPF/CNPJ</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.cliente.map((cliente) => (
                <tr key={cliente.id_cliente}>
                  <td>{cliente.nome}</td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente.endereco}</td>
                  <td>{cliente.cpf_cnpj}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => this.editar(cliente.id_cliente)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => this.excluir(cliente.id_cliente)}
                    >
                      Excluir
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
        <Row>
          <Col>
            <Button className="float-left" variant="link" onClick={this.voltar}>
              Voltar
            </Button>
          </Col>
          <Col>
            <Button
              className="float-right"
              variant="secondary"
              onClick={this.novoCliente}
            >
              Novo cliente
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cliente;
