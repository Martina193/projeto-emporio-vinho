package projeto.com.example.ProjetoEmporioVinho;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/produto")
@CrossOrigin(origins = "*")
public class ProdutoController {
	
	@Autowired
	private ProdutoRepositorio repositorio;
	
	@PostMapping(path = "/add")
	public @ResponseBody String novoProduto(@RequestParam String nome, @RequestParam String tipo,
			@RequestParam int quantidade) {
		Produto produto = new Produto();
		produto.setNome(nome);
		produto.setTipo(tipo);
		produto.setQuantidade(quantidade);
		repositorio.save(produto);
		
		return "Produto cadastrado com sucesso!";
	}
	
	@PostMapping(path = "addproduto")
	public @ResponseBody String novoProduto2(@RequestBody Produto newProduto) {
		repositorio.save(newProduto);
		return "Produto inserido com sucesso!"; 
	}
	
	@GetMapping(path = "/all")
	public @ResponseBody Iterable<Produto> retornaTodos(){
		return repositorio.findAll();
	}
	
	@GetMapping(path = "/locate_produto/{id}")
	public @ResponseBody Optional <Produto> retornaProduto(@PathVariable(required = true, name = "id") Long id){
		return repositorio.findById(id);
	}
	
	@DeleteMapping(path = "/delete_produto/{id}")
	public @ResponseBody String deleteProduto (@PathVariable(required = true, name = "id") Long id) {
		Optional<Produto> produto = repositorio.findById(id);
		if(produto.isPresent()) {
			repositorio.delete(produto.get());
			return "Produto deletado com sucesso!";
		}
		return "Produto não encontrado!";
	}
	
	@PutMapping(path = "/update_produto/{id}")
	public @ResponseBody Optional<Produto> updateProduto(@PathVariable(required = true, name = "id") Long id, @RequestBody Produto produto){
		Optional<Produto> p = repositorio.findById(id);
		if(p.isPresent()) {
			p.get().setNome(produto.getNome());
			p.get().setTipo(produto.getTipo());
			p.get().setQuantidade(produto.getQuantidade());
			repositorio.save(p.get());
			return p;
		}
		return null;
	}
	
	@PutMapping(path = "/produto/{id}")
	public @ResponseBody ResponseEntity<Produto> alteraProduto(@PathVariable(required = true, name = "id") Long id, 
			@RequestBody Produto produto){
		Optional<Produto> p = repositorio.findById(id);
		if(p.isPresent()) {
			p.get().setNome(produto.getNome());
			p.get().setTipo(produto.getTipo());
			p.get().setQuantidade(produto.getQuantidade());
			return ResponseEntity.ok(repositorio.save(p.get()));
		}
		return ResponseEntity.status(404).build();
	}
}
