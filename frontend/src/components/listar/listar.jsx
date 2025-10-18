import React, { useEffect, useState } from "react";
import axios from "axios";
import "./listar.css";

export default function Listar() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://crud-backend-3xwm.onrender.com/usuario/listar")
            .then((response) => {
                setUsuarios(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao buscar usuários:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="loading-container">
                <p className="loading">Carregando usuários...</p>
            </div>
        );
    }

    return (
        <div className="usuarios-container">
            <h2>Lista de Usuários</h2>

            <table className="usuarios-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Telefone</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.length > 0 ? (
                        usuarios.map((usuario, index) => (
                            <tr
                                key={usuario.id}
                                className={index % 2 === 0 ? "linha-par" : "linha-impar"}
                            >
                                <td>{usuario.id}</td>
                                <td>{usuario.nome}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.numero}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4" className="nenhum-usuario">
                                Nenhum usuário encontrado.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
