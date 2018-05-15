import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

// PrimeNG
import { SelectItem } from 'primeng/api';

// App
import { VeiculoService } from '../services/veiculo.service';
import { MontadoraService } from '../services/montadora.service';
import { Strings } from '../strings';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})

export class VeiculosComponent extends Strings implements OnInit {

  montadoras: SelectItem[] = [];
  veiculos = [];
  loading: boolean;
  visualizarVeiculo: boolean = false;
  veiculoSelecionado: any;
  msgs = [];
  atualizar: boolean = false;
  atualizarPlaca: String;

  constructor(private veiculoService: VeiculoService, private montadoraService: MontadoraService) {
    super();
  }

  ngOnInit() {
    this.montadoraService.carregarComboMontadoras(this.montadoras);
    this.consultarVeiculos(); 
  }

  consultarVeiculos() {
    this.loading = true;
    this.veiculoService.listar().subscribe((veiculos) => {
      this.veiculos = veiculos;
      this.loading = false;
    });
  }

  // Função para adicionar o veículo
  adicionar(form: FormControl) {
    if(this.atualizar) {
      form.value.placa = this.atualizarPlaca;
      this.veiculoService.atualizar(form.value).subscribe((dados) => {
        form.reset();
        this.atualizar = false;
        this.atualizarPlaca = '';
        this.formatarMensagem('success', 'Veículo atualizado com sucesso!');    
        this.consultarVeiculos();
      }, (error) => {
        this.tratarErro(error);
      });
    } else {
      this.veiculoService.adicionar(form.value).subscribe((dados) => {
        form.reset();
        this.formatarMensagem('success', 'Veículo adicionado com sucesso!');    
        this.consultarVeiculos();
      }, (error) => {
        this.tratarErro(error);
      });
    } 
  }

  editar(form: FormControl, veiculo: any) {
    this.atualizar = true;
    this.atualizarPlaca = veiculo.placa;

    form.setValue({
      placa: veiculo.placa,
      montadora: veiculo.montadora,
      modelo: veiculo.modelo,    ​​​
      anoFabricacao: veiculo.anoFabricacao,
      anoModelo: veiculo.anoModelo,
      valor: veiculo.valor,
      cor: veiculo.cor
    });
  }

  cancelarEdicao(form: FormControl) {
    form.reset();
    this.atualizar = false;
    this.atualizarPlaca = '';
  }
​
  deletar(veiculo: any) {
    this.veiculoService.deletar(veiculo).subscribe(() => {
      this.formatarMensagem('success', 'Veículo removido com sucesso!');    
      this.consultarVeiculos();
    });
  }

  tratarErro(dados: any) {
    this.msgs = [];
    if (dados != undefined && dados.error != undefined && dados.error.errors != undefined) {
      dados.error.errors.forEach((erro) => {
        this.msgs.push({ severity: 'error', detail: erro.defaultMessage });
      });
    } else if (dados != undefined && dados.error != undefined) {
      this.msgs.push({ severity: 'error', detail: dados.error.message });
    } else {
      this.msgs.push({ severity: 'error', detail: "Ocorreu um erro no servidor!" });
    }
  }

  formatarMensagem(severidade: String, mensagem: String) {
    this.msgs = [];
    this.msgs.push({ severity: severidade, detail: mensagem });
  }

  visualizar(veiculo) {
    this.veiculoSelecionado = veiculo;
    this.visualizarVeiculo = true;
  }

  fecharModal() {
    this.visualizarVeiculo = false;
  }

  numerico(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }

}
