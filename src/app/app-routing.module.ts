import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layouts/main/main.component'
import { StudentListComponent } from './layouts/students/student-list/student-list.component'
import { StudentAddComponent } from './layouts/students/student-add/student-add.component'

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'students', component: StudentListComponent},
  {path: 'add', component: StudentAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
