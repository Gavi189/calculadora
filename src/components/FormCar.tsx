import React, { useState } from "react";
import { Button, View } from "react-native";
import Input from "../components/Input";
import Title from "../components/Title";
import Carro from "../core/models/Carro";

export default function FormLogin() {
  const [marca, setMarca] = useState<string>("");
  const [modelo, setModelo] = useState<string>("");
  const [numPortas, setNumPortas] = useState<number>(0);
  const [mensagem, setMensagem] = useState<string | null>(null);

  const onPressExibir = () => {
    const _carro = new Carro(0, "", "", numPortas);

    //GET
    _carro.numeroPortas = numPortas;

    //SET
    setMensagem(
      _carro.buzinar() + ` O carro possui ${_carro.numeroPortas} portas.`
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title titleName="Marca:" />
      <Input
        placeholder="Digite sua marca de Carro"
        value={marca}
        onChangeText={(text) => setMarca(text)}
      />

      <Title titleName="Modelo:" />
      <Input
        placeholder="Digite seu modelo de Carro"
        value={modelo}
        onChangeText={(text) => setModelo(text)}
      />

      <Title titleName="Número de Portas:" />
      <Input
        placeholder="Digite o número de portas"
        value={numPortas.toString()}
        onChangeText={(text) => setNumPortas(Number(text))}
      />

      <Button title="Exibir" color="#a1a1a1" onPress={onPressExibir} />
      {mensagem !== null && <Title titleName={`Mensagem: ${mensagem}`} />}
    </View>
  );
}
