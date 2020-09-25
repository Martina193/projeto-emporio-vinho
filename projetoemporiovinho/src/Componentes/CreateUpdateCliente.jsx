import React, { Component } from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import ClienteServices from "../Servicos/ClienteServices";

class CreateUpdateCliente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_cliente: this.props.match.params.id,
      nome: "",
      telefone: "",
      endereco: "",
      cpf_cnpj: "",
    };

    this.changeNomeHandler = this.changeNomeHandler.bind(this);
    this.changeTelefoneHandler = this.changeTelefoneHandler.bind(this);
    this.changeEnderecoHandler = this.changeEnderecoHandler.bind(this);
    this.changeCpf_cnpjHandler = this.changeCpf_cnpjHandler.bind(this);

    this.salvarCliente = this.salvarCliente.bind(this);
  }

  componentDidMount() {
    if (this.state.id_cliente === "_add") {
      return false;
    } else {
      return ClienteServices.getClienteById(this.state.id_cliente).then(
        (res) => {
          let cliente = res.data;
          this.setState({
            nome: cliente.nome,
            telefone: cliente.telefone,
            endereco: cliente.endereco,
            cpf_cnpj: cliente.cpf_cnpj,
          });
        }
      );
    }
  }

  salvarCliente() {
    let cliente = {
      nome: this.state.nome,
      telefone: this.state.telefone,
      endereco: this.state.endereco,
      cpf_cnpj: this.state.cpf_cnpj,
    };

    if (this.state.id_cliente === "_add") {
      ClienteServices.createCliente(cliente).then((res) => {
        alert(res.data);
      });
    } else {
      cliente.id_cliente = this.state.id_cliente;
      ClienteServices.editCliente(cliente).then((res) => {
        console.log(res.data);
      });
    }

    this.props.history.push("/cliente");
  }

  changeNomeHandler(event){
      this.setState({nome: event.target.value});
  }

  changeTelefoneHandler(event){
      this.setState({telefone: event.target.value});
  }

  changeEnderecoHandler(event){
      this.setState({endereco: event.target.value});
  }

  changeCpf_cnpjHandler(event){
      this.setState({cpf_cnpj: event.target.value});
  }

  cancelar(){
      this.props.history.push("/cliente");
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1>Cadastro de clientes</h1>
        </Row>

        <Form>
          <Form.Group controlId="FormNome">
            <Form.Control
              type="text"
              placeholder="Nome"
              value={this.state.nome}
              onChange={this.changeNomeHandler}
            ></Form.Control>
            <Form.Text className="text-mutet">Digite seu nome</Form.Text>
          </Form.Group>
         
          <Form.Group controlId="FormTelefone">
            <Form.Control
              type="text"
              placeholder="Telefone"
              value={this.state.telefone}
              onChange={this.changeTelefoneHandler}
            ></Form.Control>
            <Form.Text className="text-mutet">Digite seu Telefone</Form.Text>
          </Form.Group>
          <Form.Group controlId="FormEndereco">
          
            <Form.Control
              type="text"
              placeholder="Endereco"
              value={this.state.endereco}
              onChange={this.changeEnderecoHandler}
            ></Form.Control>
            <Form.Text className="text-mutet">Digite seu endereço</Form.Text>
          </Form.Group>
          <Form.Group controlId="FormCpf_cnpj">
            <Form.Control
              type="text"
              placeholder="CPF ou CNPJ"
              value={this.state.cpf_cnpj}
              onChange={this.changeCpf_cnpjHandler}
            ></Form.Control>
            <Form.Text className="text-mutet">Digite seu CPF ou CNPJ</Form.Text>
          </Form.Group>
          <Row className="float-right">
            <Button
              variant="success"
              style={{ margin: "10px 0px 10px 0px" }}
              className="btnSubmit"
              onClick={this.salvarCliente}
            >
              Inserir
            </Button>
            <Button
              variant="warning"
              style={{ margin: "10px" }}
              onClick={this.cancelar.bind(this)}
            >
              Cancelar
            </Button>
          </Row>
        </Form>
      </Container>
    );
  }
}

export default CreateUpdateCliente;
