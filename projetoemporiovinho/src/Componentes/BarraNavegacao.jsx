import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

class BarraNavegacao extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          

          <Nav className="mr-auto">
            <Nav.Link href="/">Empório do vinho</Nav.Link>
            <Nav.Link href="/cliente">Cliente</Nav.Link>
            <Nav.Link href="/produto">Produto</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default BarraNavegacao;
