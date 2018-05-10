import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  veiculos = [
    { placa: 'LZY7875', montadora: 'Ford', modelo: 'Escort', anoFabricacao: 1993, anoModelo: 1994, valor: '6000.00', cor: 'Vermelho', dataAlteracao: new Date() },
    { placa: 'ABC1299', montadora: 'Chevrolet', modelo: 'Celta', anoFabricacao: 2010, anoModelo: 2010, valor: '7500.00', cor: 'Preto', dataAlteracao: new Date() },
    { placa: 'DTY2200', montadora: 'Volkswagen', modelo: 'Santana', anoFabricacao: 2000, anoModelo: 2000, valor: '11000.00', cor: 'Prata', dataAlteracao: new Date() },
    { placa: 'ADF1974', montadora: 'Ford', modelo: 'Ka', anoFabricacao: 2013, anoModelo: 2013, valor: '22000.00', cor: 'Preto', dataAlteracao: new Date() },
    { placa: 'LZZ1412', montadora: 'Ford', modelo: 'Mustang', anoFabricacao: 2018, anoModelo: 2018, valor: '299000.00', cor: 'Vermelho', dataAlteracao: new Date() },
    { placa: 'IZZ8900', montadora: 'Ford', modelo: 'Fusion AWD', anoFabricacao: 2013, anoModelo: 2013, valor: '105000.00', cor: 'Preto', dataAlteracao: new Date() },
    { placa: 'MOL0001', montadora: 'Ford', modelo: 'Fiesta', anoFabricacao: 2015, anoModelo: 2015, valor: '30000.00', cor: 'Branco', dataAlteracao: new Date() }
  ];

  constructor() { }

  ngOnInit() {
  }

}
