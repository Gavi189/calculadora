import React, { useState } from "react";
import { Button, View } from "react-native";
import Input from "../components/Input";
import Title from "../components/Title";

export default function Home() {
  // useState to store the input values
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);

  // OnPress for the sum button
  const onPressSum = () => {
    setResult(num1 + num2);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
      {result !== null && <Title titleName={`Result: ${result}`} />}
    </View>
  );
}
