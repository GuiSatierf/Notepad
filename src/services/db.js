import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./anotacoes.db");

// Criação da tabela
export const criarTabela = () => {
  db.run(`
    CREATE TABLE IF NOT EXISTS anotacoes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT,
      descricao TEXT,
      prioridade INTEGER
    )
  `);
};

// Adicionar uma anotação
export const adicionarAnotacao = (titulo, descricao, prioridade) => {
  db.run(
    "INSERT INTO anotacoes (titulo, descricao, prioridade) VALUES (?, ?, ?)",
    [titulo, descricao, prioridade ? 1 : 0]
  );
};

// Listar todas as anotações
export const listarAnotacoes = (callback) => {
  db.all("SELECT * FROM anotacoes", [], (err, rows) => {
    if (err) {
      throw err;
    }
    callback(rows);
  });
};

// Excluir uma anotação
export const excluirAnotacao = (id) => {
  db.run("DELETE FROM anotacoes WHERE id = ?", [id]);
};
