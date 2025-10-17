// src/core/database/SQLite.ts
import * as SQLite from "expo-sqlite";

export const database = SQLite.openDatabaseSync("tarefa.db");

// Inicializar banco
export const initDB = () => {
  database.execSync(`
      CREATE TABLE IF NOT EXISTS tarefas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        descricao TEXT NOT NULL
      );
    `);
};

// CREATE
export const insertTarefa = (titulo: string, descricao: string) => {
  database.execSync(
    `INSERT INTO tarefas (titulo, descricao) VALUES ('${titulo}', '${descricao}');`
  );
};

// READ
export const fetchTarefas = (): any[] => {
  return database.getAllSync(
    `SELECT id, titulo AS title, descricao AS description FROM tarefas;`
  );
};

// UPDATE
export const updateTarefa = (id: number, titulo: string, descricao: string) => {
  database.execSync(`
    UPDATE tarefas 
    SET titulo = '${titulo}', descricao = '${descricao}' 
    WHERE id = ${id};
  `);
};

// DELETE
export const deleteTarefa = (id: number) => {
  database.execSync(`DELETE FROM tarefas WHERE id = ${id};`);
};
