// src/screens/TaskManager.tsx
import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useStoreListener } from "../core/hooks/TaskManager";
import { useTasks } from "../core/hooks/UseTasks";

export default function TaskManager() {
  const { store, add, remove, update } = useTasks();
  const tasks = useStoreListener(store, "tarefas");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [idToUpdate, setIdToUpdate] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📋 Lista de Tarefas</Text>

      <TextInput
        style={styles.input}
        placeholder="ID para atualizar"
        keyboardType="numeric"
        value={idToUpdate}
        onChangeText={setIdToUpdate}
      />
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />

      <Button title="Adicionar" onPress={() => add(title, description)} />
      <Button
        title="Atualizar"
        onPress={() => update({ id: Number(idToUpdate), title, description })}
      />

      <FlatList
        style={styles.list}
        data={Object.entries(tasks || {}).map(([id, t]) => ({
          id,
          title: t.title as string,
          description: t.description as string,
        }))}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Button title="🗑️" onPress={() => remove(Number(item.id))} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  list: { marginTop: 20 },
  taskItem: {
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskTitle: { fontSize: 16, fontWeight: "bold" },
});
