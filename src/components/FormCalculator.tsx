import React, { useState } from "react";
import { Button, View } from "react-native";
import Input from "../components/Input";
import Title from "../components/Title";
import Calculadora from "../core/models/Calculadora";

export default function Form() {
  // useState para armazenar os números e o resultado
  // Interação do usuário com o estado da página (Interatividade)
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  //GET = Leitura SET = Escrita
  // OnPress for the sum button
  const onPressSum = () => {
    //Chamar o método (função) somar da Classe Calculadora
    //new = instanciar (criar um objeto)
    const _calculadora = new Calculadora(num1, num2);
    //calculadora é um objeto, isso é POO.
    setResult(_calculadora.somar());
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title titleName="Número 1:" />
      <Input
        placeholder="Digite o primeiro número"
        value={num1.toString()}
        onChangeText={(text) => setNum1(Number(text))}
      />

      <Title titleName="Número 2:" />
      <Input
        placeholder="Digite o segundo número"
        value={num2.toString()}
        onChangeText={(text) => setNum2(Number(text))}
      />

      <Button title="Sum" color="#a1a1a1" onPress={onPressSum} />
      {result !== null && <Title titleName={`Resultado: ${result}`} />}
    </View>
  );
}
