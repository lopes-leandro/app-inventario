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

  trackById(index, item){
    return item.id;
  }
  
  ngOnInit() {
  }

}
