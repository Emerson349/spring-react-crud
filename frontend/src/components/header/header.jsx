import React from "react";
import "./header.css";
import { Users } from "lucide-react";
import Navbar from "../navbar/navbar";

export default function Header() {
    return (
        <header className="header-container">
            <div className="header-content">
                <div className="header-icon">
                    <Users size={40} />
                </div>
                <h1>Gerenciamento de Usuários</h1>
                <p>Sistema completo de cadastro e gerenciamento</p>
            </div>

            <Navbar />
        </header>
    );
}
