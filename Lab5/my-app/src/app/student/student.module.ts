import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './student-details/student-details.component'
import { RouterLink } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { StudentUpdateComponent } from './student-update/student-update.component';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentAddComponent,
    StudentDetailsComponent,
    StudentUpdateComponent
  ],
  imports: [
    CommonModule,FormsModule,RouterLink,AppRoutingModule
  ],
  exports:[
    StudentListComponent,StudentAddComponent
  ]
})
export class StudentModule { }
