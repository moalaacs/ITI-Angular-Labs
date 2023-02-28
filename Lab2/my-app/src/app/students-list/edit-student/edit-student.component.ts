import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  // @Input('student') student:Student = {id: 0, name: "", age: 0};
  student:Student = new Student(0,"",0);
  @Output() onStudentEdited:EventEmitter<Student>=new EventEmitter<Student>();
  edit(){
    this.onStudentEdited.emit(this.student);
  }
}
