import React, { useState } from "react";
import "./cadastro.css";

export default function Cadastro() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    numero: "",
  });

  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://crud-backend-3xwm.onrender.com/usuario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMensagem("Usuário cadastrado com sucesso!");
        setFormData({ nome: "", email: "", numero: "" });
      } else {
        setMensagem("Erro ao cadastrar usuário!");
      }
    } catch (error) {
      console.error("Erro:", error);
      setMensagem("Falha na comunicação com o servidor!");
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastrar Novo Usuário</h2>
      <p>Preencha os dados abaixo para cadastrar um novo usuário no sistema</p>

      <form onSubmit={handleSubmit} className="cadastro-form">
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          placeholder="Digite o nome completo"
          value={formData.nome}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          placeholder="usuario@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="numero">Número</label>
        <input
          type="text"
          name="numero"
          placeholder="(00) 00000-0000"
          value={formData.numero}
          onChange={handleChange}
          required
        />
        <button type="submit">Cadastrar Usuário</button>
      </form>

      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
}
