import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VeiculoService {

  recursoUrl = 'http://localhost:8080/veiculos';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(this.recursoUrl);
  }

  adicionar(veiculo: any) {
    return this.http.post(this.recursoUrl, veiculo);
  }

}
