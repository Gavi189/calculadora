import Usuario from "./Usuario";

export default class Administrador extends Usuario {
  //Propriedade
  private _cargo: string;

  //Construtor
  constructor(
    id: number,
    nome: string,
    email: string,
    senha: string,
    mensagem: string,
    cargo: string
  ) {
    super(id, nome, email, senha, mensagem);
    this._cargo = cargo;
  }

  //Getters e Setters
  get cargo(): string {
    return this._cargo;
  }
  set cargo(value: string) {
    this._cargo = value;
  }

  //Método
  //Polimorfismo: utilizar os mesmos métodos de formas diferentes
  public exibirNome(): string {
    return `Seja bem-vindo, ${this._nome} com ${this._cargo}!`;
  }
}
