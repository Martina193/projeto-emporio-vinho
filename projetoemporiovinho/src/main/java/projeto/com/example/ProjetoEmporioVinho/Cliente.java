package projeto.com.example.ProjetoEmporioVinho;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Cliente {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long Id_cliente;
	private String Nome;
	private String Telefone;
	private String Endereco;
	private String Cpf_cnpj;
	public long getId_cliente() {
		return Id_cliente;
	}
	public void setId_cliente(long id_cliente) {
		Id_cliente = id_cliente;
	}
	public String getNome() {
		return Nome;
	}
	public void setNome(String nome) {
		Nome = nome;
	}
	public String getTelefone() {
		return Telefone;
	}
	public void setTelefone(String telefone) {
		Telefone = telefone;
	}
	public String getEndereco() {
		return Endereco;
	}
	public void setEndereco(String endereco) {
		Endereco = endereco;
	}
	
	public String getCpf_cnpj() {
		return Cpf_cnpj;
	}
	public void setCpf_cnpj(String cpf_cnpj) {
		Cpf_cnpj = cpf_cnpj;
	}
	@Override
	public String toString() {
		return "Cliente [Id_cliente=" + Id_cliente + ", Nome=" + Nome + ", Telefone=" + Telefone + ", Endereco="
				+ Endereco + ", Cpf_cnpj=" + Cpf_cnpj + "]";
	}
	
	
	
	
}
