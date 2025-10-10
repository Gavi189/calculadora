import * as SQLite from "expo-sqlite";

//Criar e abrir o banco de dados
//Entre aspas coloca o nome do banco de dados (Criação BD)
//openDatabaseSync - Abre o banco de dados

const database = SQLite.openDatabaseSync("tarefa.db");

//Iniciar o banco de dados
//transaction - Transação (Operações no BD) [Não tem mais]
//execSync - Executa o comando SQL

export const initDB = () => {
  database.execSync(
    `CREATE TABLE IF NOT EXISTS tarefas 
      (id INTEGER PRIMARY KEY AUTOINCREMENT, 
      titulo TEXT NOT NULL, 
      descricao TEXT NOT NULL);`
  ),
    () => {
      console.log("Banco de dados criado com sucesso!");
    },
    (error: any) => {
      console.log("Erro ao criar o banco de dados: " + error);
    };
};

//CRUD - Create, Read, Update, Delete

//Create - Criar
export const insertTarefa = (titulo: string, descricao: string) => {
  database.execSync(
    `INSERT INTO tarefas (titulo, descricao) 
            VALUES ('${titulo}', '${descricao}');`
  );
};

//Read - Ler
export const fetchTarefas = () => {
  const resultado = database.getAllSync(
    `SELECT id, titulo AS title, descricao AS description FROM tarefas;`
  );
  return resultado;
};

//Update - Atualizar
export const updateTarefa = (id: number, titulo: string, descricao: string) => {
  database.execSync(
    `UPDATE tarefas SET 
    titulo = '${titulo}', 
    descricao = '${descricao}' 
        WHERE id = ${id};`
  );
};

//Delete - Remover
export const deleteTarefa = (id: number) => {
  database.execSync(`DELETE FROM tarefas WHERE id = ${id};`);
};
//Exportar o banco de dados
export default database;
