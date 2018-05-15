import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// PrimeNG
import { SelectItem } from 'primeng/api';

@Injectable()
export class MontadoraService {

  recursoUrl = 'http://localhost:8080/veiculos-api/montadoras';
  
  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(this.recursoUrl);
  }

  carregarComboMontadoras(montadoras: SelectItem[]) {
    this.listar().subscribe((listaMontadoras) => {
      listaMontadoras.forEach((montadora) => {
        montadoras.push({label: montadora.nome, value: montadora});
      });
    });
  }

}
