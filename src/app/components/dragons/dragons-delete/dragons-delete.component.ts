import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { HttpErrorResponse } from '@angular/common/http';

import { DragonModel } from '../../../models/dragon.model';
import { DragonService } from '../../../services/dragon.service';


@Component({
  selector: 'app-dragons-delete',
  templateUrl: './dragons-delete.component.html',
  styleUrls: ['./dragons-delete.component.scss']
})

export class DragonsDeleteComponent implements OnInit {
  title = "Excluir Dragão";

  constructor(
    private dragonService: DragonService,
    public snackBar: MatSnackBar,
    public dialogDeleteDragon: MatDialogRef<DragonsDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public dialog: DragonModel,
  ) { }

  ngOnInit() {}

  deleteDragon() {
    //mensagem após concluir solicitação de excluir dragão
    this.dragonService.deleteDragon(this.dialog).subscribe(() => {
      this.snackBar.open(
       "Dragão excluído com sucesso.", "Sucesso", { duration: 5000 });
       this.dialogDeleteDragon.close();
    },
    (err: HttpErrorResponse) => {
      this.snackBar.open(
        "Houve um erro ao excluir o dragão.", "Erro", { duration: 5000 });
    });
  }
}

