// Nota.jsx
import React from "react";

const Nota = ({ nota, onDelete, onEdit, onToggleCompleted }) => {
  return (
    <div
      className={`nota ${nota.completed ? "completed" : ""}`}
      style={{ borderBottom: `5px solid ${getCorPrioridade(nota.prioridade)}` }}
    >
      {/* Checkbox à esquerda */}
      <input
        type="checkbox"
        checked={nota.completed}
        onChange={() => onToggleCompleted(nota.id)}
      />

      {/* Texto da nota e data */}
      <div className="nota-text">
        <h3>{nota.titulo}</h3> {/* Título da nota */}
        <p>{nota.conteudo}</p> {/* Conteúdo da nota */}
        <span className="data-criacao">Criado em: {nota.dataCriacao}</span>
      </div>

      {/* Botões de editar e excluir à direita */}
      <div className="actions">
        <button className="edit-btn" onClick={() => onEdit(nota)}>
          ✏️
        </button>
        <button className="delete-btn" onClick={() => onDelete(nota.id)}>
          🗑️
        </button>
      </div>
    </div>
  );
};

const getCorPrioridade = (prioridade) => {
  switch (prioridade) {
    case "verde":
      return "#4caf50"; // Prioridade Baixa
    case "amarelo":
      return "#ffeb3b"; // Prioridade Média
    case "vermelho":
      return "#f44336"; // Prioridade Alta
    default:
      return "#ddd"; // Cor padrão
  }
};

export default Nota;
