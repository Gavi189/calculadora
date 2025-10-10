import Veiculo from "./Veiculo";

export default class Carro extends Veiculo {
  //extends = Herança
  //Propriedades
  private _numeroPortas: number;

  //Construtor
  constructor(id: number, marca: string, modelo: string, numeroPortas: number) {
    super(id, marca, modelo); //super = herdar
    this._numeroPortas = numeroPortas;
  }

  //Getters e Setters
  get numeroPortas(): number {
    return this._numeroPortas;
  }
  set numeroPortas(value: number) {
    this._numeroPortas = value;
  }

  //Métodos
  buzinar(): string {
    return "Buzina: BEEP BEEP!";
  }
}
