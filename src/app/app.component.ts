import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare var FB: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'TestDragon';

  constructor(private router: Router) { }
  
  ngOnInit() {

  }

  deslogar() {
    FB.logout();
    this.router.navigateByUrl('/');
  }
}

