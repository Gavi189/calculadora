export default abstract class Animal {
  //Propriedades
  private _corOlhos: string;
  private _tamBoca: string;
  private _qntPernas: number;
  private _pelagem: string;

  //Construtor
  constructor(
    corOlhos: string,
    tamBoca: string,
    qntPernas: number,
    pelagem: string
  ) {
    this._corOlhos = corOlhos;
    this._tamBoca = tamBoca;
    this._qntPernas = qntPernas;
    this._pelagem = pelagem;
  }

  //Métodos
  abstract fazSom(som: string): void;
}
