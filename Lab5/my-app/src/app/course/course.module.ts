import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { FormsModule } from '@angular/forms';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CourseListComponent,
    CourseAddComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,FormsModule,SharedModule
  ],
  exports: [
    CourseListComponent,CourseAddComponent
  ]
})
export class CourseModule { }
