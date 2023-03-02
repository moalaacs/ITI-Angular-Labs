import { Injectable } from '@angular/core';
import { Student } from '../_models/student';

// @Injectable({
//   providedIn: 'root'
// })
export class StudentService {

  students:Student[]=[
    new Student(10,"Mona",9),
    new Student(20,"Ahmed",10),
    new Student(30,"Omar",8),
    new Student(40,"Salma",6),
  ]
  getAll(){
    return this.students;
  }
  add(newStudent:Student){
    if(newStudent.id>0 && newStudent.name!="" && newStudent.age>0){
      this.students.push(new Student(newStudent.id,newStudent.name,newStudent.age));
    }
    else {
      alert("Invalid input");
    }
  }
  constructor() { }
}
