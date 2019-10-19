import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'in-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProdutoComponent implements OnInit {

  dispositivoTipo = 'tablet';
  dispositivoTipos = [{
    nome: 'Tablet',
    icon: 'tablet'
  },
  {
    nome: 'Notebook',
    icon: 'computer'
  },
  {
    nome: 'Celular',
    icon: 'mobile'
  },
  {
    nome: 'Monitor',
    icon: 'display'
  }];

  produtoForm: FormGroup;
  @Input() produto;

  constructor(private fb: FormBuilder) {
    this.produtoForm = this.fb.group({
      basic: fb.group({
        nome: '',
        descricao: '',
        ativo: false,
        recursos: fb.array([
          fb.control('')
        ])
      }),
      expiracao: fb.group({
        dataExpiracao: null,
      })
    });
  }

  ngOnInit() {
  }

  selecionarDispositivo(dispositivo){
    this.dispositivoTipo = dispositivo.icon;
  }

  get basicoRecursos(): FormArray{
    return this.produtoForm.get('basic.recursos') as FormArray;
  }

  adicionarRecursos() {
    this.basicoRecursos.push(this.fb.control(''));
  }
}
