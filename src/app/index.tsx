import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  deleteTarefa,
  fetchTarefas,
  initDB,
  insertTarefa,
  updateTarefa,
} from "../core/database/SQLite";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  list: {
    marginTop: 20,
  },
  taskItem: {
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  taskDescription: {
    fontSize: 14,
    color: "#555",
  },
});

type Task = {
  id: number;
  title: string;
  description?: string;
};

export default function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [idToUpdate, setIdToUpdate] = useState("");

  useEffect(() => {
    initDB();
    carregarTarefas();
  }, []);

  const carregarTarefas = async () => {
    const dados = await fetchTarefas();
    setTasks(dados as Task[]);
  };

  const handleAdd = async () => {
    if (title.trim() === "") return;
    await insertTarefa(title, description);
    setTitle("");
    setDescription("");
    await carregarTarefas();
  };

  const handleDelete = async (id: number) => {
    await deleteTarefa(id);
    await carregarTarefas();
  };

  //handleUpdate - Atualizar
  const handleUpdate = async (id: number) => {
    if (title.trim() === "") return;
    await updateTarefa(id, title, description);
    setTitle("");
    setDescription("");
    await carregarTarefas();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 Lista de Tarefas</Text>

      <TextInput
        style={styles.input}
        placeholder="ID da tarefa para atualizar"
        keyboardType="numeric"
        value={idToUpdate}
        onChangeText={setIdToUpdate}
      />
      <TextInput
        style={styles.input}
        placeholder="Título da tarefa"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição (opcional)"
        value={description}
        onChangeText={setDescription}
      />

      <Button title="Adicionar Tarefa" onPress={handleAdd} />

      <Button
        title="Atualizar Tarefa"
        onPress={() => handleUpdate(Number(idToUpdate))}
      />

      <FlatList
        style={styles.list}
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <View>
              <Text style={styles.taskTitle}>{item.title}</Text>
              {item.description ? (
                <Text style={styles.taskDescription}>{item.description}</Text>
              ) : null}
            </View>
            <Button title="🗑️" onPress={() => handleDelete(item.id)} />
          </View>
        )}
      />
    </View>
  );
}
