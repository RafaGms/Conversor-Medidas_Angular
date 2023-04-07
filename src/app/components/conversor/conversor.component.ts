import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css'],
})
export class ConversorComponent {
  // variaveis
  selectedOption1: string = 'Medidas';
  selectedOption2: string = 'Medidas';

  //numeros digitados
  primeiroNumero!: number;
  segundoNumero!: number;

  mensagemError: string = '';

  verificacao1() {
    const numeroConvertido1: number = parseInt(this.selectedOption1); //Converte a strig para numero
    const numeroConvertido2: number = parseInt(this.selectedOption2); //Converte a strig para numero
    //verificar se foi selecionado alguma medida
    if (!isNaN(numeroConvertido1) && !isNaN(numeroConvertido2)) {
      //if com todas as possibilidade do primeiro imput
      if (numeroConvertido1 == 1 && numeroConvertido2 == 1) {
        this.segundoNumero = this.primeiroNumero;
      } else if (numeroConvertido1 == 1 && numeroConvertido2 == 2) {
        this.segundoNumero = this.primeiroNumero / 1000;
      } else if (numeroConvertido1 == 1 && numeroConvertido2 == 3) {
        this.segundoNumero = this.primeiroNumero * 100;
      } else if (numeroConvertido1 == 2 && numeroConvertido2 == 1) {
        this.segundoNumero = this.primeiroNumero * 1000;
      } else if (numeroConvertido1 == 2 && numeroConvertido2 == 2) {
        this.segundoNumero = this.primeiroNumero;
      } else if (numeroConvertido1 == 2 && numeroConvertido2 == 3) {
        this.segundoNumero = this.primeiroNumero * 100000;
      } else if (numeroConvertido1 == 3 && numeroConvertido2 == 1) {
        this.segundoNumero = this.primeiroNumero / 100;
      } else if (numeroConvertido1 == 3 && numeroConvertido2 == 2) {
        this.segundoNumero = this.primeiroNumero / 100000;
      } else if (numeroConvertido1 == 3 && numeroConvertido2 == 3) {
        this.segundoNumero = this.primeiroNumero * 100000;
      } else {
        this.setMesagemError('Operação invalida');
      }
    } else {
      this.setMesagemError('Selecione a medida dos dois campos!');
    }
  }
  verificacao2() {
    const numeroConvertido1: number = parseInt(this.selectedOption1); //Converte a strig para numero
    const numeroConvertido2: number = parseInt(this.selectedOption2); //Converte a strig para numero
    //verificar se foi selecionado alguma medida
    if (!isNaN(numeroConvertido1) && !isNaN(numeroConvertido2)) {
      //if com todas as possibilidade do primeiro imput
      if (numeroConvertido1 == 1 && numeroConvertido2 == 1) {
        this.primeiroNumero= this.segundoNumero;
      } else if (numeroConvertido1 == 1 && numeroConvertido2 == 2) {
        this.primeiroNumero = this.segundoNumero / 1000;
      } else if (numeroConvertido1 == 1 && numeroConvertido2 == 3) {
        this.primeiroNumero = this.segundoNumero * 100;
      } else if (numeroConvertido1 == 2 && numeroConvertido2 == 1) {
        this.primeiroNumero = this.segundoNumero * 1000;
      } else if (numeroConvertido1 == 2 && numeroConvertido2 == 2) {
        this.primeiroNumero = this.segundoNumero;
      } else if (numeroConvertido1 == 2 && numeroConvertido2 == 3) {
        this.primeiroNumero = this.segundoNumero * 100000;
      } else if (numeroConvertido1 == 3 && numeroConvertido2 == 1) {
        this.primeiroNumero = this.segundoNumero / 100;
      } else if (numeroConvertido1 == 3 && numeroConvertido2 == 2) {
        this.primeiroNumero = this.segundoNumero / 100000;
      } else if (numeroConvertido1 == 3 && numeroConvertido2 == 3) {
        this.primeiroNumero = this.segundoNumero * 100000;
      } else {
        this.setMesagemError('Operação invalida');
      }
    } else {
      this.setMesagemError('Selecione a medida dos dois campos!');
    }
  }

  //função para mostrar mensagem de erro
  setMesagemError(mensagem: string) {
    this.mensagemError = mensagem;
  }

  limpar(){
    this.mensagemError = '';
  }
}
