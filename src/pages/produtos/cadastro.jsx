import { useState, useEffect } from "react";
import axios from "axios";
import { useProdutos } from "../../context/ProdutosContext";

// Formulário simples em JavaScript usando apenas <div>, <input>, useState/useEffect e axios
const CadastroProduto = () => {
  const [form, setForm] = useState({
    nome: "",
    tipo: "",
    precoVenda: "",
    descricao: "",
    categoriaId: ""
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const { recarregarProdutos } = useProdutos();

  useEffect(() => {
    if (form.precoVenda.includes(",")) {
      setForm((f) => ({ ...f, precoVenda: f.precoVenda.replace(",", ".") }));
    }
  }, [form.precoVenda]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = async () => {
    setMsg("");
    const payload = {
      nome: form.nome,
      tipo: form.tipo,
      precoVenda: Number(form.precoVenda),
      descricao: form.descricao,
      categoriaId: Number(form.categoriaId)
    };

    if (!payload.nome || !payload.descricao || !payload.tipo || !payload.precoVenda || !payload.categoriaId) {
      setMsg("Preencha todos os campos corretamente.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("/api/v1/produto", payload, {
        headers: { "Content-Type": "application/json" }
      });
      
      console.log('Produto cadastrado:', response.data);
      setMsg("Produto cadastrado com sucesso.");
      setForm({ nome: "", tipo: "", precoVenda: "", descricao: "", categoriaId: ""});
      recarregarProdutos(); // Atualiza a listagem
      
    } catch (err) {
      console.error('Erro ao cadastrar:', err.response || err);
      const texto = err?.response?.data?.message || err?.message || "Falha ao cadastrar.";
      setMsg(texto);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>Cadastro de Produto</div>

      {msg ? <div>{msg}</div> : null}

      <div>
        <input
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={onChange}
        />
      </div>

      <div>
        <input
          name="descricao"
          placeholder="Descrição"
          value={form.descricao}
          onChange={onChange}
        />
      </div>

      <div>
        <input
          name="tipo"
          placeholder="Tipo (ex.: FISICO/SERVICO/DIGITAL)"
          value={form.tipo}
          onChange={onChange}
        />
      </div>

      <div>
        <input
          name="precoVenda"
          placeholder="Preço (ex.: 199.90)"
          value={form.precoVenda}
          onChange={onChange}
        />
      </div>

      <div>
        <input
          name="categoriaId"
          placeholder="Categoria ID (ex.: 12)"
          value={form.categoriaId}
          onChange={onChange}
        />
      </div>

      <div>
        <input
          type="button"
          value={loading ? "Enviando..." : "Cadastrar"}
          onClick={submit}
          disabled={loading}
        />
      </div>
    </div>
  );
}

export default CadastroProduto;