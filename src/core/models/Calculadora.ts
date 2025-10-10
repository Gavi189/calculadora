// Definição da classe Calculadora
// Conceitos: atributos (num1, num2), construtor e método (somar)

export default class Calculadora {
  //Atributos
  num1: number;
  num2: number;

  //Construtor
  constructor(num1: number, num2: number) {
    this.num1 = num1;
    this.num2 = num2;
  }

  //Método
  somar(): number {
    return this.num1 + this.num2;
  }
}
