import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentDetailsComponent } from './department/department-details/department-details.component';
import { DepartmentUpdateComponent } from './department/department-update/department-update.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'students/add', component: StudentAddComponent },
  { path: 'students/update/:id',component: StudentUpdateComponent},
  {
    path: 'students', component: StudentListComponent, children: [
      { path: 'details/:id', component: StudentDetailsComponent }
    ]
  },
  {
    path: 'departments', component: DepartmentListComponent, children: [
      { path: 'details/:id', component: DepartmentDetailsComponent }
    ]
  },
  { path: 'departments/add', component: DepartmentAddComponent },
  { path: 'departments/update/:id', component: DepartmentUpdateComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
