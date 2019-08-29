import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './component/student/student-list/student-list.component';
import { StudentCreateComponent } from './component/student/student-create/student-create.component';


const routes: Routes = [
  { path: '', redirectTo: '/student-list', pathMatch: 'full' },
  {
    path: 'student-list',
    component: StudentListComponent
  },
  {
    path: 'student-add',
    component: StudentCreateComponent
  },
  {
    path: 'student-edit/:id',
    component: StudentCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }