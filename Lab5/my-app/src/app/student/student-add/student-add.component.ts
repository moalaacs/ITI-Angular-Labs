import { Component, EventEmitter, Output } from '@angular/core';
import { Department } from 'src/app/_models/department';
import { StudentService } from 'src/app/_services/student.service';
import { Student } from '../../_models/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
  // providers: [StudentService]
})
export class StudentAddComponent {
  student: Student = new Student(0, "", {} as Department);

  constructor(public studentService: StudentService) { }
  save() {
    this.studentService.addStudent(this.student).subscribe()
  }
}
