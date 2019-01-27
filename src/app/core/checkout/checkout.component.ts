import { Component, OnInit } from '@angular/core';
import * as cepPromise from 'cep-promise/dist/cep-promise-browser';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  public cep = null;
  public endereco  = null;
  public cidade = null;
  public pagamento = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  buscarCep() {
    this.http.get(`https://viacep.com.br/ws/${this.cep}/json/`).subscribe(retorno => {
      console.log(retorno);
      this.cidade = retorno['localidade'] + ' - ' + retorno['uf'];
      this.endereco = retorno['logradouro'];
    });
  }


  onKeydUp(event) {
    if (event.key === 'Enter') {
     this.buscarCep();
    }

    if (this.cep.length === 8) {
      this.buscarCep();
    }
  }

  onStep1Next(event) {

  }

  selecionarPagamento(tipo) {
    this.pagamento = tipo;
  }

  onStep2Next(event) {

  }

  onComplete(event) {

  }

}
