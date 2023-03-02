import { Component,Output,EventEmitter } from '@angular/core';
import { Course } from 'src/app/_models/course';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent {
  @Output() onCourseAdded:EventEmitter<Course>=new EventEmitter<Course>();
  newCourse = new Course(1,"",0,0);
  save(){
    this.onCourseAdded.emit(this.newCourse);
  }
}
