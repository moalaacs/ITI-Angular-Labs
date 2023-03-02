import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../../_models/student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent {
  student:Student = new Student(0,"",0);
  @Output() onStudentEdited:EventEmitter<Student>=new EventEmitter<Student>();
  edit(){
    this.onStudentEdited.emit(this.student);
  }
}
