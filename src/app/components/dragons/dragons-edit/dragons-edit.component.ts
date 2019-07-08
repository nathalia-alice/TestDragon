import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { DragonModel } from '../../../models/dragon.model';
import { DragonService } from '../../../services/dragon.service';

@Component({
  selector: 'app-dragons-edit',
  templateUrl: './dragons-edit.component.html',
  styleUrls: ['./dragons-edit.component.scss']
})

export class DragonsEditComponent implements OnInit {

  editForm: FormGroup;
  dragonSelected;
  title = "Editar Dragão";

  constructor(
    private formBuilder: FormBuilder,
    private dragonService: DragonService,
    public snackBar: MatSnackBar,
    public dialogEditDragon: MatDialogRef<DragonsEditComponent>,
    @Inject(MAT_DIALOG_DATA) public dialog: DragonModel,

  ) { }

  ngOnInit() {
    this.validationEditForm();
  }

  editDragon() {
    const dragon = {
      id: this.dialog.id,
      name: this.editForm.get('name').value,
      type: this.editForm.get('type').value,
      histories: this.editForm.get('histories').value,
      createdAt: this.dialog.createdAt
    };

    //mensagem após concluir solicitação de edição do dragão
    this.dragonService.putDragon(dragon).subscribe(
      res => {
        this.snackBar.open(
          "Dragão editado com sucesso.", "Sucesso", { duration: 5000 });
        this.dialogEditDragon.close();
      },
      error => {
        this.snackBar.open(
          "Houve um erro ao editar o dragão.", "Erro", { duration: 5000 });
      }
    );
  }

  validationEditForm() {
    this.editForm = this.formBuilder.group({
      name: this.formBuilder.control(this.dialog.name, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      type: this.formBuilder.control(this.dialog.type, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      histories: this.formBuilder.control(this.dialog.histories, [Validators.maxLength(2000)]),
    });
  }

}
