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
@RequestMapping("/cliente")
@CrossOrigin(origins = "*")
public class ClienteController {
	
	@Autowired
	private ClienteRepositorio repositorio;
	
	@PostMapping(path="/add")
	public @ResponseBody String novoCliente(@RequestParam String nome, @RequestParam String telefone, @RequestParam String endereco,
			@RequestParam String cpf_cnpj) {
		Cliente cliente = new Cliente();
		cliente.setNome(nome);
		cliente.setTelefone(telefone);
		cliente.setEndereco(endereco);
		cliente.setCpf_cnpj(cpf_cnpj);
		repositorio.save(cliente);
		
		return "Cliente cadastrado com sucesso!";
	}
	
	@PostMapping (path = "/addcliente")
	public @ResponseBody String novoCliente2(@RequestBody Cliente newCliente) {
		repositorio.save(newCliente);
		return "Cliente inserido com sucesso!";
	}
	
	@GetMapping(path = "/all")
	public @ResponseBody Iterable<Cliente> retornaTodos(){
		return repositorio.findAll();
	}
	
	@GetMapping(path = "/locate_cliente/{id}")
	public @ResponseBody Optional <Cliente> retornaCliente (@PathVariable (required = true, name = "id") Long id){
		return repositorio.findById(id);
	}
	
	@DeleteMapping(path = "/delete_cliente/{id}")
	public @ResponseBody String deleteCliente (@PathVariable(required = true, name = "id") Long id) {
		Optional<Cliente> cliente = repositorio.findById(id);
		if(cliente.isPresent()) {
			repositorio.delete(cliente.get());
			return "Cliente deletado com sucesso!";
		}
		
		return "Cliente não enconstrado";
	}
	
	@PutMapping(path = "/update_cliente/{id}")
	public @ResponseBody Optional<Cliente> updateCliente(@PathVariable(required = true, name = "id") Long id, @RequestBody Cliente cliente){
		Optional<Cliente> c = repositorio.findById(id);
		if(c.isPresent()) {
			c.get().setNome(cliente.getNome());
			c.get().setTelefone(cliente.getTelefone());
			c.get().setEndereco(cliente.getEndereco());
			c.get().setCpf_cnpj(cliente.getCpf_cnpj());
			repositorio.save(c.get());
			return c;
		}
		return null;
	}
	
	@PutMapping (path = "/cliente/{id}")
	public @ResponseBody ResponseEntity<Cliente> alteraCliente(@PathVariable(required = true, name = "id") Long id,
			@RequestBody Cliente cliente){
		Optional<Cliente> c = repositorio.findById(id);
		if(c.isPresent()) {
			c.get().setNome(cliente.getNome());
			c.get().setTelefone(cliente.getTelefone());
			c.get().setEndereco(cliente.getEndereco());
			c.get().setCpf_cnpj(cliente.getCpf_cnpj());
			return ResponseEntity.ok(repositorio.save(c.get()));
		}
		return ResponseEntity.status(404).build();
	}
}
