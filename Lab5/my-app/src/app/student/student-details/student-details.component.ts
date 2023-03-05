import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/_models/department';
import { Student } from 'src/app/_models/student';
import { StudentService } from 'src/app/_services/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  student:Student = new Student(3,"Ahmed",{} as Department);
  constructor(public studentService:StudentService,public activatedRoute:ActivatedRoute){
  }
  ngOnInit(){
    this.activatedRoute.params.subscribe(i=>{
      this.studentService.getStudentById(i['id']).subscribe(data=>{
        this.student=data;
      })
    })
  }
}
