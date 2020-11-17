import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { ModalModule } from 'ngx-bootstrap/modal'
import { ReactiveFormsModule } from '@angular/forms'
import { TextMaskModule } from 'angular2-text-mask'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { MainComponent } from './layouts/main/main.component';
import { StudentAddComponent } from './layouts/students/student-add/student-add.component';
import { StudentFilterComponent } from './layouts/students/student-filter/student-filter.component';
import { StudentItemComponent } from './layouts/students/student-item/student-item.component';
import { StudentListComponent } from './layouts/students/student-list/student-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    StudentAddComponent,
    StudentFilterComponent,
    StudentItemComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
