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
  produtoOpen;
  selecionarProduto: IProduto;

  trackById(index, item) {
    return item.id;
  }

  onDeletar(produto) {
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

  addProduto() {
    this.produtoOpen = true;
    this.selecionarProduto = undefined;
  }

  onEditar(produto) {
    this.produtoOpen = true;
    this.selecionarProduto = produto;
  }

  handleFinalizar(event) {
    if (event && event.produto) {
      if (this.selecionarProduto) {
        // Fluxo de Edição
        this.produtosService.editarProduto(this.selecionarProduto.id, event.produto);
      } else {
        // Salvar Novo
        this.produtosService.adicionarProduto(event.produto);
      }
    }
    this.produtoOpen = false;
  }

}
