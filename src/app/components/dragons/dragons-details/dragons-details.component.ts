
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DragonService } from '../../../services/dragon.service';

@Component({
  selector: 'app-dragons-details',
  templateUrl: './dragons-details.component.html',
  styleUrls: ['./dragons-details.component.scss']
})
export class DragonsDetailsComponent implements OnInit {

  dragon;
  title = "Detalhes";
  
  constructor(
    private route: ActivatedRoute,
    private dragonService: DragonService,
  ) { }

  ngOnInit() {
    const dragonId = this.route.snapshot.paramMap.get('id');
    this.dragonService.getDragon(dragonId).subscribe(response => {
      this.dragon = response;
    });
  }
}
