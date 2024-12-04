import React, { useState, useEffect } from "react";

const ModalEditarNota = ({ nota, onSave, onClose }) => {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [prioridade, setPrioridade] = useState("verde");

  // Efeito para carregar os dados da nota no modal
  useEffect(() => {
    if (nota) {
      setTitulo(nota.titulo);
      setConteudo(nota.conteudo);
      setPrioridade(nota.prioridade);
    }
  }, [nota]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedNota = { ...nota, titulo, conteudo, prioridade };
    onSave(updatedNota); // Passa os dados atualizados de volta
    onClose(); // Fecha o modal
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Editar Nota</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Título da nota"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <textarea
            placeholder="Digite sua anotação aqui..."
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
          />
          <select
            value={prioridade}
            onChange={(e) => setPrioridade(e.target.value)}
          >
            <option value="verde">Prioridade Baixa</option>
            <option value="amarelo">Prioridade Média</option>
            <option value="vermelho">Prioridade Alta</option>
          </select>
          <div className="modal-buttons">
            <button type="submit">Salvar</button>
            <button type="button" onClick={onClose}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditarNota;
