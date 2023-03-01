import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentAddComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StudentListComponent
  ]
})
export class StudentModule { }
