import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../../_models/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  newStudent:Student = new Student(0,"",0);
  @Output() onStudentAdded:EventEmitter<Student>=new EventEmitter<Student>();
  add(){
    this.onStudentAdded.emit(this.newStudent);
  }
}
