import React, { useState, useEffect } from "react";

const ModalAdicionarAnotacao = ({ onAdd, onClose, nota, editando, onEdit }) => {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [prioridade, setPrioridade] = useState("verde");

  useEffect(() => {
    if (editando && nota) {
      setTitulo(nota.titulo);
      setConteudo(nota.conteudo);
      setPrioridade(nota.prioridade);
    }
  }, [editando, nota]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !conteudo) {
      alert("Por favor, adicione um título e conteúdo para a anotação.");
      return;
    }

    const novaAnotacao = {
      id: editando ? nota.id : Date.now(),
      titulo,
      conteudo,
      prioridade,
      dataCriacao: editando ? nota.dataCriacao : new Date().toISOString(),
    };

    if (editando) {
      onEdit(novaAnotacao); // Chama a função de editar
    } else {
      onAdd(novaAnotacao); // Adiciona uma nova anotação
    }

    setTitulo("");
    setConteudo("");
    setPrioridade("verde");
    onClose();
  };

  const handleClickOverlay = (e) => {
    // Impede o fechamento do modal se o clique for dentro do modal
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={handleClickOverlay}>
        <div className="modal-content">
          <h2>{editando ? "Editar Tarefa" : "Adicionar Tarefa"}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Título da anotação"
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
              <button type="submit">{editando ? "Salvar" : "Adicionar"}</button>
              <button type="button" onClick={onClose}>Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAdicionarAnotacao;
