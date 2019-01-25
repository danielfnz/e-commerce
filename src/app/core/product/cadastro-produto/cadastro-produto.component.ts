import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../../shared/services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {

    this.form = this.fb.group({
      nome: '',
      marca: '',
      preco: '',
      precoPromocional: '',
      descricao: this.fb.group({
        titulo: '',
        conteudo: ''
      }),
      voceSabia: this.fb.group({
        titulo: '',
        conteudo: ''
      }),
      imagens: this.fb.group({
        url1: '',
        url2: '',
        url3: '',
        url4: '',
      }),
    });
  }

  cadastrarNovoProduto() {
    const product = Object.assign({}, this.form.value);
    product.imagens = Object.values(product.imagens).filter(v => v !== '');
    this.productService.insertNewProduct(product);
    // this.router.navigate(['/home'], {replaceUrl: true});
    console.log(this.productService.getAllProducts());
  }
}
