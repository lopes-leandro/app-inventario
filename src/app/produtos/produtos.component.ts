import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProdutoService, IProduto } from '../produto.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'in-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProdutosComponent implements OnInit {

  constructor(private produtosService: ProdutoService) { }

  produtos$: Observable<IProduto[]> = this.produtosService.produto$;
  deletar = false;
  produtoParaSerDeletado;

  trackById(index, item) {
    return item.id;
  }

  onDelete(produto) {
    this.deletar = true;
    this.produtoParaSerDeletado = produto;
  }

  handleCancelar() {
    this.deletar = false;
  }

  confirmarDelete() {
    this.handleCancelar();

    // Nós precisamos implementar esse método removerProduto() no nosso ProdutosService
    this.produtosService.removerProduto(this.produtoParaSerDeletado);
  }
  ngOnInit() {
  }

}
