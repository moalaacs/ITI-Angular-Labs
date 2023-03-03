import { Component, Input } from '@angular/core';
import { Course } from 'src/app/_models/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  @Input() course = new Course(0,"",0,0);
}
