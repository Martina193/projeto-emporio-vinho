import React, { Component } from "react";
import { Container, Row, Table, Button, Col } from "react-bootstrap";
import ProdutoServices from "../Servicos/ProdutoServices";

class Produto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produto: [],
    };

    this.voltar = this.voltar.bind(this);
    this.excluir = this.excluir.bind(this);
    this.editar = this.editar.bind(this);
    this.novoProduto = this.novoProduto.bind(this);
  }

  componentDidMount() {
    this.getProduto();
  }

  getProduto() {
    ProdutoServices.getListaProduto().then((resposta) =>
      this.setState({ produto: resposta.data })
    );
  }

  voltar() {
    this.props.history.push("/");
  }

  excluir(id) {
    ProdutoServices.deleteProduto(id).then((res) => {
      alert(res.data);
      this.getProduto();
    });
  }

  editar(id) {
    this.props.history.push("/produto/" + id);
  }

  novoProduto() {
    this.props.history.push("/produto/_add");
  }

  render() {
    return (
      <Container>
        <Row>
          <h1>Lista de Produtos</h1>
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
                <th>Tipo</th>
                <th>Quantidade</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.produto.map((produto) => (
                <tr key={produto.id_produto}>
                  <td>{produto.nome}</td>
                  <td>{produto.tipo}</td>
                  <td>{produto.quantidade}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => this.editar(produto.id_produto)}
                    >
                      Editar
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => this.excluir(produto.id_produto)}
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
              onClick={this.novoProduto}
            >
              Novo produto
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Produto;
