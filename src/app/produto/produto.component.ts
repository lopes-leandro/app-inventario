import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewChild, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ClrWizard } from '@clr/angular';
import pick from 'lodash-es/pick';

function minDateValidation(date: Date): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = new Date(control.value) < date;
    return forbidden ? { minDateValidation: { value: control.value } }
      : null;
  };
}

@Component({
  selector: 'in-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProdutoComponent implements OnInit, OnChanges {

  @Output() finalizar = new EventEmitter();
  @ViewChild('produtoWizard', { read: false }) produtoWizard: ClrWizard;
  dispositivoTipo = 'printer';
  dispositivoTipos = [{
    nome: 'Suprimento',
    icon: 'blocks-group',
    type: 'supply'
  }, {
    nome: 'Impressora',
    icon: 'printer',
    type: 'printer'
  }, {
    nome: 'Conectividade',
    icon: 'connect',
    type: 'connectivity'
  }, {
    nome: 'Tablet',
    icon: 'tablet',
    type: 'tablet'
  }, {
    nome: 'Notebook',
    icon: 'computer',
    type: 'computer'
  }, {
    nome: 'Celular',
    icon: 'mobile',
    type: 'mobile'
  }, {
    nome: 'Monitor',
    icon: 'display',
    type: 'display'
  }];

  produtoForm: FormGroup;
  @Input() produto;

  constructor(private fb: FormBuilder) {
    this.produtoForm = this.fb.group({
      basic: fb.group({
        nome: ['', Validators.required],
        descricao: '',
        ativo: false,
        recursos: fb.array([
          fb.control('')
        ])
      }),
      expiracao: fb.group({
        dataExpiracao: [null,
          Validators.compose([Validators.required,
          minDateValidation(new Date())])],
      })
    });
  }

  ngOnInit(): void {
    console.log(this.produto);
    if (this.produto) {
      this.produtoForm.setValue({
        basic: {
          ...pick(this.produto, ['nome', 'descricao', 'ativo']),
          recursos: this.produto.recursos || [''],
        },
        expiracao: {
          ...pick(this.produto, ['dataExpiracao']),
        }
      });
      this.dispositivoTipo = this.produto.tipo;
    }
  }

  ngOnChanges(): void {
    this.ngOnInit();
  }

  selecionarDispositivo(dispositivo) {
    this.dispositivoTipo = dispositivo.icon;
  }

  get basicoRecursos(): FormArray {
    return this.produtoForm.get('basic.recursos') as FormArray;
  }

  adicionarRecursos() {
    this.basicoRecursos.push(this.fb.control(''));
  }

  get basicFieldInvalid() {
    return this.produtoForm.get('basic.nome').invalid && this.produtoForm.get('basic.nome').dirty;
  }

  get expirationError() {
    if (this.produtoForm.get('expiracao.dataExpiracao').hasError('required')) {
      return 'Este campo é obrigatório!';
    }
    if (this.produtoForm.get('expiracao.dataExpiracao').hasError('minDateValidation')) {
      return 'A expiração deve ser posterior à data de hoje!';
    }
  }

  get isBasicInvalid(): boolean {
    return this.produtoForm.get('basic').invalid;
  }

  get isExpirationInvalid(): boolean {
    return this.produtoForm.get('expiracao').invalid;
  }

  handleClose() {
    this.finalizar.emit();
    this.close();
  }

  close() {
    this.produtoForm.reset();
    this.dispositivoTipo = 'tabled';
    this.produtoWizard.goTo(this.produtoWizard.pageCollection.pages.first.id);
    this.produtoWizard.reset();
  }

  handleFinish() {
    this.finalizar.emit({
      produto: {
        tipo: this.dispositivoTipo,
        ...this.produtoForm.get('basic').value,
        ...this.produtoForm.get('expiracao').value,
      }
    });
    this.close();
  }
}
