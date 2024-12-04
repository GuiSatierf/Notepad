import React, { useState } from "react";
import ModalAdicionarAnotacao from "./components/ModalAdicionarAnotacao"; // Modal para adicionar
import ModalEditarNota from "./components/ModalEditarNota"; // Modal para editar
import ModalConfirmacao from "./components/ModalConfirmacao"; // Modal para confirmação de exclusão
import Nota from "./components/Nota"; // Componente para exibir a nota

const App = () => {
  const [anotacoes, setAnotacoes] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [notaParaEditar, setNotaParaEditar] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [modalConfirmacaoAberto, setModalConfirmacaoAberto] = useState(false);
  const [notaParaExcluir, setNotaParaExcluir] = useState(null);

  // Adicionar nova anotação
  const adicionarAnotacao = (novaAnotacao) => {
    setAnotacoes([...anotacoes, novaAnotacao]);
    setModalAberto(false); // Fecha o modal após adicionar
  };

  // Salvar anotação editada
  const salvarAnotacao = (notaAtualizada) => {
    setAnotacoes(
      anotacoes.map((nota) =>
        nota.id === notaAtualizada.id ? notaAtualizada : nota
      )
    );
    setModalAberto(false); // Fecha o modal após salvar
  };

  // Abrir o modal de adicionar
  const abrirModalAdicionar = () => {
    setModoEdicao(false);
    setNotaParaEditar(null);
    setModalAberto(true);
  };

  // Abrir o modal de edição
  const abrirModalEditar = (nota) => {
    setModoEdicao(true);
    setNotaParaEditar(nota);
    setModalAberto(true);
  };

  // Fechar qualquer modal
  const fecharModal = () => {
    setModalAberto(false);
  };

  // Confirmar exclusão
  const abrirModalConfirmacao = (nota) => {
    setNotaParaExcluir(nota);
    setModalConfirmacaoAberto(true);
  };

  // Excluir nota
  const excluirNota = () => {
    setAnotacoes(anotacoes.filter((nota) => nota.id !== notaParaExcluir.id));
    setModalConfirmacaoAberto(false);
  };

  // Fechar o modal de confirmação
  const fecharModalConfirmacao = () => {
    setModalConfirmacaoAberto(false);
  };

  return (
    <div className="app">
      <h1>Sistema de Anotações</h1>
      <button className="add-task-btn" onClick={abrirModalAdicionar}>
        Adicionar Anotação
      </button>

      {/* Modal para adicionar anotação */}
      {modalAberto && !modoEdicao && (
        <ModalAdicionarAnotacao onAdd={adicionarAnotacao} onClose={fecharModal} />
      )}

      {/* Modal para editar anotação */}
      {modalAberto && modoEdicao && (
        <ModalEditarNota
          nota={notaParaEditar}
          onSave={salvarAnotacao}
          onClose={fecharModal}
        />
      )}

      {/* Modal de confirmação de exclusão */}
      {modalConfirmacaoAberto && (
        <ModalConfirmacao
          onConfirm={excluirNota}
          onCancel={fecharModalConfirmacao}
        />
      )}

      <div className="lista-anotacoes">
        {anotacoes.map((nota) => (
          <Nota
            key={nota.id}
            nota={nota}
            onEdit={abrirModalEditar}
            onDelete={() => abrirModalConfirmacao(nota)}
            onToggleCompleted={(id) =>
              setAnotacoes(
                anotacoes.map((nota) =>
                  nota.id === id ? { ...nota, completed: !nota.completed } : nota
                )
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default App;
