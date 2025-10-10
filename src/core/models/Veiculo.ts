export default class Veiculo {
  //Propriedades
  private _id: number;
  private _marca: string;
  private _modelo: string;

  //Construtor
  constructor(_id: number, _marca: string, _modelo: string) {
    this._id = _id;
    this._marca = _marca;
    this._modelo = _modelo;
  }

  //Getters e Setters
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  //Métodos
  acelerar(): string {
    return "Acelerando o veículo...";
  }
}
