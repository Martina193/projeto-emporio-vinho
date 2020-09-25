import axios from "axios";

const urlbase = "http://localhost:8080/cliente";
const url_cliente = "http://localhost:8080/cliente/all";

class ClienteServices {
  getListaCliente() {
    return axios.get(urlbase + "/all");
  }

  createCliente(cliente) {
    return axios.post(urlbase + "/addcliente", cliente);
  }

  getClienteById(id) {
    return axios.get(urlbase + "/locate_cliente/" + id);
  }

  editCliente(cliente) {
    return axios.put(
      urlbase + "/update_cliente/" + cliente.id_cliente,
      cliente
    );
  }

  deleteCliente(id) {
    return axios.delete(urlbase + "/delete_cliente/" + id);
  }
}
export default new ClienteServices();
