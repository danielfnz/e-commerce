import { CartService } from './../../shared/services/cart.service';
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
  carrinhoLength: any;
  sucesso: boolean;

  constructor(private http: HttpClient, private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCarrinho().subscribe(carrinho => {
      this.carrinhoLength = carrinho.length;
    });
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

  onComplete(event) {
    console.log(event);
    this.sucesso = true;
    this.carrinhoLength = 0;
    this.cartService.clear();
  }

}
