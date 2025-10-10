import Animal from "./Animal";

export default class Besouro extends Animal {
  //Propriedades

  //Construtor
  constructor(
    corOlhos: string,
    tamBoca: string,
    qntPernas: number,
    pelagem: string
  ) {
    super(corOlhos, tamBoca, qntPernas, pelagem);
  }

  //Método
  fazSom(som: string): string {
    return "Guaraná!!!" + som;
  }
}
