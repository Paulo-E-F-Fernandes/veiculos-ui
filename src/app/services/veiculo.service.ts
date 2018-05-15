import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VeiculoService {

  recursoUrl = 'http://localhost:8080/veiculos-api/veiculos';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(this.recursoUrl);
  }

  adicionar(veiculo: any) {
    return this.http.post(this.recursoUrl, veiculo);
  }

  atualizar(veiculo: any) {
    return this.http.put(this.recursoUrl, veiculo);
  }

  deletar(veiculo: any) {
    const url = this.recursoUrl + '/' + veiculo.placa;
    return this.http.delete(url);
  }

}
