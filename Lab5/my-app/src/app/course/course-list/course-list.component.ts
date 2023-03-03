import { Component } from '@angular/core';
import { Course } from 'src/app/_models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  courses:Course[]=[
    new Course(1,"JS",30,5),
    new Course(2,"Node",20,3),
    new Course(3,"Angular",35,4),
    new Course(4,"CST",35,5)
  ]
  saveToList(course:Course){
    this.courses.push(new Course(course.courseID,course.courseName,course.duration,course.rate));
  }
  courseDetails:Course=new Course(0,"",0,0);
}
