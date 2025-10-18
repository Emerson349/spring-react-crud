import React, { useState } from "react";
import "./navbar.css";
import { Search, UserPlus, Users, List } from "lucide-react";
import Cadastro from "../cadastro/cadastro"; 
import Busca from "../busca/busca"
import Listar from "../listar/listar";

export default function Navbar() {
    const [active, setActive] = useState("cadastrar"); 

    const renderComponent = () => {
        switch (active) {
            case "cadastrar":
                return <Cadastro />;
            case "buscar":
                return <Busca />;
            case "listar":
                return <Listar />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className="navbar-container">
                <ul className="nav-list">
                    <button
                        className={`nav-button ${active === "cadastrar" ? "active" : ""}`}
                        onClick={() => setActive("cadastrar")}
                    >
                        <UserPlus size={16}/> Cadastrar
                    </button>

                    <button
                        className={`nav-button ${active === "buscar" ? "active" : ""}`}
                        onClick={() => setActive("buscar")}
                    >
                        <Search size={16}/> Buscar
                    </button>

                    <button
                        className={`nav-button ${active === "listar" ? "active" : ""}`}
                        onClick={() => setActive("listar")}
                    >
                        <List size={16}/> Listar
                    </button>
                </ul>
            </div>

            <div className="content-area">
                {renderComponent()}
            </div>
        </>
    );
}