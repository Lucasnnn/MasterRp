import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-novo-colaborador',
  templateUrl: './novo-colaborador.component.html',
  styleUrls: ['./novo-colaborador.component.scss'],
})
export class NovoColaboradorComponent implements OnInit {
  formCustomer: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data,
    @Optional() public dialogRef: MatDialogRef<NovoColaboradorComponent>
  ) {}

  ngOnInit(): void {
    this.formCustomer = this._formBuilder.group({
      id: [null],
      name: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });

    if (this.data) {
      this.formCustomer.setValue(this.data);
    }
  }

  save() {
    const formValue = this.formCustomer.getRawValue();

    if (!formValue?.name || !formValue?.telephone || !formValue?.email) {
      return Swal.fire({
        timer: 4000,
        toast: true,
        icon: 'error',
        timerProgressBar: true,
        showConfirmButton: false,
        text: 'Preencha os campos obrigatorios antes de salvar !',
      });
    }

    this.dialogRef.close(formValue);
  }
}
