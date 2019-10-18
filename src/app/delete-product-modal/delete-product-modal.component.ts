import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'in-delete-product-modal',
  templateUrl: './delete-product-modal.component.html',
  styleUrls: ['./delete-product-modal.component.scss']
})
export class DeleteProductModalComponent implements OnInit {

  @Input() produto;
  @Output() cancelar = new EventEmitter();
  @Output() confirmar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cancelarDelete() {
    this.cancelar.emit();
  }

  confirmarDelete() {
    this.confirmar.emit();
  }

}
