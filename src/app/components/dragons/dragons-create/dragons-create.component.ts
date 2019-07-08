import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { DragonService } from '../../../services/dragon.service';


@Component({
  selector: 'app-dragons-create',
  templateUrl: './dragons-create.component.html',
  styleUrls: ['./dragons-create.component.scss']
})

export class DragonsCreateComponent implements OnInit {

  dragonForm: FormGroup;
  title = "Criar Novo Dragão";

  constructor(
    private formBuilder: FormBuilder,
    private dragonService: DragonService,
    private router: Router,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.validationCreateDragon();
  }

  validationCreateDragon() {
    this.dragonForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      type: this.formBuilder.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      histories: this.formBuilder.control('', [Validators.maxLength(2000)]),
    });
  }

  createDragon() {
    const data = {
      id: '',
      name: this.dragonForm.get('name').value,
      type: this.dragonForm.get('type').value,
      histories: this.dragonForm.get('histories').value,
      createdAt: new Date().toISOString().toString()
    };

    this.dragonService.postDragon(data).subscribe(
      res => {
        this.snackBar.open(
          "Dragão criado com sucesso.", 'Sucesso', { duration: 5000 });
        this.router.navigateByUrl('/dragons');
      },
      error => {
        this.snackBar.open(
          "Houve um erro ao criar o dragão.", 'Erro', { duration: 5000 });
      }
    );
  }
}
