import { Component, EventEmitter, Output } from '@angular/core';
import { StudentService } from 'src/app/_services/student.service';
import { Student } from '../../_models/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
  // providers: [StudentService]
})
export class StudentAddComponent {
  newStudent:Student = new Student(0,"",0);
  constructor(public studentService:StudentService){}
  save(){
    this.studentService.add(this.newStudent)
  }
}
