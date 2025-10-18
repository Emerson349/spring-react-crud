import React, { useState } from "react";
import "./busca.css";

export default function Busca() {
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState(null);
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://crud-backend-3xwm.onrender.com/usuario?email=${email}`
      );

      if (response.ok) {
        const data = await response.json();
        setUsuario(data);
        setMensagem("");
      } else if (response.status === 404) {
        setUsuario(null);
        setMensagem("Usuário não encontrado");
      } else {
        setUsuario(null);
        setMensagem("Erro ao buscar usuário");
      }
    } catch (error) {
      console.error("Erro:", error);
      setMensagem("Falha na comunicação com o servidor!");
    }
  };

  return (
    <div className="busca-wrapper">
      <div className="busca-container">
        <h2>Buscar Usuário</h2>
        <p>Digite o e-mail do usuário para buscar suas informações</p>
        <form onSubmit={handleSubmit} className="busca-form">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="usuario@example.com"
          />
          <button type="submit">Buscar</button>
        </form>
        {mensagem && <p className="mensagem">{mensagem}</p>}
      </div>

      {usuario && (
        <div className="resultado-container">
          <h3>Dados do Usuário</h3>
          <p><strong>Id:</strong> {usuario.id}</p>
          <p><strong>Nome:</strong> {usuario.nome}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
          <p><strong>Número:</strong> {usuario.numero}</p>
        </div>
      )}
    </div>
  );
}
