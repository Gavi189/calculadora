import React, { useState } from "react";
import { Button, View } from "react-native";
import Input from "../components/Input";
import Title from "../components/Title";
import Administrador from "../core/models/Administrador";
import Usuario from "../core/models/Usuario";

export default function FormLogin() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [cargo, setCargo] = useState<string>("");
  const [frase, setFrase] = useState<string>("");
  const [mensagem, setMensagem] = useState<string | null>(null);

  const onPressLogin = () => {
    const _usuario = new Usuario(1, "", email, senha, frase);
    //private = const
    const _admin = new Administrador(0, email, "", "", "", cargo);

    //GET
    _admin.cargo = cargo;

    //SET
    _admin.cargo = cargo + "Novo";

    setMensagem(_admin.exibirNome());
  };

  const onPressMsg = () => {
    const _usuario = new Usuario(1, "", email, senha, frase);
    setMensagem(_usuario.exibirMensagem());
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Title titleName="E-mail:" />
      <Input
        placeholder="Digite o seu e-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Title titleName="Senha:" />
      <Input
        placeholder="Digite a sua senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />

      <Title titleName="Cargo:" />
      <Input
        placeholder="Digite seu cargo"
        value={cargo}
        onChangeText={(text) => setCargo(text)}
      />

      <Title titleName="Mensagem:" />
      <Input
        placeholder="Digite a sua mensagem"
        value={frase}
        onChangeText={(text) => setFrase(text)}
      />

      <Button title="Login" color="#a1a1a1" onPress={onPressLogin} />
      <Button title="Mensagem" color="#a1a1a1" onPress={onPressMsg} />
      {mensagem !== null && <Title titleName={`Mensagem: ${mensagem}`} />}
    </View>
  );
}
