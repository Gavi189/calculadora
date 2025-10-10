export default class Usuario {
  //Uso do underline "_" para diferenciar
  // as palavras reservadas do POO das variáveis comuns

  //Propriedades
  private _id: number;
  protected _nome: string;
  private _email: string;
  private _senha: string;
  private _mensagem: string;

  //Construtor
  constructor(
    id: number,
    nome: string,
    email: string,
    senha: string,
    mensagem: string
  ) {
    this._id = id;
    this._nome = nome;
    this._email = email;
    this._senha = senha;
    this._mensagem = mensagem;
  }

  //Método1
  public loginUsuario(): string {
    if (this._email === "gabriel@gmail.com" && this._senha === "1234") {
      return "Login realizado com sucesso!";
    }
    return "Falha no login. E-mail ou senha incorretos.";
  }
  //Método2 exibirNome
  public exibirNome(): string {
    return `Seja bem-vindo, ${this._nome}!`;
  }

  //Método3 exibirMsgUser
  public exibirMensagem(): string {
    return `Seja bem-vindo, ${this._mensagem}!`;
  }
}
