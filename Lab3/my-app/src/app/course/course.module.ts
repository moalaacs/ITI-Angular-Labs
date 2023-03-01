import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseAddComponent } from './course-add/course-add.component';



@NgModule({
  declarations: [
    CourseListComponent,
    CourseAddComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CourseModule { }
