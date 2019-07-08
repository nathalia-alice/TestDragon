import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog, MatSnackBar } from '@angular/material';

import { DragonService } from '../../../services/dragon.service';
import { DragonsEditComponent } from '../dragons-edit/dragons-edit.component';
import { DragonsDeleteComponent } from '../dragons-delete/dragons-delete.component';

@Component({
  selector: 'app-dragons-listing',
  templateUrl: './dragons-listing.component.html',
  styleUrls: ['./dragons-listing.component.scss']
})

export class DragonsListingComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  sortDragons;
  dragons;
  columnsTable: string[] = ['nome', 'tipo', 'data-criacao', 'editar', 'excluir'];

  constructor(
    private dragonService: DragonService,
    private materialDialog: MatDialog
  ) { }

  ngOnInit() {
    this.getListDragons();
  }

  getListDragons() {
    this.dragonService.getDragons().subscribe(response => {
      //fazendo ordenação e paginação lista dragões
      this.sortDragons = response;
      this.sortDragons.sort((a, b) => a.name.localeCompare(b.name));
      this.dragons = new MatTableDataSource(this.sortDragons);
      this.dragons.paginator = this.paginator;

    });
  }

  deleteDragon(dragon) {
    const dialog = this.materialDialog.open(DragonsDeleteComponent, {
      width: '500px',
      height: '500px;',
      data: {
        id: dragon.id,
        name: dragon.name,
        type: dragon.type,
        createdAt: dragon.createdAt
      }
    });

    //depois de fechar modal
    this.afterClosedModal(dialog);
  }

  editDragon(dragon) {
    const dialog = this.materialDialog.open(DragonsEditComponent, {
      width: '500px',
      height: '500px;',
      data: {
        id: dragon.id,
        name: dragon.name,
        type: dragon.type,
        createdAt: dragon.createdAt,
        histories: dragon.histories
      }
    });

    //depois de fechar modal
    this.afterClosedModal(dialog);

  }

  afterClosedModal(dialog) {
    dialog.afterClosed().subscribe(() => {
      setTimeout(() => {
        this.getListDragons();
      }, 100);
    });
  }
}
