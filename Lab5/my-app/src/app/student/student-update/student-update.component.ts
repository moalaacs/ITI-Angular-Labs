import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/_models/department';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent {
  student:Student= new Student(1,"",{} as Department);
  constructor(public studentService:StudentService,public activatedRoute:ActivatedRoute){
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe(i=>{
      this.studentService.getStudentById(i['id']).subscribe(data=>{
        this.student=data;
      })
    })
  }

  update(student:Student){
    this.studentService.updateStudent(this.student).subscribe();
  }
}
