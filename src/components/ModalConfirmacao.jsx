import React from "react";

const ModalConfirmacao = ({ onConfirm, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Tem certeza que deseja excluir esta anotação?</h3>
        <div className="modal-actions">
          <button className="cancelar" onClick={onCancel}>
            Cancelar
          </button>
          <button onClick={onConfirm}>Confirmar</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmacao;
