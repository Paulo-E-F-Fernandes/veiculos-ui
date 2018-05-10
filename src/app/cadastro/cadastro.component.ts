import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

// PrimeNG
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  montadoras : SelectItem[];

  constructor() { 
    this.montadoras = [
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      {label: 'Fiat', value: 'Fiat'},
      {label: 'Ford', value: 'Ford'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'},
      {label: 'Volkswagen', value: 'VW'},
      {label: 'Volvo', value: 'Volvo'},
    ];
  }

  ngOnInit() {
  }

  // Função para adicionar o veículo
  adicionar(form: FormControl) {
    console.log(form.value);
    form.reset();
  }

}
