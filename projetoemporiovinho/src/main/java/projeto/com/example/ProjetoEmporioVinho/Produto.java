package projeto.com.example.ProjetoEmporioVinho;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Produto {
	
	@Id
	@GeneratedValue(strategy  = GenerationType.AUTO)
	
	private long Id_produto;
	private String Nome;
	private String Tipo;
	private int Quantidade;
	public long getId_produto() {
		return Id_produto;
	}
	public void setId_produto(long id_produto) {
		Id_produto = id_produto;
	}
	public String getNome() {
		return Nome;
	}
	public void setNome(String nome) {
		Nome = nome;
	}
	public String getTipo() {
		return Tipo;
	}
	public void setTipo(String tipo) {
		Tipo = tipo;
	}
	public int getQuantidade() {
		return Quantidade;
	}
	public void setQuantidade(int quantidade) {
		Quantidade = quantidade;
	}
	@Override
	public String toString() {
		return "Produto [Id_produto=" + Id_produto + ", Nome=" + Nome + ", Tipo=" + Tipo + ", Quantidade=" + Quantidade
				+ "]";
	}
	
	

}
