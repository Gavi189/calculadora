import Animal from "./Animal";

export default class Baleia extends Animal {
  //Propriedades
  private _tamCauda: string;

  //Get e Set

  //Construtor
  constructor(
    corOlhos: string,
    tamBoca: string,
    qntPernas: number,
    pelagem: string,
    tamCauda: string
  ) {
    super(corOlhos, tamBoca, qntPernas, pelagem);
    this._tamCauda = tamBoca;
  }

  //Método
  fazSom(som: string): string {
    return this._tamCauda + som;
  }
}
