// src/core/hooks/useTasks.ts
import { useEffect } from "react";
import {
  deleteTarefa,
  fetchTarefas,
  insertTarefa,
  updateTarefa,
} from "../database/SQLite";
import { addTask, removeTask, store, updateTask } from "../database/TinyBase";
import { Task } from "../types/Tarefa";

export const useTasks = () => {
  // Sincroniza dados do SQLite para TinyBase na inicialização
  useEffect(() => {
    const syncFromSQLite = async () => {
      const tarefas = fetchTarefas() as Task[];
      tarefas.forEach((t) => addTask(t));
    };
    syncFromSQLite();
  }, []);

  const add = async (title: string, description: string) => {
    insertTarefa(title, description);
    const tarefas = fetchTarefas() as Task[];
    addTask(tarefas[tarefas.length - 1]); // Adiciona última tarefa inserida
  };

  const remove = async (id: number) => {
    deleteTarefa(id);
    removeTask(id);
  };

  const update = async (task: Task) => {
    updateTarefa(task.id, task.title, task.description);
    updateTask(task);
  };

  return { store, add, remove, update };
};
