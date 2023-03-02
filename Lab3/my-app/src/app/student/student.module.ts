import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FormsModule } from '@angular/forms';
import { StudentEditComponent } from './student-edit/student-edit.component'



@NgModule({
  declarations: [
    StudentListComponent,
    StudentAddComponent,
    StudentEditComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    StudentListComponent,StudentAddComponent,StudentEditComponent
  ]
})
export class StudentModule { }
