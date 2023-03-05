import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/_services/student.service';
import { Student } from '../../_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  // providers: [StudentService]
})
export class StudentListComponent {
  constructor(public studentService: StudentService,public router:Router) { }
  students: Student[] = [];

  ngOnInit() {
    this.studentService.getAllStudents().subscribe((data) => {
      this.students = data;
    })
  }

  delete(id:number){
    this.studentService.deleteStudent(id).subscribe();
  }

  // add(newStudent:Student){
  //   this.students.push(newStudent);
  // }
  // delete(id:number){
  //   console.log(id);
  //   this.students=this.students.filter(std=>std.id !== id);
  // }
  // edit(student:Student){
  //   let index = this.students.findIndex(std=>std.id==student.id);
  //   if(student.id>0)
  //   {
  //     this.students[index].id = student.id;
  //     this.students[index].name = student.name;
  //     this.students[index].age = student.age;
  //     console.log(student);
  //   }
  //   else {
  //     alert("Not valid id")
  //   }
  // }
  // students:Student[]=[];

  // constructor(public studentService:StudentService){}

  // ngOnInit(){
  //   this.students = this.studentService.getAll();
  // }
}
