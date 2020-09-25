import axios from "axios";

const urlbase = "http://localhost:8080/produto";
const url_produto = "http://localhost:8080/produto/all";

class ProdutoServices{
    getListaProduto(){
        return axios.get(urlbase+"/all");
    }

    createProduto(produto){
        return axios.post(urlbase+"/addproduto", produto);
    }

    getProdutoById(id){
        return axios.get(urlbase+"/locate_produto/"+id);
    }

    editProduto(produto){
        return axios.put(urlbase+"/update_produto/"+produto.id_produto, produto);
    }

    deleteProduto(id){
        return axios.delete(urlbase+"/delete_produto/"+id);
    }
}

export default new ProdutoServices();