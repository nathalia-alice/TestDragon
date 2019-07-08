import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatTooltipModule,
  MatInputModule,
  MatSnackBarModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatDialogModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

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
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    HttpClientModule,
    MatDialogModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    DragonsEditComponent,
    DragonsDeleteComponent
  ]
})

export class AppModule { }
