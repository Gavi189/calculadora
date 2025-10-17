// src/core/database/TinyBase.ts
import { createStore } from "tinybase";
import { Task } from "../types/Tarefa";

export const store = createStore();
store.setTable("tarefas", {});

export const addTask = (task: Task) => {
  store.setRow("tarefas", task.id.toString(), {
    title: task.title,
    description: task.description,
  });
};

export const removeTask = (id: number) => {
  store.delRow("tarefas", id.toString());
};

export const updateTask = (task: Task) => {
  store.setRow("tarefas", task.id.toString(), {
    title: task.title,
    description: task.description,
  });
};
