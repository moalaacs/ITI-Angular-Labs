import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  newStudent:Student = new Student(0,"",0);
  @Output() onStudentAdded:EventEmitter<Student>=new EventEmitter<Student>();
  add(){
    this.onStudentAdded.emit(this.newStudent);
  }
}
