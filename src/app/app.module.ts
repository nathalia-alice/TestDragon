import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatToolbarModule, MatIconModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DragonsListingComponent } from './components/dragons/dragons-listing/dragons-listing.component';
import { DragonsCreateComponent } from './components/dragons/dragons-create/dragons-create.component';
import { DragonsDeleteComponent } from './components/dragons/dragons-delete/dragons-delete.component';
import { DragonsDetailsComponent } from './components/dragons/dragons-details/dragons-details.component';
import { DragonsEditComponent } from './components/dragons/dragons-edit/dragons-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DragonsListingComponent,
    DragonsCreateComponent,
    DragonsDeleteComponent,
    DragonsDetailsComponent,
    DragonsEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
