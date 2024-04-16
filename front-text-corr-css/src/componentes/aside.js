import React from "react";
import { Link } from "react-router-dom";

function Aside() {
  return (
    <div className="aside">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/servicos">Serviços</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </div>
  );
} 

export default Aside;