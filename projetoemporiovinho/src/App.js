import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import BarraNavegacao from "./Componentes/BarraNavegacao";
import Cliente from "./Componentes/Cliente";
import Footer from "./Componentes/Footer";
import Home from "./Componentes/Home";
import Produto from "./Componentes/Produto";
import CreateUpdateCliente from "./Componentes/CreateUpdateCliente";
import CreateUpdateProduto from "./Componentes/CreateUpdateProduto";

function App() {
  return (
    <div className="App">
      <Router>
        <BarraNavegacao></BarraNavegacao>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/cliente" component={Cliente}></Route>
          <Route exact path = "/produto" component = {Produto}></Route>
          <Route path = "/cliente/:id" component = {CreateUpdateCliente}></Route>
          <Route path = "/produto/:id" component = {CreateUpdateProduto}></Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
