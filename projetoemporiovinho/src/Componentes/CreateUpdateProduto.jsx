import React, { Component } from "react";
import { Container, Form, Row, Button } from "react-bootstrap";
import ProdutoServices from "../Servicos/ProdutoServices";

class CreateUpdateProduto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_produto: this.props.match.params.id,
      nome: "",
      tipo: "",
      quantidade: "",
    };

    this.changeNomeHandler = this.changeNomeHandler.bind(this);
    this.changeTipoHandler = this.changeTipoHandler.bind(this);
    this.changeQuantidadeHandler = this.changeQuantidadeHandler.bind(this);

    this.salvarProduto = this.salvarProduto.bind(this);
  }

  componentDidMount() {
    if (this.state.id_produto === "_add") {
      return false;
    } else {
      return ProdutoServices.getProdutoById(this.state.id_produto).then(
        (res) => {
          let produto = res.data;
          this.setState({
            nome: produto.nome,
            tipo: produto.tipo,
            quantidade: produto.quantidade,
          });
        }
      );
    }
  }

  salvarProduto() {
    let produto = {
      nome: this.state.nome,
      tipo: this.state.tipo,
      quantidade: this.state.quantidade,
    };

    if (this.state.id_produto === "_add") {
      ProdutoServices.createProduto(produto).then((res) => {
        alert(res.data);
      });
    } else {
      produto.id_produto = this.state.id_produto;
      ProdutoServices.editProduto(produto).then((res) => {
        console.log(res.data);
      });
    }

    this.props.history.push("/produto");
  }

  changeNomeHandler(event) {
    this.setState({ nome: event.target.value });
  }

  changeTipoHandler(event) {
    this.setState({ tipo: event.target.value });
  }

  changeQuantidadeHandler(event) {
    this.setState({ quantidade: event.target.value });
  }

  cancelar() {
    this.props.history.push("/produto");
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h1>Cadastro de produtos</h1>
        </Row>

        <Form>
          <Form.Group controlId="FormNome">
            <Form.Control
              type="text"
              placeholder="Nome do produto"
              value={this.state.nome}
              onChange={this.changeNomeHandler}
            ></Form.Control>
            <Form.Text className="text-mutet">
              Digite o nome do produto
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="FormTipo">
            <Form.Control
              type="text"
              placeholder="Tipo"
              value={this.state.tipo}
              onChange={this.changeTipoHandler}
            ></Form.Control>
            <Form.Text className="text-mutet">
              Digite o tipo de produto
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="FormQuantidade">
            <Form.Control
              type="text"
              placeholder="Quantidade"
              value={this.state.quantidade}
              onChange={this.changeQuantidadeHandler}
            ></Form.Control>
            <Form.Text className="text-mutet">Digite a quantidade</Form.Text>
          </Form.Group>

          <Row className="float-right">
            <Button
              variant="success"
              style={{ margin: "10px 0px 10px 0px" }}
              className="btnSubmit"
              onClick={this.salvarProduto}
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

export default CreateUpdateProduto;
